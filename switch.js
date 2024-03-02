let today = new Date().getDay()
console.log(today);
let day = 3;
switch(today){
    case 1:
    case 'Monday':
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 'Friday':
        console.log("Wedneday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
    case 'Friday':
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("There is no such day in week.");
        break;
}



day = 6;
switch(true){
    case day>0 && day<6:
        console.log("Working day");
        break;
    case day === 6 || day === 7:
        console.log("Weekend");
        break;
    default:
        console.log("Which day are you talking about?! ");
}
