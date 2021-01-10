import PropTypes from 'prop-types';

// -----------------------------------------------------------------------------

const Header = ({ title, description }) => (
  <header className="header" role="banner">
    <div className="container">
      <h1 className="site-title">{title}</h1>
      <p className="site-description">{description}</p>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Header.defaultProps = {
  title: 'Michael Schwobe',
  description: 'Senior Full Stack Engineer',
};

// -----------------------------------------------------------------------------

export default Header;
