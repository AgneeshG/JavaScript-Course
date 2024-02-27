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
// console.log(fruits1.copyWithin(0,3,4));  // -> ['grape', 'banana', 'orange', 'grape', 'mango', 'cherry', 'papaya']
// console.log(fruits1.copyWithin(0,3,5));  // -> ['grape', 'mango', 'orange', 'grape', 'mango', 'cherry', 'papaya']
console.log(fruits1.copyWithin(2,4,6));  // -> ['apple', 'banana', 'mango', 'cherry', 'mango', 'cherry', 'papaya']

// --------------------------------------------

// entries() method
console.log("3. Array.prototype.entries() : ");
const fruits2 = ['apple','grape','orange','banana'];
for(let fruit of fruits1){
    console.log(fruit);
}

console.log("-----");

fruitEntries = fruits1.entries()
fruitEntries2 = fruits2.entries()
// console.log(fruitEntries.next().value);  // -> [0, 'apple']

// for(let fruit of fruitEntries){
//     console.log(fruit);
//     console.log(fruit[0]);
//     console.log(fruit[1]);
// }

// for(let[index,value] of fruitEntries2){
//     console.log(value, index);
// }

// --------------------------------------------

// values() method
console.log("Array.prototype.values() : ");
