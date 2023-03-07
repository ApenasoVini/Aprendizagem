function workHours(hoursMonth, wageHour){
    hoursMonth = prompt(`How many hours do you work?`)
    wageHour = prompt(`How much do you recieve in a hour`)
    var salary = hoursMonth * wageHour
    console.log(`Your salary is equal to R$ ${salary}`)
}
function month(monthNumber){
    monthNumber = prompt(`In what month are we?`)
    switch(monthNumber){
        case "1":
            console.log(`We are in Janurary.`)
            break;
        case "2":
            console.log(`We are in February.`)
            break;
        case "3":
            console.log(`We are in March.`)
            break;
        case "4":
            console.log(`We are in April.`)
            break;
        case "5":
            console.log(`We are in May.`)
            break;
        case "6":
            console.log(`We are in June.`)
            break;            
        case "7":
            console.log(`We are in July.`)
            break;
        case "8":
            console.log(`We are in August.`)
            break;
        case "9":
            console.log(`We are in September.`)
            break;
        case "10":
            console.log(`We are in Octuber.`)
            break;
        case "11":
            console.log(`We are in November.`)
            break;
        case "12":
            console.log(`We are in December.`)
            break;
    }
}
workHours()
month()