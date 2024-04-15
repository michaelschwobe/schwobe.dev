import {
  format,
  formatDuration,
  formatISODuration,
  intervalToDuration,
  parse,
  type Duration,
} from 'date-fns';

export function parseDateStrings(
  values: [string, string | undefined],
  formatStr: string,
): [Date, Date] {
  const todayDate = new Date();
  const startStr = values[0];
  const endStr = values[1] ?? format(todayDate, formatStr);
  const startDate = parse(startStr, formatStr, todayDate);
  const endDate = parse(endStr, formatStr, todayDate);
  return [startDate, endDate];
}

export function calcDurationCeiling(start: Date, end: Date): Duration {
  const duration = intervalToDuration({ start, end });
  const { years = 0, months = 0, days = 0 } = duration;
  const monthsCeil = days >= 15 ? months + 2 : months + 1;
  return { years, months: monthsCeil } as Duration;
}

export function formatISODurationCeiling(start: Date, end: Date) {
  const durationCeiling = calcDurationCeiling(start, end);
  return formatISODuration(durationCeiling);
}

export function formatDurationJoined(
  start: Date,
  end: Date,
  formatStr: string,
  separator: string,
) {
  const today = format(new Date(), formatStr);
  return [start, end]
    .map((date) => format(date, formatStr))
    .map((str, idx, arr) =>
      idx === 1 && (arr[0] === arr[1] || str === today) ? 'Present' : str,
    )
    .join(separator);
}

export function formatDurationReadable(start: Date, end: Date) {
  const durationCeiling = calcDurationCeiling(start, end);
  return formatDuration(durationCeiling, {
    delimiter: ', ',
    format: ['years', 'months'],
  });
}

/**
 * Example return values:
 * { dateTime: "P0Y2M0DT0H0M0S", time: MAR 2024–PRESENT (2 MONTHS)
 * { dateTime: "P0Y7M0DT0H0M0S", time: DEC 2022–MAY 2023 (7 MONTHS)
 */
export function toEmployeeDuration(dateStrings: [string, string | undefined]) {
  const dates = parseDateStrings(dateStrings, 'yyyy-MM-dd');
  const dateTime = formatISODurationCeiling(...dates);
  const hyphenated = formatDurationJoined(...dates, 'MMM yyyy', '–');
  const readable = formatDurationReadable(...dates);
  return { dateTime, time: `${hyphenated} (${readable})` };
}

/**
 * Example return values:
 * { dateTime: "P0Y2M0DT0H0M0S", time: MAR 2024–PRESENT
 * { dateTime: "P0Y7M0DT0H0M0S", time: DEC 2022–MAY 2023
 */
export function toStudentDuration(dateStrings: [string, string | undefined]) {
  const dates = parseDateStrings(dateStrings, 'yyyy-MM-dd');
  const dateTime = formatISODurationCeiling(...dates);
  const hyphenated = formatDurationJoined(...dates, 'MMM yyyy', '–');
  return { dateTime, time: hyphenated };
}

/**
 * Example return values:
 * { dateTime: "P0Y2M0DT0H0M0S", time: "March 4th, 2024 to Present" }
 * { dateTime: "P0Y7M0DT0H0M0S", time: "December 1st, 2022 to May 31st, 2023" }
 */
export function toEmployeeDurationAlt(
  dateStrings: [string, string | undefined],
) {
  const dates = parseDateStrings(dateStrings, 'yyyy-MM-dd');
  const dateTime = formatISODurationCeiling(...dates);
  const hyphenated = formatDurationJoined(...dates, 'PPP', ' to ');
  return { dateTime, time: hyphenated };
}
