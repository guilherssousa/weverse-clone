import Document, {Head, Main, NextScript, Html} from 'next/document';
// Import styled components ServerStyleSheet
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8"/>

          <link href="/static/global.css" rel="stylesheet"/>

          <link
            rel="preload"
            href="/fonts/noto/NotoSansKR-Black.otf"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/noto/NotoSansKR-Bold.otf"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/noto/NotoSansKR-Light.otf"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/noto/NotoSansKR-Regular.otf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
            <Main/>
            <NextScript/>
        </body>
      </Html>
    );
  }
}