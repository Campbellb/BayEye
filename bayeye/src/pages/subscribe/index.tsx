// NewsletterOption.js
import { Box, Checkbox, Flex, Heading, Text, Link, useStyleConfig, Container, VStack, SimpleGrid, Textarea, Button } from '@chakra-ui/react';
// Subscribe.js
import Head from 'next/head';
import { neighborhoods } from '@/data/neighborhoods';
import { useState } from 'react';


const NewsletterOption = ({ id, title, label, frequency, neighborhood, personalizationData }) => {
  const link = neighborhood ? `/subscribe/preview?topic=neighborhood&neighborhood=${neighborhood}&personalizationData=${JSON.stringify(personalizationData)}` : `/subscribe/preview?topic=${id}&personalizationData=${JSON.stringify(personalizationData)}`;
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
  const [personalizationData, setPersonalizationData] = useState({
    name: "Campbell",
    occupation: "Software Engineer",
    neighborhood: "SoMa",
    age: 35,
    activities: ["walking", "hiking", "biking"],
    language: "English"
  });
  const [inputValue, setInputValue] = useState(JSON.stringify(personalizationData, null, 2));

  const handleSubscribe = () => {
    try {
      const parsedData = JSON.parse(inputValue);
      setPersonalizationData(parsedData);
      // You can also add additional logic to show a success message or perform other actions
    } catch (error) {
      console.error('Failed to subscribe: Invalid JSON data', error);
      // Handle error (possibly show error message to user)
    }
  };

  return (
    <>
      <Head>
        <title>BayEye: The Best in AI-Curated Civic Insights</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxW="container.xl" py="6" bgColor="rgba(247, 246, 244)">
        <VStack spacing="4" alignItems={'left'}>
          <Flex direction="column" align="start" mb="2">
            <Heading as="h1" size="lg" fontFamily="'Open Sans', sans-serif" fontWeight="400" textAlign="left">
              Manage Subscriptions
            </Heading>
            <Heading as="h6" size="md" fontFamily="'Open Sans', sans-serif" fontWeight="400">
              Get smarter by subscribing to any of these BayEye newsletters!
            </Heading>
          </Flex>

          <Flex direction="column" align="start" mb="2" w="full">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              w="full"
              minHeight="150px"
              fontSize="sm"
              mb="3"
            />
            <Button
              onClick={handleSubscribe}
              bgColor={'rgba(253, 85, 32)'}
              color="white"
              _hover={{ bgColor: 'rgba(253, 85, 32)' }}
              borderRadius="xl"
              size="md"
              alignSelf="flex-end"
            >
              Subscribe
            </Button>
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
              personalizationData={personalizationData}
            />
            <NewsletterOption
              id="transportation"
              title="Transportation"
              label="Transportation"
              frequency="Published 1x Day. 3x Week."
              personalizationData={personalizationData}
            />
            <NewsletterOption
              id="cleansafesf"
              title="Clean Safe SF"
              label="Clean Safe SF"
              frequency="Published 1x Day. 7x Week."
              personalizationData={personalizationData}
            />
            <NewsletterOption
              id="community"
              title="Community"
              label="Community"
              frequency="Published 1x Day. 1x Week."
              personalizationData={personalizationData}
            />
          </SimpleGrid>

          {/* BayEye on Neighborhoods Section */}
          <Heading as="h1" size="lg" fontFamily="'Open Sans', sans-serif" fontWeight="400">
            BayEye on San Francisco Neighborhoods
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
                personalizationData={personalizationData}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </>
  );
};

export default Subscribe;
