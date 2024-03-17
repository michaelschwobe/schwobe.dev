import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import clsx from 'clsx';
import { findResume } from '~/models/resume.server';
import {
  getDurationDateTime,
  getDurationFormatted,
  getDurationHyphenated,
} from '~/utils/dates';

export async function loader() {
  const resume = await findResume();
  return json(resume);
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const title = `${data?.fullName}, ${data?.jobTitle}`;
  const description = `Resume for ${data?.fullName}, a ${data?.jobTitle} based out of ${data?.addressLocality}, ${data?.addressRegion}.`;
  const author = data?.fullName;
  const url = data?.url;
  const domain = data?.url.replace('https://', '');
  const appName = data?.url.replace('https://', '');
  const image = data?.url.concat('/favicons/screenshot-wide.png');
  const imageWidth = '1200';
  const imageHeight = '630';
  const color = '#30838C';
  const twitterUsername = data?.socials.find(
    (el) => el.id === 'twitter',
  )?.username;
  const creator = twitterUsername ? `@${twitterUsername}` : undefined;

  return [
    /* Primary */
    { title },
    { name: 'description', content: description },
    { name: 'author', content: author },

    /* App / Icon */
    { name: 'apple-mobile-web-app-title', content: appName },
    { name: 'application-name', content: appName },
    { name: 'msapplication-TileColor', content: color },
    { name: 'theme-color', content: color },

    /* Facebook / Open Graph */
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:image:width', content: imageWidth },
    { property: 'og:image:height', content: imageHeight },

    /* Twitter */
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: domain },
    { property: 'twitter:url', content: url },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: description },
    { property: 'twitter:creator', content: creator },
    { property: 'twitter:image', content: image },
  ];
};

export default function ResumePage() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <header className="header" role="banner">
        <div className="container">
          <h1 className="site-title">{data.fullName}</h1>
          <p className="site-description">{data.jobTitle}</p>
        </div>
      </header>

      <main className="main" role="main">
        <section className="section section-1">
          <div className="container">
            <h2 className="section-title">
              <span>About</span>
            </h2>
            <div className="row">
              {data.about.map((el) => (
                <div className="col-md-6" key={el.title}>
                  <h3 className="about-heading">{el.title}</h3>
                  <p>{el.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-2">
          <div className="container">
            <h2 className="section-title">
              <span>Experience</span>
            </h2>

            {data.experiences.map((el) => {
              const durationDateTime = getDurationDateTime(
                el.employee.duration,
              );
              return (
                <div className="job" key={durationDateTime}>
                  <div className="row">
                    <div
                      className={el.employee.clients ? 'col-md-6' : 'col-md-12'}
                    >
                      <h3 className="job-title">{el.employee.title}</h3>
                      <div className="job-duration">
                        <time dateTime={durationDateTime}>
                          {getDurationHyphenated(durationDateTime)} (
                          {getDurationFormatted(durationDateTime)})
                        </time>
                      </div>
                      <div className="job-location">
                        {el.employer.url ? (
                          <a href={el.employer.url}>{el.employer.name}</a>
                        ) : (
                          <span>{el.employer.name}</span>
                        )}{' '}
                        &mdash;{' '}
                        {[
                          el.employer.addressLocality,
                          el.employer.addressRegion,
                        ].join(', ')}{' '}
                        (
                        {[
                          el.employee.type,
                          el.employee.status,
                          el.employee.location,
                        ].join(' / ')}
                        )
                      </div>
                      <p className="job-description">
                        {el.employee.description}
                      </p>
                      {el.employee.highlights &&
                      el.employee.highlights.length > 0 ? (
                        <details>
                          <summary className="job-details-heading">
                            Additional Highlights
                          </summary>
                          <ul>
                            {el.employee.highlights.map((highlight) => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                        </details>
                      ) : null}
                    </div>
                    {el.employee.clients ? (
                      <div className="col-md-6">
                        <h4 className="job-clients-heading">Clients</h4>
                        <ul className="job-clients-list">
                          {el.employee.clients.map((client) => (
                            <li key={client}>{client}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section section-3">
          <div className="container">
            <h2 className="section-title">
              <span>Education</span>
            </h2>
            {data.educations.map((el) => {
              const durationDateTime = getDurationDateTime(el.student.duration);
              return (
                <div className="school" key={durationDateTime}>
                  <h3 className="school-title">
                    {el.student.degrees} &mdash;{' '}
                    <span className="avoid-break">
                      {el.student.emphasis.join(', ')}
                    </span>
                  </h3>

                  <time className="school-duration" dateTime={durationDateTime}>
                    {getDurationHyphenated(durationDateTime)}
                  </time>
                  <div className="school-location">
                    {el.institution.url ? (
                      <a href={el.institution.url}>{el.institution.name}</a>
                    ) : (
                      <span>{el.institution.name}</span>
                    )}{' '}
                    &mdash;{' '}
                    <span className="avoid-break">
                      {[
                        el.institution.addressLocality,
                        el.institution.addressRegion,
                      ].join(', ')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section section-4">
          <div className="container">
            <h2 className="section-title">
              <span>Skills</span>
            </h2>
            <div className="row">
              <div className="col-md-6">
                <h3 className="skills-list-heading">Preferred</h3>
                <ul className="skills-list">
                  {data.skills.preferred.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <h3 className="skills-list-heading">Additional</h3>
                <ul className="skills-list">
                  {data.skills.other.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <div
            id={`${data.givenName}-${data.familyName}`}
            className="vcard h-card"
            itemScope
            itemType="https://schema.org/Person"
          >
            <div className="fn p-name" itemProp="name">
              <span className="given-name p-given-name" itemProp="givenName">
                {data.givenName}
              </span>{' '}
              <span className="family-name p-family-name" itemProp="familyName">
                {data.familyName}
              </span>
            </div>
            <div
              className="title job-title p-job-title p-experience sr-only"
              itemProp="jobtitle"
            >
              {data.jobTitle}
            </div>
            <div
              className="adr h-adr sr-only"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <div
                className="street-address p-street-address"
                itemProp="streetAddress"
              >
                {data.streetAddress}
              </div>
              <div>
                <span
                  className="locality p-locality"
                  itemProp="addressLocality"
                >
                  {data.addressLocality}
                </span>
                ,{' '}
                <span className="region p-region" itemProp="addressRegion">
                  {data.addressRegion}
                </span>{' '}
                <span
                  className="postal-code p-postal-code"
                  itemProp="postalCode"
                >
                  {data.postalCode}
                </span>
              </div>
            </div>
            <div className="email u-email" itemProp="email">
              {data.email}
            </div>
            <div className="tel p-tel" itemProp="telephone">
              {data.telephone}
            </div>
            <div>
              {data.socials.map((social) => (
                <a
                  className={clsx([
                    'url',
                    'u-url',
                    'social-icon',
                    `social-icon-${social.id}`,
                  ])}
                  itemProp="url"
                  href={social.url}
                  key={social.id}
                >
                  <svg
                    className={`svg svg-${social.id}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    aria-describedby={`svg-title-${social.id} svg-desc-${social.id}`}
                    role="img"
                  >
                    <title id={`svg-title-${social.id}`}>{social.name}</title>
                    <desc id={`svg-desc-${social.id}`}>icon</desc>
                    <path
                      className="svg-path-1"
                      d={
                        social.id === 'github'
                          ? 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
                          : social.id === 'linkedin'
                            ? 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'
                            : 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'
                      }
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
