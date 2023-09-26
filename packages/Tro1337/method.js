export const for_test = "Arbuz";
export function fullyear(){
const currentDate = new Date();

const nextYear = currentDate.getFullYear() + 1;
const targetDate = new Date(nextYear, 0, 1);

const timeDifference = targetDate - currentDate;
const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

// console.log(`There are ${daysLeft} days left until New Year's Day of ${nextYear}.`);
return daysLeft
}