import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

interface LayoutProps {
  children?: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = '' }: LayoutProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <h1>#Header</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <span>|</span>
      <Link href="/other">
        <a>Other</a>
      </Link>
      <hr />
    </header>
    {children}
    <footer>
      <hr />
      <h1>#Footer</h1>
    </footer>
  </div>
);

export default Layout;
