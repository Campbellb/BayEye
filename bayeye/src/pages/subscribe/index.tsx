// NewsletterOption.js
import { Box, Checkbox, Flex, Heading, Text, Link, useStyleConfig } from '@chakra-ui/react';
// Subscribe.js
import { Container, VStack, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';
import { neighborhoods } from '@/data/neighborhoods';


const NewsletterOption = ({ id, title, label, frequency, neighborhood }) => {
  const link = neighborhood ? `/subscribe/preview?topic=neighborhood&neighborhood=${neighborhood}` : `/subscribe/preview?topic=${id}`;
  const styleConfig = useStyleConfig("CustomComponent", {}); // Replace with your custom component key if using

  return (
    <Box my="2" me="2" flexBasis={{ base: 'auto', md: '50%', lg: '33.33333%', xl: '25%' }} p="0">
      <Flex
        as="label"
        border="2px solid"
        borderColor="rgba(253, 85, 32)" // replace with Chakra UI color tokens if you have them
        bgColor="rgba(255,237,227)" // replace with Chakra UI color tokens if you have them
        p="0.5rem"
        align="center"
        borderRadius="0.75rem"
        cursor="default"
        w="19rem"
        h="100%"
        {...styleConfig}
      >
        <Checkbox id={id} name={title} value={id} defaultChecked m="0 1.2rem" alignSelf="center" />
        <Box flexDir="column" color="black">
          <Heading as="h6" size="md" fontWeight="normal">{label}</Heading>
          <Text fontSize="sm" color="#6c757d">{frequency}</Text>
          <Link href={link} isExternal>
            <Text fontSize="sm" color="#6c757d">Preview.</Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  )
};

const Subscribe = () => {
  return (
    <>
      <Head>
        <title>BayEye: The Best in AI-Curated Civic Insights</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxW="container.xl" py="6" bgColor="rgba(247, 246, 244)">
        <VStack spacing="4" alignItems={'left'}>
          <Flex direction="column" align="start" mb="2">
            <Heading as="h1" size="lg" fontFamily="'Open Sans', sans-serif" fontWeight="400">
              Manage Subscriptions
            </Heading>
            <Heading as="h6" size="xs" fontFamily="'Open Sans', sans-serif" fontWeight="400">
              Get smarter by subscribing to any of these BayEye newsletters!
            </Heading>
          </Flex>

          {/* BayEye on San Francisco Section */}
          <Heading as="h1" size="lg" fontFamily="'Open Sans', sans-serif" fontWeight="400" textAlign="left">
            BayEye on San Francisco
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing="4">
            <NewsletterOption
              id="supervisors"
              title="BayEye on SF Supervisors"
              label="SF Supervisors"
              frequency="Published 1x Week."
            />
            <NewsletterOption
              id="transportation"
              title="Transportation"
              label="Transportation"
              frequency="Published 1x Day. 3x Week."
            />
            <NewsletterOption
              id="cleansafesf"
              title="Clean Safe SF"
              label="Clean Safe SF"
              frequency="Published 1x Day. 7x Week."
            />
          </SimpleGrid>

          {/* BayEye on Neighborhoods Section */}
          <Heading as="h1" size="lg" fontFamily="'Open Sans', sans-serif" fontWeight="400">
            BayEye on Neighborhoods
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing="4">
            {neighborhoods.map((neighborhood) => (
              <NewsletterOption
                key={`${neighborhood}-index`}
                id={'neighborhood'}
                title={neighborhood}
                label={neighborhood}
                neighborhood={neighborhood}
                frequency="Published 1x Day. 7x Week."
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </>
  );
};

export default Subscribe;
