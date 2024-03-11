const fruits = ['apple','orange','papaya','cherry'];

// forEach() method
console.log("1. Array.prototype.forEach() : ");
f = []
fruits.forEach((fruit)=>{
    // console.log(fruit);
    console.log(fruit.toUpperCase());
    f.push(fruit)
})
console.log("f : ",f);


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
console.log(letters.at(2));  // c

// --------------------------------------------

// copyWithin() method
console.log("4. Array.prototype.copyWithin() : ");
const fruits1 = ['apple','banana','orange','grape','mango','cherry','papaya'];
// console.log(fruits1.copyWithin(0,3,4));  // -> ['grape', 'banana', 'orange', 'grape', 'mango', 'cherry', 'papaya']
// console.log(fruits1.copyWithin(0,3,5));  // -> ['grape', 'mango', 'orange', 'grape', 'mango', 'cherry', 'papaya']
console.log(fruits1.copyWithin(2,4,6));  // -> ['apple', 'banana', 'mango', 'cherry', 'mango', 'cherry', 'papaya']

// --------------------------------------------

// entries() method
console.log("5. Array.prototype.entries() : ");
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
console.log("6. Array.prototype.values() : ");
const fruitValues = fruits2.values()

console.log(fruitValues.next().value);  // -> apple
console.log(fruitValues.next().value);  // -> grape

// for(fruit of fruitValues){ 
//     console.log(fruit);
// }

// --------------------------------------------

// every() method
console.log("7. Array.prototype.every() : ");

const marks = [54,73,90,45,86]
let result = marks.every((mark)=>{
    return mark>50
})
const result2 = marks.every((mark)=> { return mark>35 })
console.log(result); // -> false
console.log(result2); // -> true

// --------------------------------------------

// fill() method
console.log("8. Array.prototype.fill() : ");

const array1 = [1,2,3,4,5]
const array2 = [1,2,3,4,5]
const array3 = [1,2,3,4,5]
console.log(array1.fill(21,1,2));  // -> [1, 21, 3, 4, 5]
console.log(array2.fill(15,3));  // -> [1, 2, 3, 15, 15]
console.log(array3.fill(10));  // -> [10, 10, 10, 10, 10]
console.log(array1.fill(50,1,3));  // -> [1, 50, 50, 4, 5]

// --------------------------------------------

// filter() method
console.log("9. Array.prototype.filter() : ");

const humanNames = ['Anu','Banu', 'Cathy', 'Dory', 'Elie']
filterNames = humanNames.filter((humanName) => humanName.length>3)
console.log(filterNames);  // -> ['Banu', 'Cathy', 'Dory', 'Elie']

const users = [
    {
        id:1,
        name:'Anbu',
        active:true
    },
    {
        id:2,
        name:'Trisha',
        active:true
    },
    {
        id:3,
        name:'Krishna',
        active:false
    }
]
const filterUsers = users.filter((user)=> user.active === true)
console.log(filterUsers);  // -> output - 2 objects(Anbu and Trisha)
console.log(filterUsers[1].name);  // -> Trisha

// --------------------------------------------

// find() method
console.log("10. Array.prototype.find() : "); // -> finds value left to right

const number1 = [5,10,14,51,2,31]
const num3 = number1.find((num)=>{
    return num>12
})
console.log(num3);  // -> 14

// --------------------------------------------

// findlast() method  
console.log("11. Array.prototype.findlast() : ");  // -> finds value right to left

const num4 = number1.findLast((num)=> {
    return num>4
})
console.log(num4);  // -> 31

// --------------------------------------------

// findIndex() method
console.log("12. Array.prototype.findIndex : ");  // -> returns index value

const num5 = number1.findIndex((num)=>{
    return num>20
})
console.log(num5);  // -> 3

// --------------------------------------------

// findLastIndex() method
console.log("13. Array.prototype.findLastIndex : ");  // -> finds index value from last(right to left)
const num6 = number1.findLastIndex((num)=>{
    return num>20
})
console.log(num6);  // -> 5

// --------------------------------------------

