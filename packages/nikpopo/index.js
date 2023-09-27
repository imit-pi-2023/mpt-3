import { daysUntilNewYear } from "./method.js";

const currentDate = new Date();
const daysLeft = daysUntilNewYear(currentDate);

console.log(`До Нового года осталось ${daysLeft} дней.`);