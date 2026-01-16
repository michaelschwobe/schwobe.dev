import { findResume } from "#app/models/resume.server";
import { formatTime } from "#app/utils/dates";
import type { Route } from "./+types/history";

export async function loader() {
  const resume = await findResume();
  return resume;
}

export default function HistoryPage({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <title>Employment History</title>

      <main className="main">
        <section className="section section-1">
          <div className="container">
            <h2 className="section-title">
              <span>Employment History</span>
            </h2>

            {loaderData.experiences.map((el) => {
              const times = formatTime({
                datesUnformatted: el.employee.duration,
                referenceDate: new Date(),
                formatStrIn: "yyyy-MM-dd",
                formatStrOut: "PPP",
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
                              ].join(" / ")}
                            </td>
                          </tr>
                          <tr>
                            <th>Dates</th>
                            <td>
                              {times.dateStartFormatted} to{" "}
                              {times.dateEndFormatted}
                            </td>
                          </tr>
                          <tr>
                            <th>Address</th>
                            <td>
                              {[
                                el.employer.streetAddress,
                                el.employer.addressLocality,
                                el.employer.addressRegion,
                              ].join(", ")}{" "}
                              {el.employer.postalCode}
                            </td>
                          </tr>
                          <tr>
                            <th>Phone</th>
                            <td>
                              {el.employer.telephone
                                ? el.employer.telephone
                                : "N/A"}
                            </td>
                          </tr>
                          <tr>
                            <th>Website</th>
                            <td>
                              {el.employer.url ? (
                                <a href={el.employer.url}>{el.employer.url}</a>
                              ) : (
                                "N/A"
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
