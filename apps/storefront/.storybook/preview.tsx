import React from 'react';
import { ChakraProvider } from '@enterprise-application/design-system';

const withProvider = (Story) => (
  <ChakraProvider>
    <Story />
  </ChakraProvider>
);

export const decorators = [withProvider];