import Document, {Head, Main, NextScript, Html} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, ...page, styleTags };
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
            href="/fonts/noto/NotoSansKR-Medium.otf"
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

MyDocument.displayName = "MyDocument";