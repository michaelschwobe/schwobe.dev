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
      type: 'Contract' | 'Salaried';
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

// -----------------------------------------------------------------------------

export async function findResume() {
  return new Promise<Resume>((resolve) =>
    resolve({
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
            'From fine arts to graphic design, to web design and development, my educational background and over 17 years of experience have given me a unique set of skills, setting me apart from other developers. That comprehensive expertise, combined with my relentless pursuit of cutting-edge technology, has led to innovative problem solving and enhanced developer and user experiences.',
        },
        {
          title: 'Hobbies',
          description:
            'My former stint as a barista has given me an appreciation for great coffee, tea, and music. When I’m not sitting at a computer or strumming a guitar, adrenaline sports are my passion, and spending as much time outdoors as possible is my pursuit. Weather permitting, I’m usually mountain biking, snowboarding, longboarding, or running.',
        },
      ],
      skills: {
        preferred: [
          'Apple macOS',
          'Axios',
          'Brave Browser',
          'Create React App',
          'CSS-in-JS',
          'CSS',
          'DiffMerge',
          'Discord',
          'ESLint',
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
          'Babel',
          'Bash',
          'Bitbucket',
          'BrowserStack',
          'Confluence',
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
        // {
        //   employer: {
        //     name: "L.L.Bean",
        //     streetAddress: "15 Casco Street",
        //     addressLocality: "Freeport",
        //     addressRegion: "ME",
        //     postalCode: "04033",
        //     telephone: "(800) 441-5713",
        //     url: "https://www.LLBean.com",
        //   },
        //   employee: {
        //     title: "Senior Frontend Developer",
        //     description: "TBD",
        //     type: "Contract",
        //     status: "Full-time",
        //     location: "Remote",
        //     duration: ["2022-06-06", undefined],
        //   },
        // },
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
            streetAddress: '430 E 29th Street',
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
              'Developed both client and server side code for form-heavy, secure, sales tools used by field representatives.',
            type: 'Salaried',
            status: 'Full-time',
            location: 'Onsite',
            duration: ['2018-05-14', '2021-04-01'],
            highlights: [
              'Created a sales app enabling financial representatives to collect, calculate, and validate data used to generate multi page PDFs which are then used to sell insurance policies to both businesses and households. Tech used: • Environment specific build-time and run-time variables (config, Docker, env-cmd, JavaScript, JSON) • GraphQL and REST APIs, static routes, logging, security, and validation middleware (Joi, Koa, Node, Newrelic) • Fetch and update data with side-effects (fetch, React class lifecycles, Redux, Redux sagas, Reselect) • Custom components and UI framework integration for (CSS modules, Sass, React) • Over 80% E2E and unit test coverage (Cypress, Enzyme, Jest) • Clean and secure code (ESLint, Prettier, Sonarcube) • Bronze certified CI/CD pipelines (Docker, GitLab, Kubernetes)',
              'Created a scalable CMS app used to CRUD data consumed by the insurance sales app. Tech used: • Amazon DynamoDB database (configured/provisioned via Terraform) • REST API, static routes, logging, security, and validation middleware (Joi, Koa, Node, Newrelic) • Environment specific mocked server responses (config, env-cmd, msw) • Fetch, cache and update data (react-query, axios, react hooks/context) • Custom components and UI framework integration for (CSS modules, Sass, React) • 100% actual unit test coverage (jest, supertest, @testing-library/dom, @testing-library/react) • Clean and secure code (ESLint, Prettier, Sonarcube) • Comprehensive documentation (Markdown, HTML) • Silver certified CI/CD pipelines (Docker, GitLab, Kubernetes)',
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
            clients: [
              'CoorsLight',
              'Everbrite',
              'Marathon Petroleum',
              'Subway',
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
            telephone: '(262) 544-8800',
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
    }),
  );
}
