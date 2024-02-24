// variable
var name = "Anbu";
let name1 = "Banu";
const name2 = "Vetri";
// alert("His name is " + name);
console.log(name1 + " is 32 years old.");

// objects 
let person = {
    name: "Jack",
    age: 21,
    gender: "male",
    address:{
        area: "Anna Nagar",
        town: "Eachanari",
        dist: "Coimbatore"
    }
};
console.log(person);
console.log(person.age);
console.log(person.address.town);

// array
let favColors = ["White","Green","Blue","Orange","Purple"];
favColors[6] = "Red";
console.log(favColors);
console.log(favColors[2]);
console.log(favColors.length);

// function
function add(num1,num2){
    result = num1 + num2;
    console.log(result);
}
add(23,41)

function greetUser(name,age){
    console.log(name + " is " + age + " years old.");
}
greetUser("Vicky",43)

//================================================================================================================

// ---- Operators ----

// increment (++)
num1 = 10
console.log(num1++); // 10
console.log(num1); // 11
console.log(++num1); // 12

// decrement (--)
num2 = 10
console.log(num2--); // 10
console.log(num2); // 9
console.log(--num2); // 8

//equality operators (===, ==)
num = 6
console.log(num === 6);
console.log(num !== 6);

// strict equality operator  (Datatype + Value)
console.log(1 === '1'); // false
console.log(1 === 1); // true
console.log(true === 1); // false

// lost equality operator
console.log(num == 6); // true
console.log(num == '6'); // true
console.log(true == 1); // true

// ternary operator
age = 24;
let vote = age>18 ? "can vote" : "need to wait till 18"
     // conditon ? 'value 1' : 'value2' (if true - value1, false - value2)
console.log(vote);

// logical operators
//logical AND (&&):
console.log(true && true); // true
console.log(true && false); // false

//logical OR (||):
console.log(true || false); // true
console.log(false || false); // false

//logical NOT (!)
console.log(!true); // false

// highIncome, CIBILScore -> Loan Eligible, Ineligible
let highIncome = 32000
let CIBILScore = 8
let loanStatus = (highIncome>20000 && CIBILScore>7) ? "eligible" : "ineligible"
console.log(loanStatus);

// Truthy and Falsy
//Falsy(false)
// undefined
// false
// null
// 0
// '' -> ""
// NaN

//Truthy(true)
// anything that is not falsy is -> Truthy

// let userColor = "red";
// let defaultColor = "blue";
// let currentColor = userColor || defaultColor
// console.log("Current Color : "+currentColor);  // -> red

let userColor = undefined;
let defaultColor = "white";
let currentColor = userColor || defaultColor
console.log("Current color : " + currentColor); // -> white

// Bitwise operators

// If - Else

let hour = 22
if (hour>=0 && hour<=12) {
    console.log(wish = "Good morning!");
}
ifelse()