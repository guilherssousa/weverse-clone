import Document, {Head, Main, NextScript, Html} from 'next/document';
// Import styled components ServerStyleSheet
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return {...page, styleTags};
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