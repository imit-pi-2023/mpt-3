export function last_time(today) {
  var ng = new Date("December 31, 2023");
  var msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((ng.getTime() - today.getTime()) / msPerDay);
}
