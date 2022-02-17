import cn from 'classnames';
import Head from 'next/head';

import me from '../shared/me';
import Meta from '../shared/Meta';

// -----------------------------------------------------------------------------

const Home = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{me.siteTitle}</title>
      <Meta
        author={me.fullName}
        description={me.siteDescription}
        domain={me.domain}
        title={me.siteTitle}
        twitterId={me.twitterId}
        url={me.url}
        appName={me.fullName}
        appColor="#30838C"
        imgUrl={`${me.url}og-image.jpg`}
        imgWidth={1280}
        imgHeight={720}
      />
      <link
        rel="preload"
        href="/fonts/oswald-v35-latin-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href="/fonts/oswald-v35-latin-300.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href="/fonts/roboto-v20-latin-300.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="true"
      />
      <link rel="stylesheet" href="/resume.css" />
    </Head>

    <header className="header" role="banner">
      <div className="container">
        <h1 className="site-title">{me.fullName}</h1>
        <p className="site-description">{me.jobTitle}</p>
      </div>
    </header>

    <main className="main" role="main">
      <section className="section section-1">
        <div className="container">
          <h2 className="section-title">
            <span>Profile</span>
          </h2>
          <div className="row">
            <div className="col-md-6">
              <h3>I am a Hybrid Designer/Developer.</h3>
              <p>
                From fine arts to graphic design, to web design and development,
                my educational background has given me a unique foundation for
                my career as a Full-Stack Engineer. That comprehensive skillset
                and my interest in cutting-edge technology, combined with over
                15 years of experience, has led to an eye for design that sets
                me apart from other developers.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Interests</h3>
              <p>
                When I&rsquo;m not sitting at a computer, adrenaline sports are
                my passion and spending as much time outdoors is my pursuit.
                Weather permitting, I&rsquo;m usually running, mountain biking,
                longboarding, skateboarding, or snowboarding. My former stint as
                a barista has given me an appreciation for great coffee. You
                will otherwise be able to find me sipping a cup of fresh ground
                at my desk, researching or experimenting with new apps and
                techniques in my free time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-2">
        <div className="container">
          <h2 className="section-title">
            <span>Experience</span>
          </h2>
          <div className="job">
            <div className="row">
              <div className="col-md-6">
                <h3 className="job-title">Senior Front-End Developer</h3>
                <div className="job-duration">February 2022&ndash;Present</div>
                <div className="job-location">
                  <a href="https://www.redhat.com">Red Hat</a> &mdash;
                  Milwaukee, WI (Remote)
                </div>
                <p className="job-description">
                  Contracted to build and maintain IT training &amp;
                  certification applications.
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="job-clients-heading">Clients</h4>
                <ul className="job-clients-list">
                  <li>Red Hat</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="job">
            <div className="row">
              <div className="col-md-6">
                <h3 className="job-title">Lead Front-End Developer</h3>
                <div className="job-duration">
                  April 2021&ndash;January 2022
                </div>
                <div className="job-location">
                  <a href="https://www.bms.com">Bristol Myers Squibb</a> &mdash;
                  Milwaukee, WI (Remote)
                </div>
                <p className="job-description">
                  Partner with scientific research teams to design, build and
                  maintain modern front-ends for complex data-driven
                  applications.
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="job-clients-heading">Clients</h4>
                <ul className="job-clients-list">
                  <li>Bristol Myers Squibb</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="job">
            <div className="row">
              <div className="col-md-6">
                <h3 className="job-title">Senior Full-Stack Engineer</h3>
                <div className="job-duration">May 2018&ndash;April 2021</div>
                <div className="job-location">
                  <a href="https://northwesternmutual.com">
                    Northwestern Mutual
                  </a>{' '}
                  &mdash; Milwaukee, WI
                </div>
                <p className="job-description">
                  Develop both server and client side code for secure, UI heavy
                  applications used by representatives in the field.
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="job-clients-heading">Clients</h4>
                <ul className="job-clients-list">
                  <li>Northwestern Mutual</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="job">
            <div className="row">
              <div className="col-md-6">
                <h3 className="job-title">
                  Senior <span className="avoid-break">Front-End</span>{' '}
                  Developer
                </h3>
                <div className="job-duration">Dec 2016&ndash;May 2018</div>
                <div className="job-location">
                  <a href="https://baderrutter.com">Bader Rutter</a> &mdash;
                  Milwaukee, WI
                </div>
                <p className="job-description">
                  Contracted to build any new client facing applications.
                  Responsibilities include front-end code and mentoring.
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="job-clients-heading">Clients</h4>
                <ul className="job-clients-list">
                  <li>DowDuPont</li>
                  <li>New Holland</li>
                  <li>Phytogen</li>
                  <li>The Standard</li>
                  <li>Zoetis</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="job">
            <div className="row">
              <div className="col-md-6">
                <h3 className="job-title">
                  Senior <span className="avoid-break">Front-End</span>{' '}
                  Developer
                </h3>
                <div className="job-duration">May 2016&ndash;Dec 2016</div>
                <div className="job-location">
                  <a href="https://Everbrite.com">Everbrite</a> &mdash;
                  Greenfield, WI
                </div>
                <p className="job-description">
                  Contracted to modernize Everbrite&rsquo;s current internal and
                  external software and also build any new client facing
                  applications. Responsibilities include architecting, UX/UI,
                  design, front-end code, and mentoring.
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="job-clients-heading">Clients</h4>
                <ul className="job-clients-list">
                  <li>CoorsLight</li>
                  <li>Everbrite</li>
                  <li>Marathon Petroleum</li>
                  <li>Subway</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="job">
            <div className="row">
              <div className="col-md-6">
                <h3 className="job-title">
                  <span className="avoid-break">Front-End</span> Engineer
                </h3>
                <div className="job-duration">Sep 2014&ndash;May 2016</div>
                <div className="job-location">
                  RocketLawnchair &mdash; Waukesha, WI
                </div>
                <p className="job-description">
                  As the lead digital resource, I am responsible for everything
                  from campaign assets, custom WordPress development, to server
                  setup and maintenance. In addition to my regular duties, I
                  coordinated the development of a long-envisioned digital
                  concept. What was once only an idea, became a fully developed,
                  billable product suite.
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="job-clients-heading">Clients</h4>
                <ul className="job-clients-list">
                  <li>Beta4/SnotTape</li>
                  <li>CPI Alliance</li>
                  <li>ESI</li>
                  <li>GE Healthcare</li>
                  <li>Hydro Electronic Devices</li>
                  <li>Martinizing</li>
                  <li>Price Engineering</li>
                  <li>Racine Metal Fabrication</li>
                  <li>Rite-Hite Fans</li>
                  <li>RocketLawnchair</li>
                  <li>State National Companies</li>
                  <li>Storage Systems Midwest</li>
                  <li>Trico Corporation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="job">
            <div className="row">
              <div className="col-md-6">
                <h3 className="job-title">
                  Senior <span className="avoid-break">Front-End</span>{' '}
                  Developer
                </h3>
                <div className="job-duration">Mar 2013&ndash;Sep 2014</div>
                <div className="job-location">
                  <a href="https://7SummitsInc.com/">7Summits</a> &mdash;
                  Milwaukee, WI
                </div>
                <p className="job-description">
                  My primary role was to customize and extend the Jive social
                  business web application platform to provide or enhance
                  successful online communities for enterprise clients.
                  Secondarily, I also developed custom WordPress themes and
                  plugins.
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="job-clients-heading">Clients</h4>
                <ul className="job-clients-list">
                  <li>Allstate</li>
                  <li>American Chemical Society</li>
                  <li>Boston Consulting Group</li>
                  <li>CollegeBoard</li>
                  <li>DeVry/Becker</li>
                  <li>Kohls</li>
                  <li>Milwaukee School of Engineering</li>
                  <li>Penfield</li>
                  <li>QlikTech</li>
                  <li>Riverbed Technology</li>
                  <li>SAP</li>
                  <li>Trusted Global Buyers Network</li>
                  <li>Wisconsin Independent Learning College</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="job">
            <div className="row">
              <div className="col-md-6">
                <h3 className="job-title">
                  Senior <span className="avoid-break">Front-End</span>{' '}
                  Developer, Interactive Designer
                </h3>
                <div className="job-duration">Nov 2011&ndash;Mar 2013</div>
                <div className="job-location">
                  <a href="https://Responsory.com/">Responsory</a> (formerly
                  Johnson Direct) &mdash; Brookfield, WI
                </div>
                <p className="job-description">
                  To save thousands of dollars yearly and help modernize
                  existing process, hardware, and software, I researched and
                  implemented an agency IT roadmap. I created and maintained all
                  online, offline, and internal web-based efforts including
                  email campaigns, SEO, analytics, and social media. I designed
                  and developed web sites from concept to completion using rapid
                  application prototypes, custom WordPress theme development,
                  and mobile-first responsive web design methods.
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="job-clients-heading">Clients</h4>
                <ul className="job-clients-list">
                  <li>AAA</li>
                  <li>AEI/Saco Polymers</li>
                  <li>AM Mailing Services</li>
                  <li>Andis</li>
                  <li>Associated Bag Company</li>
                  <li>Bartolottas</li>
                  <li>Blue Cross of Idaho</li>
                  <li>Cree</li>
                  <li>Delta Dental</li>
                  <li>Duluth Trading Company</li>
                  <li>Integrative Therapeutics</li>
                  <li>John Deere</li>
                  <li>Johnson Direct</li>
                  <li>Kenall Lighting</li>
                  <li>Kleen Test Products</li>
                  <li>Metlife</li>
                  <li>Milwaukee Water Works</li>
                  <li>New Concept Development Center</li>
                  <li>NiSource Retail Services</li>
                  <li>RBP Chemical Technology</li>
                  <li>Restaurant.com</li>
                  <li>Sterling</li>
                  <li>VFW</li>
                  <li>WEA Trust</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="job">
            <div className="row">
              <div className="col-md-6">
                <h3 className="job-title">
                  Senior <span className="avoid-break">Front-End</span>{' '}
                  Developer
                </h3>
                <div className="job-duration">May 2006&ndash;Nov 2011</div>
                <div className="job-location">
                  <a href="https://Laughlin.com">Laughlin Constable</a> &mdash;
                  Milwaukee, WI
                </div>
                <p className="job-description">
                  As a Senior/Lead Front-End Developer, I researched, developed
                  and implemented coding standards for agency-wide use. I also
                  expanded our digital staff by interviewing and training new
                  employees and facilitated collaboration among team members.
                  Regular duties included accurate conversions of Photoshop
                  files to fully functioning websites in a fast-paced
                  environment, with a strong emphasis on efficiency and detail.
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="job-clients-heading">Clients</h4>
                <ul className="job-clients-list">
                  <li>Associated Bank</li>
                  <li>Aurora &amp; Aurora Baycare</li>
                  <li>Baird</li>
                  <li>Bon-Ton</li>
                  <li>Bridgestone</li>
                  <li>Brookfield Academy</li>
                  <li>Delnor</li>
                  <li>ExpertTire</li>
                  <li>Firestone</li>
                  <li>Global Brewers Initiative</li>
                  <li>Harley/Buell</li>
                  <li>Kimberly Clark</li>
                  <li>Laughlin Constable</li>
                  <li>Master Lock</li>
                  <li>McDonalds</li>
                  <li>Medela</li>
                  <li>Mobium</li>
                  <li>Navistar</li>
                  <li>PayFlex</li>
                  <li>Pearls for Girls</li>
                  <li>Red Cross</li>
                  <li>Shopko</li>
                  <li>Terlato</li>
                  <li>Tires Plus</li>
                  <li>Toppers Pizza</li>
                  <li>UIMCC</li>
                  <li>WI Tourism</li>
                  <li>Wolverine</li>
                  <li>YES Vodka</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="job">
            <div className="row">
              <div className="col-md-6">
                <h3 className="job-title">
                  Web <span className="avoid-break">Producer II</span>
                </h3>
                <div className="job-duration">Feb 2006&ndash;May 2006</div>
                <div className="job-location">
                  <a href="http://TriseptSolutions.com">Trisept Solutions</a>{' '}
                  &mdash; Brown Deer, WI
                </div>
                <p className="job-description">
                  While at Trisept, I constructed and designed web-based
                  banners/advertisements, created and maintained web content,
                  and developed or refined templates for increased efficiency.
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="job-clients-heading">Clients</h4>
                <ul className="job-clients-list">
                  <li>Disney</li>
                  <li>Funjet Vacations</li>
                  <li>Only Vegas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-3">
        <div className="container">
          <h2 className="section-title">
            <span>Education</span>
          </h2>
          <div className="school">
            <h3 className="school-title">
              Bachelor of Fine Arts &mdash;{' '}
              <span className="avoid-break">Graphic Design</span>
            </h3>
            <div className="school-duration">Dec 2005</div>
            <div className="school-location">
              University of Wisconsin - Oshkosh &mdash;{' '}
              <span className="avoid-break">Oshkosh, WI</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-4">
        <div className="container">
          <h2 className="section-title">
            <span>Skills</span>
          </h2>
          <div className="row">
            <div className="col-md-4">
              <h3 className="skills-list-heading">Languages</h3>
              <ul className="skills-list">
                <li>Bash</li>
                <li>CSS-in-JS</li>
                <li>CSS</li>
                <li>GraphQL</li>
                <li>Handlebars</li>
                <li>HTML</li>
                <li>JavaScript/ES6+</li>
                <li>JSON</li>
                <li>JSX</li>
                <li>Less</li>
                <li>Markdown</li>
                <li>Nunjucks</li>
                <li>PHP</li>
                <li>PostCSS</li>
                <li>Python</li>
                <li>Sass</li>
                <li>TypeScript</li>
                <li>XML</li>
                <li>Zsh</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3 className="skills-list-heading">Frameworks/Libraries/APIs</h3>
              <ul className="skills-list">
                <li>Apollo Server/Client</li>
                <li>Babel</li>
                <li>Electron</li>
                <li>ESLint</li>
                <li>Express</li>
                <li>Ghost</li>
                <li>Git</li>
                <li>Google Maps</li>
                <li>Gulp</li>
                <li>Homebrew</li>
                <li>Jekyll</li>
                <li>Jest</li>
                <li>Jive</li>
                <li>jQuery</li>
                <li>Koa</li>
                <li>localForage</li>
                <li>Node</li>
                <li>NPM/Yarn</li>
                <li>Oh My Zsh</li>
                <li>OpenGraph</li>
                <li>Parcel</li>
                <li>Prettier</li>
                <li>Prisma</li>
                <li>React</li>
                <li>Redux</li>
                <li>REST</li>
                <li>Storybook</li>
                <li>Twitter</li>
                <li>Webpack</li>
                <li>WordPress</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3 className="skills-list-heading">Software/Tools</h3>
              <ul className="skills-list">
                <li>Adobe Experience Design</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>BrowserStack</li>
                <li>DiffMerge</li>
                <li>Google Chrome</li>
                <li>Insomnia</li>
                <li>iTerm</li>
                <li>MAMP</li>
                <li>Sketch</li>
                <li>Slack</li>
                <li>SourceTree</li>
                <li>Sublime Text</li>
                <li>Transmit</li>
                <li>Visual Studio Code</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3 className="skills-list-heading">Platforms/Storage</h3>
              <ul className="skills-list">
                <li>Apache</li>
                <li>Bitbucket</li>
                <li>Dropbox</li>
                <li>GitHub</li>
                <li>GitLab</li>
                <li>Jira</li>
                <li>Linux</li>
                <li>macOS</li>
                <li>MySQL</li>
                <li>Node</li>
                <li>SVN (self-hosted)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer" role="contentinfo">
      <div className="container">
        <div
          id={`${me.givenName}-${me.familyName}`}
          className="vcard h-card"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div className="fn p-name" itemProp="name">
            <span className="given-name p-given-name" itemProp="givenName">
              {me.givenName}
            </span>{' '}
            <span className="family-name p-family-name" itemProp="familyName">
              {me.familyName}
            </span>
          </div>
          <div
            className="title job-title p-job-title p-experience screen-reader-text"
            itemProp="jobtitle"
          >
            {me.jobTitle}
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
              {me.streetAddress}
            </div>
            <div>
              <span className="locality p-locality" itemProp="addressLocality">
                {me.addressLocality}
              </span>
              ,{' '}
              <span className="region p-region" itemProp="addressRegion">
                {me.addressRegion}
              </span>{' '}
              <span className="postal-code p-postal-code" itemProp="postalCode">
                {me.postalCode}
              </span>
            </div>
          </div>
          <div className="email u-email" itemProp="email">
            {me.email}
          </div>
          <div className="tel p-tel" itemProp="telephone">
            {me.telephone}
          </div>
          <div>
            {me.socials.map((social) => (
              <a
                className={cn('url u-url', {
                  'social-icon': social.d,
                  [`social-icon-${social.id}`]: social.d,
                  'screen-reader-text': !social.d,
                })}
                itemProp="url"
                aria-label={social.text}
                href={social.href}
                key={social.id}
              >
                {social.d ? (
                  <svg
                    className={`svg svg-${social.id}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    aria-describedby={`svg-title-${social.id} svg-desc-${social.id}`}
                    role="img"
                  >
                    <title id={`svg-title-${social.id}`}>{social.text}</title>
                    <desc id={`svg-desc-${social.id}`}>icon</desc>
                    <path className="svg-path-1" d={social.d} />
                  </svg>
                ) : (
                  social.text
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  </>
);

// -----------------------------------------------------------------------------

export default Home;
