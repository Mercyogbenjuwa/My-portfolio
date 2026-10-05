import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Reveal styles only hide content once JS is known to run, so no-JS visitors still see everything. */}
          <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
