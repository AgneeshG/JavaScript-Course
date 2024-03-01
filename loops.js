/* ------------- for, while, do-while ------------- */

// do-while
/* do{
    console.log("continue playing...");
    var continuePlaying = confirm("Do you want to continue playing?")
}while(continuePlaying)
console.log("The end."); */


// while
var count = 5
while(count>0){
    console.log("Count : ",count--);
}
console.log("while loop ended.");


// for
for(let dayInWeek=1; dayInWeek<=7; dayInWeek++){
    console.log("Day : ",dayInWeek);
}


// break and continue
/* break - breaks loop execution and takes program flow out */



/* continue - stops loop execution and takes program flow to start of loop */