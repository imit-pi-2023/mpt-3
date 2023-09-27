export function new_year(current_date) {
  let new_year = new Date(current_date.getFullYear() + 1, 0, 1);

  return `${Math.ceil(
    (Number(new_year) - Number(current_date)) / (1000 * 60 * 60 * 24)
  )} дней`;
}
