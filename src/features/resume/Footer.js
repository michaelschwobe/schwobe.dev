const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="container">
      <div
        id="Michael-Schwobe"
        className="vcard h-card"
        itemScope
        itemType="https://schema.org/Person"
      >
        <div className="fn p-name" itemProp="name">
          <span className="given-name p-given-name" itemProp="givenName">
            Michael
          </span>{' '}
          <span className="family-name p-family-name" itemProp="familyName">
            Schwobe
          </span>
        </div>
        <div
          className="title job-title p-job-title p-experience screen-reader-text"
          itemProp="jobtitle"
        >
          Senior Front-End Developer
        </div>
        <div
          className="adr h-adr screen-reader-text"
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <div
            className="street-address p-street-address"
            itemProp="streetAddress"
          >
            3975 S Quimby Ave
          </div>
          <div>
            <span className="locality p-locality" itemProp="addressLocality">
              New Berlin
            </span>
            ,{' '}
            <span className="region p-region" itemProp="addressRegion">
              WI
            </span>{' '}
            <span className="postal-code p-postal-code" itemProp="postalCode">
              53151
            </span>
          </div>
        </div>
        <div className="email u-email" itemProp="email">
          mschwobe@gmail.com
        </div>
        <div className="tel p-tel" itemProp="telephone">
          (920) 279-0121
        </div>
        <div>
          <a
            className="url u-url screen-reader-text"
            itemProp="url"
            href="http://MichaelSchwobe.com"
          >
            Website
          </a>{' '}
          <a
            className="url u-url social-icon social-icon-linkedin"
            itemProp="url"
            href="https://www.linkedin.com/in/michaelschwobe"
          >
            <svg
              className="svg svg-linkedin"
              xmlns="https://www.w3.org/2000/svg"
              viewBox="-290 382.3 30 28.7"
              width="30"
            >
              <path
                className="svg-path-1"
                fill="#069"
                d="M-283.2 410.9v-19.3h-6.4v19.3h6.4zm-3.2-22c2.2 0 3.6-1.5 3.6-3.3 0-1.9-1.4-3.3-3.6-3.3s-3.6 1.4-3.6 3.3c0 1.8 1.4 3.3 3.6 3.3zm6.8 22h6.4v-10.8c0-.6 0-1.2.2-1.6.5-1.2 1.5-2.4 3.3-2.4 2.3 0 3.3 1.8 3.3 4.4v10.4h6.4v-11.1c0-5.9-3.2-8.7-7.4-8.7-3.5 0-5 1.9-5.8 3.3v-2.8h-6.4c.1 1.7 0 19.3 0 19.3z"
              />
            </svg>{' '}
            LinkedIn
          </a>{' '}
          <a
            className="url u-url social-icon social-icon-github"
            itemProp="url"
            href="https://github.com/michaelschwobe"
          >
            <svg
              className="svg svg-github"
              xmlns="https://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
            >
              <path
                className="svg-path-1"
                d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>{' '}
            GitHub
          </a>{' '}
          <a
            className="url u-url social-icon social-icon-twitter"
            itemProp="url"
            href="https://twitter.com/michael_schwobe"
          >
            <svg
              className="svg svg-twitter"
              xmlns="https://www.w3.org/2000/svg"
              viewBox="-148.2 385.1 30 24.4"
              width="30"
            >
              <path
                className="svg-path-1"
                fill="#2AA9E0"
                d="M-118.2 388c-1.1.5-2.3.8-3.5 1 1.3-.8 2.2-2 2.7-3.4-1.2.7-2.5 1.2-3.9 1.5-1.1-1.2-2.7-1.9-4.5-1.9-3.4 0-6.2 2.8-6.2 6.2 0 .5.1 1 .2 1.4-5.1-.3-9.7-2.7-12.7-6.4-.5.9-.8 2-.8 3.1 0 2.1 1.1 4 2.7 5.1-1 0-2-.3-2.8-.8v.1c0 3 2.1 5.5 4.9 6-.5.1-1.1.2-1.6.2-.4 0-.8 0-1.2-.1.8 2.4 3.1 4.2 5.7 4.3-2.1 1.7-4.8 2.6-7.6 2.6-.5 0-1 0-1.5-.1 2.7 1.7 6 2.8 9.4 2.8 11.3 0 17.5-9.4 17.5-17.5v-.8c1.3-1 2.3-2.1 3.2-3.3z"
              />
            </svg>{' '}
            Twitter
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// -----------------------------------------------------------------------------

export default Footer;
