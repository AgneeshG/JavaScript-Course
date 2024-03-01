/* -------------- Logical and Relational Operators -------------- */

/* >, <, >=, <=, ==, !=, ===, !=== */

console.log('10>5 : ',10>5); // true
console.log('8<5 : ',8<5);  // false

console.log('31 >= 22 : ',31 >= 22); // true
console.log('31 <= 22 : ',31 <= 22);  // false

console.log('15 == 15 : ',15 == 15); // true
console.log('45 != 45 : ',45 != 45);  // false

console.log( "15 == '15' : ",15 == '15'); // true
console.log("50 != '50' : ",50 != '50');  // false

console.log("15 === '15' : ",15 === '15');  // false
console.log("15 !== '15' : ",15 !== '15'); // true



/* !(NOT), &&(AND), ||(OR) */


/* ------------- Conditional Operators --------------- */

let age=19,isMinor;
isMinor = age>18 ? "Can vote" : "Have to wait";
console.log(isMinor);