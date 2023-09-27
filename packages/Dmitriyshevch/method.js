function HowLongUntilNewYear(date) {
  let date2 = new Date(date.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
  let timeDiff = date2 - date;
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

export { HowLongUntilNewYear };
