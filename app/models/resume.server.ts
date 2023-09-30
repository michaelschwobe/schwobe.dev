export interface Resume {
  givenName: string;
  familyName: string;
  fullName: string;
  jobTitle: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  telephone: string;
  email: string;
  url: string;
  socials: {
    id: 'github' | 'linkedin' | 'twitter';
    name: string;
    url: string;
    username: string;
  }[];
  about: {
    title: string;
    description: string;
  }[];
  skills: {
    preferred: string[];
    other: string[];
  };
  experiences: {
    employer: {
      name: string;
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      telephone: string;
      url?: string | undefined;
    };
    employee: {
      title: string;
      description: string;
      type: 'Contract' | 'Salaried' | 'Self-employed';
      status: 'Full-time' | 'Part-time';
      location: 'Onsite' | 'Remote';
      duration: [string, string | undefined];
      highlights?: string[];
      clients?: string[];
    };
  }[];
  educations: {
    institution: {
      name: string;
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      telephone: string;
      url?: string | undefined;
    };
    student: {
      degrees: string[];
      majors: string[];
      emphasis: string[];
      duration: [string, string | undefined];
    };
  }[];
}

const resume = {
  givenName: 'Michael',
  familyName: 'Schwobe',
  fullName: 'Michael Schwobe',
  jobTitle: 'Lead Frontend Developer / Senior Full Stack Engineer',
  streetAddress: '3975 S Quimby Ave',
  addressLocality: 'New Berlin',
  addressRegion: 'WI',
  postalCode: '53151',
  telephone: '(920) 279-0121',
  email: 'mschwobe@gmail.com',
  url: 'https://Schwobe.dev',
  socials: [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/michaelschwobe',
      username: 'michaelschwobe',
    },
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/michaelschwobe',
      username: 'michaelschwobe',
    },
    {
      id: 'twitter',
      name: 'Twitter',
      url: 'https://twitter.com/michael_schwobe',
      username: 'michael_schwobe',
    },
  ],
  about: [
    {
      title: 'Career',
      description:
        'With over 17 years of experience spanning fine art, graphic design, web design, and web development, I have built up a uniquely diverse skill set that distinguishes me from other developers. My educational background and enthusiasm for emerging technologies have enabled me to solve problems in innovative ways and create enhanced experiences for both developers and end users.',
    },
    {
      title: 'Hobbies',
      description:
        'My time working as a barista fostered an enjoyment of quality coffee, tea, and music. However, when I’m not at my computer or playing guitar, adrenaline sports are my passion and spending as much time outdoors as possible is my pursuit. Weather permitting, I’m usually mountain biking, snowboarding, longboarding, or running.',
    },
  ],
  skills: {
    preferred: [
      'Apple macOS',
      'Brave Browser',
      'CSS',
      'Discord',
      'ESLint',
      'Fetch',
      'Figma',
      'GitHub',
      'GitLab',
      'Google Chrome',
      'GraphQL',
      'Homebrew',
      'HTML',
      'Insomnia App',
      'iTerm',
      'JavaScript',
      'Jest',
      'JSON',
      'JSX',
      'Markdown',
      'Mock Service Worker',
      'Netlify',
      'Next.js',
      'Node.js',
      'NPM',
      'Playwright',
      'PNPM',
      'PostCSS',
      'Prettier',
      'Prisma',
      'React-Query',
      'React',
      'Remix',
      'REST',
      'Slack',
      'Sourcetree',
      'Storybook',
      'StyleLint',
      'Tailwind CSS',
      'Testing Library',
      'Turborepo',
      'TypeScript',
      'Visual Studio Code',
      'Vite',
      'Yarn',
    ],
    other: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Adobe XD',
      'Apache',
      'Apollo Client',
      'Apollo Server',
      'Axios',
      'Babel',
      'Bash',
      'Bitbucket',
      'BrowserStack',
      'Confluence',
      'Create React App',
      'CSS-in-JS',
      'Cypress',
      'DiffMerge',
      'Dropbox',
      'Electron',
      'Express',
      'Ghost.js',
      'Git',
      'Gulp',
      'Handlebars',
      'Jekyll',
      'Jira',
      'Jive',
      'jQuery',
      'Koa',
      'Less',
      'MAMP',
      'MediaTemple',
      'MySQL',
      'Nunjucks',
      'Oh-My-Zsh',
      'Parcel',
      'PHP',
      'Python',
      'Redux',
      'Sass',
      'Sketch',
      'Sublime Text',
      'SVN',
      'Transmit',
      'Webpack',
      'WordPress',
      'XML',
      'Zsh',
    ],
  },
  experiences: [
    {
      employer: {
        name: 'Thrivent',
        streetAddress: '600 Portland Ave S Suite 100',
        addressLocality: 'Minneapolis',
        addressRegion: 'MN',
        postalCode: '55415',
        telephone: '(800) 847-4836',
        url: 'https://www.Thrivent.com',
      },
      employee: {
        title: 'Lead Frontend Engineer',
        description:
          'Led the technical design, development, and governance of technology solutions that delivered business value across the organization while continuously improving time to market.',
        type: 'Contract',
        status: 'Full-time',
        location: 'Remote',
        duration: ['2022-12-01', '2023-05-31'],
        highlights: [
          'Improved lead generation and capture by rewriting legacy applications and websites (Brightspot CMS, Cypress, GraphQL, Jest, Launch Darkly, Next.js, Nx, React Query, Styled Components, and TypeScript)',
          'Developed a new design system proof-of-concept (Class Variance Authority, Radix, React, Storybook, Tailwind CSS, and TypeScript)',
          'Mentored and coached team members while building accessible, search engine optimized, server-side rendered applications',
        ],
      },
    },
    {
      employer: {
        name: 'L.L.Bean',
        streetAddress: '15 Casco St',
        addressLocality: 'Freeport',
        addressRegion: 'ME',
        postalCode: '04033',
        telephone: '(800) 441-5713',
        url: 'https://www.LLBean.com',
      },
      employee: {
        title: 'Senior Frontend Developer',
        description:
          'Designed, developed, and tested eCommerce website features end-to-end.',
        type: 'Contract',
        status: 'Full-time',
        location: 'Remote',
        duration: ['2022-06-06', '2022-11-30'],
        highlights: [
          'Developed a new REST API service that sits in between front-end applications and data services. (Axios, Docker, GitHub, Jenkins, NestJS, supertest, Swagger/OpenAPI, TypeScript)',
          'Published npm packages to address cross-team tooling (ESLint, Husky, Jest, lint-staged, Node, Prettier, React, Storybook, TypeScript). Summary: 2 repos deprecated, 24 repos updated, 3 repos created with extensive documentation and instruction, 21098 problems before (12497 errors, 8601 warnings), 4962 problems after (0 errors, 4962 warnings)',
          'Refactored multiple front-end focused repositories (Axios, Docker, GitHub, Jenkins, React classes and hooks, Redux, Sass, Webpack)',
        ],
      },
    },
    {
      employer: {
        name: 'Ameriprise Financial Services',
        streetAddress: '70100 Ameriprise Financial Center',
        addressLocality: 'Minneapolis',
        addressRegion: 'MN',
        postalCode: '55474',
        telephone: '(800) 862-7919',
        url: 'https://www.Ameriprise.com',
      },
      employee: {
        title: 'Software Engineering Lead',
        description:
          'Led a platform enablement team responsible for the success of other software teams through the provision of customization, maintenance, R&D, and support.',
        type: 'Contract',
        status: 'Full-time',
        location: 'Remote',
        duration: ['2022-03-28', '2022-05-20'],
      },
    },
    {
      employer: {
        name: 'Bristol-Myers Squibb',
        streetAddress: '430 E 29th St',
        addressLocality: '14th Floor, New York',
        addressRegion: 'NY',
        postalCode: '10016',
        telephone: '(800) 332-2056',
        url: 'https://www.BMS.com',
      },
      employee: {
        title: 'Lead Frontend Developer',
        description:
          'Led an innovation team tasked with researching and developing a next generation cross-scientific-field data commons application that would be used to store, share, access, and interact with digital objects generated from biomedical and behavioral research.',
        type: 'Contract',
        status: 'Full-time',
        location: 'Remote',
        duration: ['2021-04-12', '2022-01-14'],
        highlights: [
          'Extensively researched accessibility and color theory in order to both create and document a new UI library (React, TypeScript, Mock Service Worker, Radix, Stitches, Storybook, Jest, ESLint, Prettier, and others)',
          'Prototype MVPs in multiple frameworks with performance focused schema-driven code (Create-React-App, Nextjs, Remix, Vite, and others)',
          'Explore and contrast modern package management, bundling, and monorepo tools (Esbuild, Lerna, Npm/Yarn workspaces, Nx, Parcel, Pnpm, SWC, Turborepo, Webpack 4/5, Vite, and others)',
        ],
      },
    },
    {
      employer: {
        name: 'Northwestern Mutual',
        streetAddress: '720 E Wisconsin Ave',
        addressLocality: 'Milwaukee',
        addressRegion: 'WI',
        postalCode: '53202',
        telephone: '(866) 950-4644',
        url: 'https://NorthwesternMutual.com',
      },
      employee: {
        title: 'Senior Full Stack Engineer',
        description:
          'Played a pivotal role in the development of comprehensive sales tools catering to field representatives, encompassing both client and server-side code. My primary focus was on crafting a sophisticated sales application, designed to empower financial representatives in gathering, calculating, and validating data essential for generating complex multi-page PDF documents. These meticulously crafted PDFs served as instrumental assets for selling insurance policies to both businesses and households. In addition to the sales app, I also contributed to the creation of a scalable Content Management System (CMS) application. This CMS application was instrumental in facilitating the Create, Read, Update, and Delete (CRUD) operations for the data utilized by the insurance sales app, enhancing its overall efficiency and usability.',
        type: 'Salaried',
        status: 'Full-time',
        location: 'Onsite',
        duration: ['2018-05-14', '2021-04-01'],
        highlights: [
          'Environment specific mocked server responses, build-time and run-time variables (config, Docker, env-cmd, JavaScript, JSON, Mock Service Worker)',
          'GraphQL and REST APIs, static routes, logging, security, and validation middleware (Joi, Koa, Node, Newrelic)',
          'Fetch and update data with side-effects (axios, fetch, react-query, React hooks/context, React class lifecycles, Redux, Redux sagas, Reselect)',
          'Custom components and UI framework integration for (CSS modules, Sass, React)',
          'Over 80% E2E and unit test coverage (Cypress, Enzyme, Jest)',
          'Clean and secure code (ESLint, Prettier, Sonarcube)',
          'Comprehensive documentation (Markdown, HTML)',
          'Bronze certified CI/CD pipelines (Docker, GitLab, Kubernetes)',
        ],
      },
    },
    {
      employer: {
        name: 'Bader Rutter',
        streetAddress: '1433 N Water St',
        addressLocality: 'Milwaukee',
        addressRegion: 'WI',
        postalCode: '53202',
        telephone: '(262) 784-7200',
        url: 'https://BaderRutter.com',
      },
      employee: {
        title: 'Senior Frontend Developer',
        description:
          'Built new client facing applications and websites and provided intra team mentoring.',
        type: 'Contract',
        status: 'Full-time',
        location: 'Onsite',
        duration: ['2016-12-27', '2018-05-11'],
        clients: [
          'DowDuPont',
          'New Holland',
          'Phytogen',
          'The Standard',
          'Zoetis',
        ],
        highlights: [
          'Created a sales tool for Dow representatives to use while selling out in the field that gives them the ability to create then generate account-based PDF reports with volume, notes, and bonus tracking.',
          'Created a tax-deferred, retirement planning savings estimator written as a portable single-page-application that was eventually zipped and sent to the client for them to reuse wherever they saw fit.',
          'Created an offline-capable "Nitrogen Stabilizer Formulation Retailer Calculator" app — that lives within an existing DowDuPont’s Microsoft Surface app and also on their website — was built with the purpose of aiding retailers calculate overall financial savings for clients when using N-Serve or Insight branded products.',
          'Created a single-page offline-capable "Dairy Wellness Outcomes" app — that lives within an existing Zoetis-customized version of the iPad Pitcher app — was built with the purpose of creating/reviewing/updating initiatives and scorecards for better evaluation/tracking of dairy farm progress/goals.',
          'Created a "BRD Solutions" website that won a BBN GOLDEN BEES AWARDS 2017 for Best Website',
          'Created a "Deader Than Dead Tour" static site generated with shared data and assets between landing pages enabling a staggered release schedule pending tour stop updates.',
        ],
      },
    },
    {
      employer: {
        name: 'Everbrite',
        streetAddress: '4949 S 110th St',
        addressLocality: 'Greenfield',
        addressRegion: 'WI',
        postalCode: '53228',
        telephone: '(414) 529-3500',
        url: 'https://Everbrite.com',
      },
      employee: {
        title: 'Senior Frontend Developer',
        description:
          'Architected, designed, developed, and deployed client extranets and branding resource websites.',
        type: 'Contract',
        status: 'Full-time',
        location: 'Onsite',
        duration: ['2016-05-25', '2016-12-16'],
        clients: ['CoorsLight', 'Everbrite', 'Marathon Petroleum', 'Subway'],
        highlights: [
          'Conceptualized and constructed a single-page application with the explicit objective of streamlining the onboarding and renewal procedures for Everbrite’s vendor and installer network. This dedicated extranet platform enables installers to log in, effortlessly manage their company’s vital information, including contacts, locations, equipment/services, and pricing rates. Additionally, installers can readily accept renewal agreements or upload new certificates.',
        ],
      },
    },
    {
      employer: {
        name: 'RocketLawnchair',
        streetAddress: 'N8W22323 Johnson Dr',
        addressLocality: ' Waukesha',
        addressRegion: 'WI',
        postalCode: '53186',
        telephone: '',
      },
      employee: {
        title: 'Frontend Engineer',
        description:
          'Created campaign assets, custom WordPress sites, managed servers, and developed a billable product suite.',
        type: 'Salaried',
        status: 'Full-time',
        location: 'Onsite',
        duration: ['2014-09-22', '2016-05-02'],
        clients: [
          'Beta4/SnotTape',
          'CPI Alliance',
          'ESI',
          'GE Healthcare',
          'Hydro Electronic Devices',
          'Martinizing',
          'Price Engineering',
          'Racine Metal Fabrication',
          'Rite-Hite Fans',
          'RocketLawnchair',
          'State National Companies',
          'Storage Systems Midwest',
          'Trico Corporation',
        ],
      },
    },
    {
      employer: {
        name: '7Summits',
        streetAddress: '200 N Jefferson St',
        addressLocality: 'Milwaukee',
        addressRegion: 'WI',
        postalCode: '53202',
        telephone: '(877) 803-9286',
        url: 'https://7SummitsInc.com',
      },
      employee: {
        title: 'Senior Frontend Developer',
        description:
          'Customized and extended both Jive and WordPress social business platforms to cultivate successful online communities for enterprise clients.',
        type: 'Salaried',
        status: 'Full-time',
        location: 'Onsite',
        duration: ['2013-03-25', '2014-09-19'],
        clients: [
          'Allstate',
          'American Chemical Society',
          'Boston Consulting Group',
          'CollegeBoard',
          'DeVry/Becker',
          'Kohls',
          'Milwaukee School of Engineering',
          'Penfield',
          'QlikTech',
          'Riverbed Technology',
          'SAP',
          'Trusted Global Buyers Network',
          'Wisconsin Independent Learning College',
        ],
      },
    },
    {
      employer: {
        name: 'Responsory',
        streetAddress: '250 Bishops Way, Suite 203',
        addressLocality: 'Brookfield',
        addressRegion: 'WI',
        postalCode: '53005',
        telephone: '(800) 710-2750',
        url: 'https://Responsory.com',
      },
      employee: {
        title: 'Senior Frontend Developer / Interactive Designer',
        description:
          'Created and maintained marketing and advertising efforts such as email campaigns, SEO, analytics, social media, and websites.',
        type: 'Salaried',
        status: 'Full-time',
        location: 'Onsite',
        duration: ['2011-11-28', '2013-03-22'],
        clients: [
          'AAA',
          'AEI/Saco Polymers',
          'AM Mailing Services',
          'Andis',
          'Associated Bag Company',
          'Bartolottas',
          'Blue Cross of Idaho',
          'Cree',
          'Delta Dental',
          'Duluth Trading Company',
          'Integrative Therapeutics',
          'John Deere',
          'Johnson Direct',
          'Kenall Lighting',
          'Kleen Test Products',
          'Metlife',
          'Milwaukee Water Works',
          'New Concept Development Center',
          'NiSource Retail Services',
          'RBP Chemical Technology',
          'Restaurant.com',
          'Sterling',
          'VFW',
          'WEA Trust',
        ],
      },
    },
    {
      employer: {
        name: 'Kunst Empire',
        streetAddress: '3975 S Quimby Ave',
        addressLocality: 'New Berlin',
        addressRegion: 'WI',
        postalCode: '53151',
        telephone: '(920) 279-0121',
        url: 'https://Schwobe.dev',
      },
      employee: {
        title: 'Owner, Designer, Developer',
        description: 'Freelance web design, programming, and print.',
        type: 'Self-employed',
        status: 'Part-time',
        location: 'Remote',
        duration: ['2006-01-01', '2012-12-31'],
        clients: [
          'Green-Tech Treecare',
          'Stoddart Support Solutions',
          'Libiamo Restaurant',
          'Nessun Dorma Pub',
          'GeoToys, LLC.',
        ],
        highlights: [
          'Conceptualize, design and construct websites or print materials according to clients’ specifications.',
          'Offer consultation services, create identity and improve branding for new and existing businesses.',
          'Maximize website usability, readability, and searchability.',
        ],
      },
    },
    {
      employer: {
        name: 'Laughlin Constable',
        streetAddress: '207 E Michigan St',
        addressLocality: 'Milwaukee',
        addressRegion: 'WI',
        postalCode: '53202',
        telephone: '(414) 272-2400',
        url: 'https://Laughlin.com',
      },
      employee: {
        title: 'Senior Frontend Developer',
        description:
          'Established and grew the front-end team both in numbers and skill level during an explosive period of company growth.',
        type: 'Salaried',
        status: 'Full-time',
        location: 'Onsite',
        duration: ['2006-05-08', '2011-11-05'],
        clients: [
          'Associated Bank',
          'Aurora & Aurora Baycare',
          'Baird',
          'Bon-Ton',
          'Bridgestone',
          'Brookfield Academy',
          'Delnor',
          'ExpertTire',
          'Firestone',
          'Global Brewers Initiative',
          'Harley/Buell',
          'Kimberly Clark',
          'Laughlin Constable',
          'Master Lock',
          'McDonalds',
          'Medela',
          'Mobium',
          'Navistar',
          'PayFlex',
          'Pearls for Girls',
          'Red Cross',
          'Shopko',
          'Terlato',
          'Tires Plus',
          'Toppers Pizza',
          'UIMCC',
          'WI Tourism',
          'Wolverine',
          'YES Vodka',
        ],
      },
    },
    {
      employer: {
        name: 'Trisept Solutions',
        streetAddress: '8969 N Port Washington Rd',
        addressLocality: 'Milwaukee',
        addressRegion: 'WI',
        postalCode: '53217',
        telephone: '(414) 934-3900',
        url: 'http://TriseptSolutions.com',
      },
      employee: {
        title: 'Web Developer II',
        description:
          'Designed web-based banners/advertisements, managed web content, and refined templates for increased efficiency.',
        type: 'Salaried',
        status: 'Full-time',
        location: 'Onsite',
        duration: ['2006-02-20', '2006-05-05'],
        clients: ['Disney', 'Funjet Vacations', 'Only Vegas'],
      },
    },
  ],
  educations: [
    {
      institution: {
        name: 'University of Wisconsin Oshkosh',
        streetAddress: '800 Algoma Blvd',
        addressLocality: 'Oshkosh',
        addressRegion: 'WI',
        postalCode: '54901',
        telephone: '(920) 424-1234',
        url: 'https://uwosh.edu',
      },
      student: {
        degrees: ['Bachelor of Fine Arts'],
        majors: ['Art'],
        emphasis: ['Drawing', 'Painting', 'Graphic Design'],
        duration: ['1996-09', '2005-12'],
      },
    },
  ],
} satisfies Resume;

export async function findResume() {
  return new Promise<Resume>((resolve) => resolve(resume));
}
