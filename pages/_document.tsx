import Document, { DocumentContext, Html, Main, Head, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <link href="/css/globals.css" rel="stylesheet" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
