import { AppProps } from 'next/app';
import Head from 'next/head';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { CambiosProvider } from '../context/Context';

/* import GlobalStyles from '../styles/global'; */

function App({ Component, pageProps }: AppProps) {
  return (
    <CambiosProvider>
      <ScopedCssBaseline>
        <Head>
          <title>MJ Wallet in NextJS</title>
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, Reac, NextJS and Styled Components"
          />
        </Head>
        {/* <GlobalStyles /> */}
        <Component {...pageProps} />
      </ScopedCssBaseline>
    </CambiosProvider>
  );
}

export default App;
