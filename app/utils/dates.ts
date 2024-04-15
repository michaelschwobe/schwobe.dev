import {
  format,
  formatDuration,
  intervalToDuration,
  parse,
  type Duration,
} from 'date-fns';

export function formatTime({
  datesUnformatted,
  referenceDate,
  formatStrIn,
  formatStrOut,
}: {
  datesUnformatted: [string, string | undefined];
  referenceDate: Date;
  formatStrIn: string;
  formatStrOut: string;
}) {
  const dateFallback = format(referenceDate, formatStrIn);

  const dateStartUnformatted = datesUnformatted[0];
  const dateStart = parse(dateStartUnformatted, formatStrIn, referenceDate);
  const dateStartFormatted = format(dateStart, formatStrOut);

  const dateEndUnformatted = datesUnformatted[1] ?? dateFallback;
  const dateEnd = parse(dateEndUnformatted, formatStrIn, referenceDate);
  const dateEndFormatted = format(dateEnd, formatStrOut);
  const dateEndIsPresent =
    dateStartUnformatted === dateEndUnformatted ||
    dateEndUnformatted === dateFallback;

  const duration = intervalToDuration({ start: dateStart, end: dateEnd });

  const { years = 0, months = 0, days = 0 } = duration;
  const monthsCeil = days >= 15 ? months + 2 : months + 1;
  const durationCeiling = { years, months: monthsCeil } as Duration;

  const durationFormatted = formatDuration(durationCeiling, {
    delimiter: ', ',
    format: ['years', 'months'],
  });

  return {
    dateStart,
    dateStartUnformatted,
    dateStartFormatted,
    dateEnd,
    dateEndUnformatted,
    dateEndFormatted,
    dateEndIsPresent,
    durationFormatted,
  };
}
