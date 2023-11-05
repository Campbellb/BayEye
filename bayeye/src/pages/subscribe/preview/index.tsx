import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Link,
  Image,
  Divider,
  HStack,
  useColorModeValue,
  extendTheme,
  ChakraProvider
} from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { processSections } from '@/data/processSections'
import { schema } from '@/data/schema';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.700',
      },
    },
  },
});

const Preview = () => {
  const [newsletterContent, setNewsletterContent] = useState('');
  const router = useRouter();
  const topic = typeof router.query.topic === 'string' ? router.query.topic : undefined;
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.50');

  useEffect(() => {
    const fetchData = async () => {
      if (topic && schema[topic.toLowerCase()]) {
        try {
          const content = await processSections(schema[topic.toLowerCase()]);
          console.log('content', content)
          // setNewsletterContent(content); // Assuming content is a string or JSX
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [topic]); // Dependency array, this effect runs when 'topic' changes

  // Check for 'newsletterContent' state before rendering
  if (!newsletterContent) return <div>Loading...</div>;

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="3xl" bg="white" py={8} px={4} mt={6} shadow="md" borderRadius="lg">
        <VStack spacing={5} as="article" align="left">
          <Heading as="h2" size="lg" fontWeight="bold">
            BayEye on {topic}
          </Heading>

          {/* Main story */}
          <Box p={5} shadow="sm" bg={'gray.50'} borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Main Feature Story Title
            </Heading>
            <Text mb={2}>A brief introduction or summary of the main feature story. Make it engaging and informative.</Text>
            <Button colorScheme="blue" size="sm">
              Read more
            </Button>
          </Box>

          {/* Divider */}
          <Divider orientation="horizontal" />

          {/* Secondary stories */}
          <VStack spacing={4} divider={<Divider orientation="horizontal" />} w="100%">
            <Box w="100%">
              <Heading as="h4" size="md" mb={2}>
                Secondary Story Title
              </Heading>
              <Text mb={2}>Summary of the secondary story. Keep it short and to the point.</Text>
              <Link color="blue.500" href="#">
                Read more
              </Link>
            </Box>

            {/* Repeat for additional stories */}

          </VStack>

          {/* Footer */}
          <Box pt={5}>
            <Text fontSize="sm">
              You're receiving this email because you subscribed to our newsletter.
            </Text>
            <HStack spacing={4} justify="center" pt={2}>
              <Link color="blue.500" href="#">
                Unsubscribe
              </Link>
              <Link color="blue.500" href="#">
                Manage Preferences
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Preview;
