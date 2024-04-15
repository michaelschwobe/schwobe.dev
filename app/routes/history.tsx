import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { findResume } from '~/models/resume.server';
import { toEmployeeDurationAlt } from '~/utils/dates';

export async function loader() {
  const resume = await findResume();
  return json(resume);
}

export const meta: MetaFunction = () => {
  return [{ title: 'Employment History' }];
};

export default function HistoryPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <main className="main">
        <section className="section section-1">
          <div className="container">
            <h2 className="section-title">
              <span>Employment History</span>
            </h2>

            {data.experiences.map((el) => {
              const { dateTime, time } = toEmployeeDurationAlt(
                el.employee.duration,
              );
              return (
                <div className="job" key={time}>
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
                              <time dateTime={dateTime}>{time}</time>
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
