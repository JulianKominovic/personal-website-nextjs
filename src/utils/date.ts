// @ts-nocheck
const units = [
  ["second", 1],
  ["minute", 60],
  ["hour", 60 * 60],
  ["day", 24 * 60 * 60],
  ["month", 30 * 24 * 60 * 60],
  ["year", 12 * 30 * 24 * 60 * 60],
];

export function diffUnitFor(from) {
  const delta = Math.round((from - Date.now()) / 1000); // Rounded delta in seconds

  for (let i = 0; i < units.length; i += 1) {
    if (Math.abs(delta) < units[i][1]) {
      if (units[i - 1] !== undefined) {
        const [unit, value] = units[i - 1];

        // Exit the function once a unit will be found
        return { unit, delta: Math.round(delta / value) };
      }
    }
  }

  return {
    delta: Math.round(delta / (12 * 30 * 24 * 60 * 60)),
    unit: "year",
  };
}
export function formatTimeAgo(date, lang = "en") {
  let from = date;

  if (!date) {
    return "";
  }

  if (!(date instanceof Date)) {
    from = new Date(date);

    if (isNaN(from.getTime())) {
      return "";
    }
  }

  const rtf1 = new Intl.RelativeTimeFormat(lang, { style: "long" });
  const { delta, unit } = diffUnitFor(from);

  return rtf1.format(delta, unit);
}
