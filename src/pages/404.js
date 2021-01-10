import Head from 'next/head';
import Link from 'next/link';

import Header from '../features/resume/Header';
import { title, description } from '../features/resume/shared';

// -----------------------------------------------------------------------------

const Four04 = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Page Not Found - {title}</title>
      <meta name="description" content={description} />
    </Head>

    <Header title="Error 404" description="Page Not Found" />

    <main className="main" role="main">
      <section className="section section-1">
        <div className="container">
          <h2 className="section-title">
            <span>Question All Existence</span>
          </h2>
          <p>
            Sorry, but whatever you were trying to view does not exist and quite
            possibly never existed. Don’t thonk too hard about it, try the{' '}
            <Link href="/">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>homepage</a>
            </Link>
            .
          </p>
        </div>
      </section>
      {/* next line for footer angle bgcolor matching, and cuz i lazy. */}
      <section className="section section-2" />
    </main>
  </>
);

// -----------------------------------------------------------------------------

export default Four04;
