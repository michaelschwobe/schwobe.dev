import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import clsx from 'clsx';
import { findResume } from '~/models/resume.server';
import { formatTime } from '~/utils/dates';

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
      <header className="header">
        <div className="container">
          <h1 className="site-title">{data.fullName}</h1>
          <p className="site-description">{data.jobTitle}</p>
        </div>
      </header>

      <main className="main">
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
              const times = formatTime({
                datesUnformatted: el.employee.duration,
                referenceDate: new Date(),
                formatStrIn: 'yyyy-MM-dd',
                formatStrOut: 'MMM yyyy',
              });
              return (
                <div
                  className="job"
                  key={
                    times.dateStartUnformatted +
                    times.dateEndUnformatted +
                    el.employer.name
                  }
                >
                  <div className="row">
                    <div
                      className={el.employee.clients ? 'col-md-6' : 'col-md-12'}
                    >
                      <h3 className="job-title">{el.employee.title}</h3>
                      <div className="job-duration">
                        <time dateTime={times.dateStartUnformatted}>
                          {times.dateStartFormatted}
                        </time>
                        &ndash;
                        <time
                          dateTime={times.dateEndUnformatted}
                          className={
                            times.dateEndIsPresent ? 'sr-only' : undefined
                          }
                        >
                          {times.dateEndFormatted}
                        </time>
                        {times.dateEndIsPresent ? 'Present' : null} (
                        {times.durationFormatted})
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
              const times = formatTime({
                datesUnformatted: el.student.duration,
                referenceDate: new Date(),
                formatStrIn: 'yyyy-MM-dd',
                formatStrOut: 'MMM yyyy',
              });
              return (
                <div
                  className="school"
                  key={
                    times.dateStartUnformatted +
                    times.dateEndUnformatted +
                    el.institution.name
                  }
                >
                  <h3 className="school-title">
                    {el.student.degrees} &mdash;{' '}
                    <span className="avoid-break">
                      {el.student.emphasis.join(', ')}
                    </span>
                  </h3>
                  <span className="school-duration">
                    <time dateTime={times.dateStartUnformatted}>
                      {times.dateStartFormatted}
                    </time>
                    &ndash;
                    <time dateTime={times.dateEndUnformatted}>
                      {times.dateEndFormatted}
                    </time>
                  </span>
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

      <footer className="footer">
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
                          ? 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
                          : social.id === 'linkedin'
                            ? 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
                            : 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'
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
