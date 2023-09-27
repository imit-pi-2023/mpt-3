export const for_test = "Arbuz";

export function getDaysUntilNewYear() {
  let currentDate = new Date();

  let currentYear = currentDate.getFullYear();
  let newYear = new Date(currentYear + 1, 0, 1);

  let timeDiff = newYear.getTime() - currentDate.getTime();
  let daysUntilNewYear = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return daysUntilNewYear;
}
