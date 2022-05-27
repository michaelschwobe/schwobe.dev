import {
  format,
  formatDuration,
  formatISO,
  intervalToDuration,
  parseISO,
} from 'date-fns';

// -----------------------------------------------------------------------------

export function getDurationDateTime(
  durationArray: [string, string | undefined],
) {
  return durationArray
    .map((iso) => iso ?? formatISO(new Date(), { representation: 'date' }))
    .join('/');
}

export function getDurationHyphenated(durationDateTime: string) {
  return durationDateTime
    .split('/')
    .map((iso) => format(parseISO(iso), 'MMM yyyy'))
    .map((str, idx, arr) => (idx === 1 && arr[0] === arr[1] ? 'Present' : str))
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

  return formatDuration(
    { years: duration.years ?? 0, months: duration.months || 1 },
    { delimiter: ', ', format: ['years', 'months'] },
  );
}
