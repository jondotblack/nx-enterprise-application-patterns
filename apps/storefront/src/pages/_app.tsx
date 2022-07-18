import { AppProps } from 'next/app';
import { ChakraProvider } from '@enterprise-application/design-system';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
