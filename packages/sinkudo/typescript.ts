export function daystillNY () {let qwer : Date = new Date();
let last: Date = new Date(new Date().getFullYear(), 11, 31)
let qq : number = 123
console.log(Math.ceil((last.getTime() - qwer.getTime()) / (1000 * 3600 * 24)) + 1)}
// console.log(last.valueOf() - qwer.valueOf())