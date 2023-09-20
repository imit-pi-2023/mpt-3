export const date22 = new Date("2022-01-01T00:00:00")

export const date23 = new Date("2023-01-02T00:00:00")

export function getDays(currentDate){

    let newYear = new Date(currentDate.getFullYear()+1, 0, 1, 0, 0, 0, 0)

    return Math.abs(newYear - currentDate) / (1000 * 60 * 60 * 24);

}