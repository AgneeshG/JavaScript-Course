console.log("Sample js program");
var name1 = "Arun";
let name2 = "Abi";
const dob = "21-01-2020";
console.log("Name of the person : "+name1+ " and his data of birth " + dob);

//================================================================================================================

// objects
let person = {
    name: "Vel",
    age : 31,
    gender: "male",
    city: "Pollachi"
};
let person2 = {}
let person3 = {
    name:"Ram",
    age:27,
    gender:"male",
    siblings:{
        brother:"Varun",
        sister:"Devi"
    },
    city:"coimbatore",
};

//================================================================================================================

// array
let favColors = ["red","blue","white","orange"]
favColors[5]="green";
console.log(person2);
console.log(person);
console.log(person.age);
console.log(person['gender']);
console.log(person3.siblings);
console.log(person3.siblings.brother);
console.log(favColors);
console.log(favColors.length);

//================================================================================================================

// functions
function greetUser(){
    let name = "Mani";
    let msg = "I'm "+name+" and i'm learning javascript.";
    console.log(msg);
}
greetUser()

function greetUser1(name){
    console.log(name+" from coimbatore.");
}
greetUser1("Velan")

function user(name,age){
    console.log(name +" is "+age+" years old.");
}
user("Gokul",26)

function add(num1, num2){
    result = num1 + num2;
    console.log(result);
}
add(17, 15)

//================================================================================================================

// ---------- operators ---------------
// increment
num1 = 10
console.log(num1++); // 10
console.log(num1); // 11
console.log(++num1); // 12

// decrement
num2 = 10
console.log(num2--); // 10
console.log(num2); // 9
console.log(--num2); // 8

// equality operators
num = 6
console.log(num === 6);
console.log(num !==6);

// strict equality operator  (Datatype + Value)
console.log(1 === 1);  // Number === Number ->  True
console.log("1" === 1);  // String === Number ->  False

// lost equality operator
console.log(1 == 1);  // Number == Number -> True
console.log('1' == 1);  // String == Number -> True
console.log(true == 1);

// ternary operator
age = 24;
let type = age > 18 ? "Adult ticket" : "Child ticket"  // -> Adult ticket
     // conditon ? 'value 1' : 'value2' (if true - value1, false - value2)
console.log(type);

// logical operators
//logical AND (&&)  -> returns true if both operands are true
console.log(true && true); // -> true
console.log(true && false); // -> false

//logical OR (||)  -> returns true if anyone operand are true
console.log(true || false); // -> true
console.log(false || false); // -> false

//logical not (!)
console.log(!true);

// highIncome, CIBILScore -> Loan Eligible, Ineligible

// let highIncome = true
// let CIBILScore = false
// let loanStatus = (highIncome || CIBILScore)
// console.log("Loan Status : " + loanStatus);


let highIncome = 30000
let CIBILScore = 8
let loanStatus = highIncome>=20000 && CIBILScore>=7 ? true : false // -> true
console.log(loanStatus);

let eligiblePerson = loanStatus==!false ? true : false // -> loanStatus is true so elibilePerson also true
console.log(eligiblePerson);


// Truthy and Falsy 

// --- Falsy (false) ---  -> false||"Abi" --result -> "Abi", false||21  --result -> 21, 
// undefined
// false
// 0 
// null
// '' -> ""
// NaN

// --- Truthy ---  ->  true||"name" --result -> true, true||4 --result -> true 
// Anything that is not falsy is -> Truthy 

// let userColor = "red";
// let defaultColor = "blue";
// let currentColor = userColor || defaultColor
// console.log("Current Color : "+currentColor);  // -> red

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor
console.log("Current Color : "+currentColor);  // -> blue
//================================================================================================================

// -- Conditional Statements --
// If - Else

let condition = true
if(condition){
    console.log("Condition : True.");
}
else{
    console.log("Condition : False.");
}

let isRaining = true
let isCloudy = true
if(isRaining || isCloudy){
    console.log("Don't forget to take Umbrella! ");
} else{
    console.log("Sky is normal! Enjoy the weather");
}


// if hour is between 12AM(0) to 12PM(12) -> Good Morning
// else if hour is between 12PM(12) to 6PM(18) -> Good Afternoon
// else hour is between 6PM(18) to 12AM(0) -> Good Night
// let hour = 14
let hour = new Date().getHours(); // to get current time
if(hour >=0 && hour <=12){
    console.log("Good Morning");
} else if(hour>12 && hour<=18){
    console.log("Good Afternoon");
} else {
    console.log("Good Night");
}

// Date() function
let time = new Date();
console.log(time);
console.log(typeof(time));
let hr = time.getHours();
console.log(hr);


