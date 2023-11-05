// Dummy React components for demonstration purposes
const Text = ({ children }) => `<Text>${children}</Text>`;
const Heading = ({ children }) => `<Heading as="h1" size="xl">${children}</Heading>`;
const UnorderedList = ({ children }) => `<UnorderedList>${children}</UnorderedList>`;
const ListItem = ({ children }) => `<ListItem>${children}</ListItem>`;

// A map of tags to components
const tagToComponentMap = {
  'p': Text,
  'h1': Heading,
  'ul': UnorderedList,
  'li': ListItem,
  // ... add more mappings as needed
};

// Function to create a React component from a tag
const createComponentFromTag = (tag, content) => {
  const Component = tagToComponentMap[tag];
  return Component ? Component({ children: content }) : content; // If no component is found, return the content as is
};

// Function to replace HTML tags with Chakra UI components
export const replaceHtmlTagsWithChakra = (htmlString) => {
  if (typeof htmlString !== 'string') {
    throw new TypeError('The input must be a string.');
  }

  return htmlString.replace(/<([a-z]+)(?: .+?)?>(.*?)<\/\1>/gis, (match, tag, content) => {
    // Replace tags with component calls
    return createComponentFromTag(tag.toLowerCase(), content);
  });
};