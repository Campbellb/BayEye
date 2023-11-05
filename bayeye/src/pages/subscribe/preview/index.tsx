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
  ChakraProvider,
  Skeleton,
  Flex
} from '@chakra-ui/react';
import { processSections } from '@/data/processSections'
import { schema } from '@/data/schema';
import * as S from './styles';
import SocialShareIcons from './SocialShareIcons';
import Head from 'next/head';

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
  const [newsletterContent, setNewsletterContent] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const topic = typeof router.query.topic === 'string' ? router.query.topic : undefined;
  const neighborhood = typeof router.query.neighborhood === 'string' ? router.query.neighborhood : undefined;
  const personalizationData = typeof router.query.personalizationData === 'string' ? router.query.personalizationData : undefined;
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.50');

  useEffect(() => {
    const fetchData = async () => {
      if (topic && schema[topic]) {
        try {
          setIsLoading(true);
          const content = await processSections(schema[topic], neighborhood, personalizationData);
          setNewsletterContent(content); // Assuming content is a string or JSX
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [topic]);

  // Check for 'newsletterContent' state before rendering
  if (!newsletterContent || !topic || isLoading || !schema[topic]) return (
    <ChakraProvider theme={theme}>
      <Container maxW="3xl" bg="white" py={8} px={4} mt={6} shadow="md" borderRadius="lg">
        <VStack spacing={5} as="article" align="left">
          <Skeleton height="40px" />
          <Box p={5} shadow="sm" bg={bgColor} borderRadius="md">
            <Skeleton height="20px" mb={2} />
            <Skeleton height="15px" mb={2} />
            <Skeleton height="30px" width="100px" />
          </Box>

          <Divider orientation="horizontal" />

          <VStack spacing={4} divider={<Divider orientation="horizontal" />} w="100%">
            <Skeleton height="80px" w="100%" p={8} />
            <Skeleton height="80px" w="100%" p={8} />
            <Skeleton height="80px" w="100%" p={8} />
          </VStack>

          <Box pt={5}>
            <Skeleton height="15px" w="200px" />
            <HStack spacing={4} justify="center" pt={2}>
              <Skeleton height="15px" w="100px" />
              <Skeleton height="15px" w="100px" />
            </HStack>
          </Box>
        </VStack>
      </Container>
    </ChakraProvider>
  );
  const newsletterTitle = schema[topic].title?.toUpperCase() ?? `BAYEYE ON ${neighborhood ? neighborhood.toUpperCase() : topic.toUpperCase()}`;


  return (
    <>
    <ChakraProvider theme={theme}>
    
      <Container maxW="3xl" bg="white" py={8} px={4} mt={6} shadow="md" borderRadius="lg">
        <VStack spacing={5} as="article" align="left">
            <Flex align="center" color={'#292d3d'}>
              <Box
                fontSize="4xl"
                color="orange.400"
                lineHeight="1em" // Ensure the emoji and braces are the same height
                marginRight="2" // Adds spacing between the icon and the title
              >
                <Text as="span">
                  {'{'}
                </Text>
                <span role="img" aria-label="eye">👁️</span>
                <Text as="span">
                  {'}'}
                </Text>
              </Box>
              <Heading as="h2" size="lg" fontWeight="bold">
                {newsletterTitle}
              </Heading>
            </Flex>
          <Heading as="h4" size="sm" fontWeight="bold" ps={0.5} color={'#546982'}>
            Generated {personalizationData && JSON.parse(personalizationData)?.name ? `for ${JSON.parse(personalizationData)?.name} on ${new Date().toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' }) }` : `on ${new Date().toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })}`}
          </Heading>
          <>
            <Box p={5} shadow="sm" bg={'gray.50'} borderRadius="md">
              <S.NewsletterContainer dangerouslySetInnerHTML={{ __html: newsletterContent[0] }} />
            </Box>
            <SocialShareIcons />

            {/* Divider */}
            <Divider orientation="horizontal" />
          </>

          {/* Secondary stories */}
          <VStack spacing={4} divider={<Divider orientation="horizontal" />} w="100%">
            {
              newsletterContent.map((section, index) => {
                if(index > 0) {
                  return (
                    <>
                      <Box w="100%" p={8} key={`section-${index}`}>
                        <S.NewsletterContainer dangerouslySetInnerHTML={{ __html: section }} />
                      </Box>
                      <SocialShareIcons />
                    </>
              )}
              })
            }
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
    </>
  );
};

export default Preview;
