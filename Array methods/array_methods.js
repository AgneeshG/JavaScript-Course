const fruits = ['apple','orange','papaya','cherry'];

// Array.prototype.forEach()
console.log("1. Array.prototype.forEach() : ");
fruits.forEach((fruit)=>{
    // console.log(fruit);
    console.log(fruit.toUpperCase());
})

// -----------------------

// map() method
console.log("2. Array.prototype.map() : ");
// let var1 = fruits.map((fruit)=>{
//     return fruit.toUpperCase();
// })

let var1 = fruits.map((fruit)=> fruit.toUpperCase() ) 
console.log(var1);

const number = [1,2,3,4]
let var2 = number.map((num)=> num*2 )
console.log(number, var2);
// -----------------------
