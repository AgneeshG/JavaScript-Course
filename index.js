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

// Switch case

// Grade sysyem S,A,B,C,D,U
grade = "A"
switch(grade){
    case 'S':
        console.log("Super grade");
        break;
    case 'A':
        console.log("Excellent grade");
        break;
    case 'B':
    case 'C':
        console.log("Good grade");
        break;
    case 'D':
        console.log("Just pass");
        break;
    case 'U':
        console.log("Failed");
        break;
    default:
        console.log("Unknown grade");
}

let marks = '78';
switch(marks){
    case (marks>90):
        console.log("Super grage");
        break;
    case (marks>=60):
        console.log("Pass");
        break;
    case (marks=='78'):
        console.log("Fail");
        break;
    default:
        console.log("Unknown grade");
}

// mobile buying suggestion
let amount = 54000
switch(true){
    case (amount>=5000 && amount<=10000):
        console.log("Buy basic mobile");
        break;
    case (amount>10000 && amount<=60000):
        console.log("Buy Android mobile");
        break;
    case(amount>60000):
        console.log("Buy iPhone mobile");
        break;
    default:
        console.log("You can't afford mobile phone now");
}

//================================================================================================================

// -- loops --
// For loop
// while loop
// Do While loop
// For-in loop
// For-of loop

//for loop

for(let i=1; i<=5; i++){
    console.log("Number # ",i);
}

console.log("Odd Numbers:");
for(let i=1; i<6;i++){
    if(i % 2 !== 0){
        console.log("number #"+i);
    }
}

for(let i = 10; i>=1; i--){
    console.log("Number : "+i);
}

// while loop

let j = 10;
console.log("Even numbers : ");
while(j>=1){
    if(j%2 === 0){
        console.log("Number : "+j);
    }
    j--;
}

// do while
let i=11;
do{
    if(i%2 !== 0){
        console.log("Odd number Do-While #"+i);
    }
    i++;
}while(i <= 10);

// for-in -> can iterate array and objects

let person1={
    name:"kumar",
    age:31,
    gender:"male"
}

for(let key in person1){
    console.log(key +" : "+ person[key]);  //console.log(person1['name'])
}

let colors = ['red','blue','white']
for(key in colors){
    console.log(colors[key]);
}

// for-of // can iterate arrays, objects

for(let color of colors){
    console.log("Colors : "+ color);
}

//================================================================================================================

// Objects

let name3 = "Anbu";
let age_ = 31;
let interest = ['creating,teaching new things'];
let address = {
    city : 'coimbatore',
    staate : "tamilnadu"
}

// let msg = "My name is "+name3+", i love "+interest;
// console.log(msg);

// let msg1 = `My name is ${name3} and i love ${interest}`;
// console.log(msg1);

// function greeting(){
//     let msg = `My name is ${name3} and i love ${interest}`;
//     console.log(msg);
// }
// greeting();


// Object Oriented Programming(OOP)
let person4 = {
    name:"Murugan",
    age:24,
    interest: ['creating','teaching newthings'],
    isAlive:true,
    address:{
        city:"coimbatore",
        state:"tamilnadu"
    },
    greeting: function(){
        let msg = `My name is ${this.name} and i love ${this.interest}`;
        console.log(msg);
    }
};
person4.greeting();

// Factory functions

function createPerson(){
    let person = {
        name:"Anbu",
        greeting: function(){
            let msg = `My name is ${name}`
            console.log(msg);
        }
    };
    return person;
}

function createPerson(){
    return {
        name:"Anbu",
        greeting: function(){
            let msg = `My name is ${name}`
            console.log(msg);
        }
    };
}

function createPerson(name){
    return {
        name:name,  // function using parameter
        greeting: function(){
            let msg = `My name is ${name}`
            console.log(msg);
        }
    };
}

function createPerson1(name){
    return {
        name,    // parameter and key name is same.
        greeting: function(){
            let msg = `My name is ${name}`
            console.log(msg);
        }
    };
}

let arivu = createPerson1("Arivu");
arivu.greeting();
let vimal = createPerson1("Vimal");
vimal.greeting()


function activities(name,age,walkSpeed,runSpeed){
    return{
        name:name,
        age:age,
        walkSpeed:walkSpeed,
        runSpeed:runSpeed,
        walk:function(){
            let msg = `${this.name} can walk ${this.walkSpeed}km per hour.`;
            console.log(msg);
        },
        run(){    // simplified method 
            let msg = `${name} can run ${this.runSpeed}km per hour.`;
            console.log(msg);
        }
    };
}
let kumar = activities(name="Kumar",age=25,walkSpeed=15,runSpeed=25)
kumar.run()

// Constructor functions
