const fruits = ['apple','orange','papaya','cherry'];

// forEach() method
console.log("1. Array.prototype.forEach() : ");
fruits.forEach((fruit)=>{
    // console.log(fruit);
    console.log(fruit.toUpperCase());
})

// --------------------------------------------

// map() method
console.log("2. Array.prototype.map() : ");
// let var1 = fruits.map((fruit)=>{
//     return fruit.toUpperCase();
// })

let var1 = fruits.map((fruit)=> fruit.toUpperCase() )  // single line code
console.log(var1);

const number = [1,2,3,4]
let var2 = number.map((num)=> num*2 )
console.log(number, var2);

// --------------------------------------------

// at() method
console.log("3. Array.prototype.at() : ");
const letters = ['a','b','c','d'];
// console.log(letters[2]);
console.log(letters.at(2));

// --------------------------------------------

// copyWithin() method
console.log("3. Array.prototype.copyWithin() : ");
const fruits1 = ['apple','banana','orange','grape','mango','cherry','papaya'];
console.log(fruits1.copyWithin(3,0,6));
// console.log(fruits1.copyWithin(3,1,2)); 
// console.log(fruits1.copyWithin(0,1,3)); 

