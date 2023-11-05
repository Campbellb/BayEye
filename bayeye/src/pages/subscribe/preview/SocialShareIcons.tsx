import React from 'react';
import { IconButton, HStack } from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaEnvelope, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const SocialShareIcons = () => {
  return (
    <HStack justifyContent="center" spacing={4}>
      {/* Twitter Icon */}
      <IconButton
        as="a"
        href="https://twitter.com/intent/tweet?text=YourTextToShare"
        target="_blank"
        aria-label="Share on Twitter"
        icon={<FaTwitter />}
        rounded="full"
        size="lg"
        backgroundColor="rgba(247,248,249)"
        color={'#292d3d'}
        _hover={{ bg: 'rgba(247,248,249)' }}
      />

      {/* LinkedIn Icon */}
      <IconButton
        as="a"
        href="https://www.linkedin.com/shareArticle?mini=true&url=YourUrlToShare&title=YourTitle&summary=YourSummary"
        target="_blank"
        aria-label="Share on LinkedIn"
        icon={<FaLinkedin />}
        rounded="full"
        size="lg"
        color={'#292d3d'}
        backgroundColor={'rgba(247,248,249)'}
        _hover={{ bg: 'rgba(247,248,249)' }}
      />

      {/* Email Icon */}
      <IconButton
        as="a"
        href="mailto:?subject=YourSubject&body=YourBodyText"
        target="_blank"
        aria-label="Share via Email"
        icon={<FaEnvelope />}
        rounded="full"
        size="lg"
        backgroundColor="rgba(247,248,249)"
        color={'#292d3d'}
        _hover={{ bg: 'rgba(247,248,249)' }}
      />

      {/* Thumbs Up Icon */}
      <IconButton
        aria-label="Thumbs Up"
        icon={<FaThumbsUp />}
        rounded="full"
        size="lg"
        backgroundColor="rgba(247,248,249)"
        color={'#292d3d'}
        _hover={{ bg: 'rgba(247,248,249)' }}
      />

      {/* Thumbs Down Icon */}
      <IconButton
        aria-label="Thumbs Down"
        icon={<FaThumbsDown />}
        rounded="full"
        size="lg"
        backgroundColor="rgba(247,248,249)"
        color={'#292d3d'}
        _hover={{ bg: 'rgba(247,248,249)' }}
      />
    </HStack>
  );
};

export default SocialShareIcons;
