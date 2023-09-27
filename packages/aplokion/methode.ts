export function new_year(){
    let current_date = new Date();  
    let new_year = new Date(current_date.getFullYear()+1, 0, 1)

    console.log(`${Math.ceil((Number(new_year) - Number(current_date)) / (1000 * 60 * 60 * 24))} дней`) 
}