module.exports = function() {
    let today = new Date()
    let currentYear = today.getFullYear()
    let newYearDate = new Date(currentYear, 11, 31)
    let difference = newYearDate.getTime() - today.getTime()
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24))
    return totalDays
}