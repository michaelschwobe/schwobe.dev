import 'normalize.css';
import '../globals.css';

import PropTypes from 'prop-types';

// -----------------------------------------------------------------------------

const Application = ({ Component, pageProps }) => <Component {...pageProps} />;

Application.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}),
};

Application.defaultProps = {
  pageProps: undefined,
};

// -----------------------------------------------------------------------------

export default Application;
