import Document, { Html, Head, Main, NextScript } from 'next/document';

import Footer from '../features/resume/Footer';
import { title, description } from '../features/resume/shared';

// -----------------------------------------------------------------------------

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://michaelschwobe.com/" />
          <meta property="og:type" content="profile" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta
            property="og:image"
            content="https://michaelschwobe.com/og-image.jpg"
          />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="720" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="michaelschwobe.com" />
          <meta property="twitter:url" content="https://michaelschwobe.com/" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:image"
            content="https://michaelschwobe.com/og-image.jpg"
          />

          {/* Favicons */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#30838C" />
          <meta name="apple-mobile-web-app-title" content="Michael Schwobe" />
          <meta name="application-name" content="Michael Schwobe" />
          <meta name="msapplication-TileColor" content="#30838C" />
          <meta name="theme-color" content="#30838C" />
        </Head>

        <body className="site">
          <Main />

          <Footer />

          <NextScript />
        </body>
      </Html>
    );
  }
}

// -----------------------------------------------------------------------------

export default MyDocument;
