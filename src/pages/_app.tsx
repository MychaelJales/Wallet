import { AppProps } from 'next/app';
import Head from 'next/head';
import { CambiosProvider } from '../context/Context';

import GlobalStyles from '../styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <CambiosProvider>
      <Head>
        <title>Boilerplate NextJS</title>
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, Reac, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </CambiosProvider>
  );
}

export default App;
