import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const withProvider = (Story) => (
  <ChakraProvider>
    <Story />
  </ChakraProvider>
);

export const decorators = [withProvider];