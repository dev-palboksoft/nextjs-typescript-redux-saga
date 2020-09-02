import React from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { wrapper } from '../store';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>Example page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default wrapper.withRedux(MyApp);
