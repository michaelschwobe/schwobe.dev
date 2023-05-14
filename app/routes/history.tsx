import type { LinksFunction, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { findResume } from '~/models/resume.server';
import resumeStylesUrl from '~/styles/resume.css';
import { getDurationDateTime, getDurationHyphenated } from '~/utils/dates';

export async function loader() {
  const resume = await findResume();
  return json(resume);
}

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Employment History' }];
};

export const links: LinksFunction = () => [
  /* App / Icon */
  {
    rel: 'apple-touch-icon',
    href: '/apple-touch-icon.png',
    sizes: '180x180',
  },
  {
    rel: 'icon',
    href: '/favicon-32x32.png',
    sizes: '32x32',
    type: 'image/png',
  },
  {
    rel: 'icon',
    href: '/favicon-16x16.png',
    sizes: '16x16',
    type: 'image/png',
  },
  {
    rel: 'manifest',
    href: '/site.webmanifest',
  },
  {
    rel: 'mask-icon',
    href: '/safari-pinned-tab.svg',
    color: '#30838C',
  },

  /* Stylesheets */
  {
    rel: 'stylesheet',
    href: resumeStylesUrl,
  },

  /* Preloads */
  {
    rel: 'preload',
    href: '/fonts/oswald-v48-latin-300.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    href: '/fonts/oswald-v48-latin-700.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    href: '/fonts/roboto-v30-latin-300.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
];

export default function HistoryPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <main className="main" role="main">
        <section className="section section-1">
          <div className="container">
            <h2 className="section-title">
              <span>Employment History</span>
            </h2>

            {data.experiences.map((el) => {
              const durationDateTime = getDurationDateTime(
                el.employee.duration,
              );
              return (
                <div className="job" key={durationDateTime}>
                  <div className="row">
                    <div className="col-md-12">
                      <table>
                        <tbody>
                          <tr>
                            <th>Name</th>
                            <td>{el.employer.name}</td>
                          </tr>
                          <tr>
                            <th>Title</th>
                            <td>{el.employee.title}</td>
                          </tr>
                          <tr>
                            <th>Type</th>
                            <td>
                              {[
                                el.employee.type,
                                el.employee.status,
                                el.employee.location,
                              ].join(' / ')}
                            </td>
                          </tr>
                          <tr>
                            <th>Dates</th>
                            <td>
                              <time dateTime={durationDateTime}>
                                {getDurationHyphenated(durationDateTime, true)
                                  .split('–')
                                  .join(' to ')}
                              </time>{' '}
                            </td>
                          </tr>
                          <tr>
                            <th>Address</th>
                            <td>
                              {[
                                el.employer.streetAddress,
                                el.employer.addressLocality,
                                el.employer.addressRegion,
                              ].join(', ')}{' '}
                              {el.employer.postalCode}
                            </td>
                          </tr>
                          <tr>
                            <th>Phone</th>
                            <td>
                              {el.employer.telephone
                                ? el.employer.telephone
                                : 'N/A'}
                            </td>
                          </tr>
                          <tr>
                            <th>Website</th>
                            <td>
                              {el.employer.url ? (
                                <a href={el.employer.url}>{el.employer.url}</a>
                              ) : (
                                'N/A'
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