/* ---- toString() method - Used to --- */
console.log("14. Array.prototype.toString() : ");

list = ['abc',21,'bird','animal',41]
console.log(list.toString());  // ->  abc,21,bird,animal,41

/* ---- push() method - Used to add one or more elements to the end of an array. ---- */

console.log("15. Array.prototype.push() : ");
let fruits3 = ['apple','banana','grape']
fruits3.push('papaya','cherry','orange')
console.log(fruits3);
fruits3.forEach((fruit)=>{
    console.log(fruit.toUpperCase());
})


/* ---- unshift() method - Used to add one or more elements to the beginning of an array. ---- */

console.log("16. Array.prototype.unshift() : ");
let fruits4 = ['apple','orange','pine apple'];
let fruits4_result = fruits4.unshift('banana','cherry','papaya')
console.log(fruits4_result);  // -> 6 (length of an array)
console.log(fruits4);


/* ---- pop() method - Used to remove the last element of an array. ---- */

console.log("17. Array.prototype.pop() : ");
let removedLastFruit = fruits4.pop()
console.log(removedLastFruit); // -> pine apple
fruits4.pop()
console.log(fruits4);


/* ---- shift() method - Used to remove first element of an array. ---- */

console.log("18. Array.prototype.shift() : ");
let animals = ['lion','tiger','dog','cat','rat']
let removedFirstAnimal = animals.shift()
console.log(removedFirstAnimal); // -> lion
animals.shift()
console.log(animals);  // -> ['dog', 'cat', 'rat']


/* ---- slice() method - Used to extract a portion of an array and return it as a new array. ---- */
console.log("18. Array.prototype.slice() : ");
animals = ['lion','deer','tiger','goat','dog','cat']
let sliceAnimals = animals.slice(1,5)
console.log(sliceAnimals); // -> ['deer', 'tiger', 'goat', 'dog']


/* ---- splice() method - Used to change the contents of an array removing or replacing existing elements and/or adding new elements in place  ---- */
console.log("19. Array.prototype.splice() : ");
animals.splice()
numbers = ['one','two','three','four','five','six','seven'];
numbers.splice(2,3) // -> removes three elements from index 2
console.log(numbers);  // -> ['one', 'two', 'six', 'seven']
numbers.splice(1,2, /* adding new elements is array -> */'1.one','2.two','3.three','4.four')
console.log(numbers);  // -> ['one', '1.one', '2.two', '3.three', '4.four', 'seven']


/* ----  toSpliced() method - Used to    ---- */
console.log("20. Array.prototype.toSpliced() : ");
numbers1 = ['one','two','three','four','five','six','seven'];
splicedNumbers = numbers1.toSpliced(1,5)
console.log(splicedNumbers);  // -> ['one', 'seven']


/* ---- concat() method - Used to combine two or more arrays and create a new array without modifying the original arrays. ---- */
console.log("21. Array.prototype.concat() : ");
const breakfast = ['Idle','Dosa','Poori']
const lunch = ['Chicken Biriyani','Coffee']
const dinner = ['Chicken Fried Rice','Milk']
const overallFood = breakfast.concat(lunch,dinner,'chips')
console.log(overallFood);

    // Spread Operator
const overallFood_spreadoperator = [...breakfast, ...lunch, ...dinner, 'juice']
console.log(overallFood_spreadoperator);


/* ----  reverse() method - Used to reverse elements of an array.(it changes the original array) ---- */
console.log("22. Array.prototype.reverse() : ");
const arr1 = ['one','two','three','four','five'];
const reversedArray = arr1.reverse();
console.log("arr1 : ",arr1);
console.log("Reversed array",reversedArray);


/* ----  toReversed() method - Used to reverse the elements in an array without mutating the original array.  ---- */
console.log("23. Array.prototype.toReversed() : ");
const arr2 = ['one','two','three','four','five'];
const reversedArray2 = arr2.toReversed();
console.log("arr2 :",arr2);
console.log("Reversed array : ",reversedArray2);









/* ----  ---- */
