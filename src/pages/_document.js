import Document, {Head, Main, NextScript, Html} from 'next/document';
// Import styled components ServerStyleSheet
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    const sheet = new ServerStyleSheet();

    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return { ...initialProps, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8"/>
          {this.props.styleTags}
          
          <link rel="stylesheet" href="/static/global.css" />

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