import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children?: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = '' }: LayoutProps) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
  </React.Fragment>
);

export default Layout;
