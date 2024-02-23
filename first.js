// variable
var name = "Anbu";
let name1 = "Banu";
const name2 = "Vetri";
alert("His name is " + name);
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
