import {
  format,
  formatDuration,
  formatISO,
  intervalToDuration,
  parseISO,
} from 'date-fns';

export function getDurationDateTime(
  durationArray: [string, string | undefined],
) {
  return durationArray
    .map((iso) => iso ?? formatISO(new Date(), { representation: 'date' }))
    .join('/');
}

export function getDurationHyphenated(
  durationDateTime: string,
  isLong = false,
) {
  const pattern = isLong ? 'PPP' : 'MMM yyyy';
  return durationDateTime
    .split('/')
    .map((iso) => format(parseISO(iso), pattern))
    .map((str, idx, arr) =>
      idx === 1 && (arr[0] === arr[1] || str === format(new Date(), pattern))
        ? 'Present'
        : str,
    )
    .join('–');
}

export function getDurationFormatted(durationDateTime: string) {
  const [durationStart, durationEnd] = durationDateTime
    .split('/')
    .map((isoStr) => parseISO(isoStr));

  const duration = intervalToDuration({
    start: durationStart as Date,
    end: durationEnd as Date,
  });

  const { years = 0, months = 0, days = 0 } = duration;
  const monthsCeil = days >= 15 ? months + 2 : months + 1;

  return formatDuration(
    { years, months: monthsCeil },
    { delimiter: ', ', format: ['years', 'months'] },
  );
}
