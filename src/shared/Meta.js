import PropTypes from 'prop-types';

// -----------------------------------------------------------------------------

const Meta = ({
  author,
  description,
  domain,
  title,
  twitterId,
  url,
  appName,
  appColor,
  appDir,
  imgUrl,
  imgWidth,
  imgHeight,
}) => (
  <>
    {/* Primary Meta Tags */}
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="author" content={author} />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {imgUrl ? <meta property="og:image" content={imgUrl} /> : null}
    {imgWidth ? <meta property="og:image:width" content={imgWidth} /> : null}
    {imgHeight ? <meta property="og:image:height" content={imgHeight} /> : null}

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content={domain} />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:creator" content={`@${twitterId}`} />
    {imgUrl ? <meta property="twitter:image" content={imgUrl} /> : null}

    {/* Favicons */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${appDir}/apple-touch-icon.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${appDir}/favicon-32x32.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${appDir}/favicon-16x16.png`}
    />
    <link rel="manifest" href={`${appDir}/site.webmanifest`} />
    <link
      rel="mask-icon"
      href={`${appDir}/safari-pinned-tab.svg`}
      color={appColor}
    />
    <meta name="apple-mobile-web-app-title" content={appName} />
    <meta name="application-name" content={appName} />
    <meta name="msapplication-TileColor" content={appColor} />
    <meta name="theme-color" content={appColor} />
  </>
);

Meta.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  twitterId: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  appName: PropTypes.string.isRequired,
  appColor: PropTypes.string.isRequired,
  appDir: PropTypes.string,
  imgUrl: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
};

Meta.defaultProps = {
  appDir: '',
  imgUrl: undefined,
  imgWidth: undefined,
  imgHeight: undefined,
};

// -----------------------------------------------------------------------------

export default Meta;
