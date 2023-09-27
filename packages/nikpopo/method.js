export function daysUntilNewYear(targetDate) {
  const newYearDate = new Date(targetDate.getFullYear() + 1, 0, 1);
  const timeDiff = newYearDate - targetDate;
  return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
}
