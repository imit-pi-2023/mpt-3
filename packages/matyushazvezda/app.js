function calculateDaysUntilNewYear(currentDate = new Date()) {
  const newYearDate = new Date(currentDate.getFullYear(), 11, 31);
  const timeDiff = newYearDate.getTime() - currentDate.getTime();
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysRemaining;
}

console.log(`До Нового года осталось ${calculateDaysUntilNewYear()} дней.`);

module.exports = {
  calculateDaysUntilNewYear,
};
