import 'normalize.css';
import '../global.css';

import PropTypes from 'prop-types';

// -----------------------------------------------------------------------------

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}),
};

MyApp.defaultProps = {
  pageProps: undefined,
};

// -----------------------------------------------------------------------------

export default MyApp;
