console.log("--- SYMBOL ---");

var a = "a";
var b = "a";
console.log(a===b); // true

var A = Symbol("A");
var B = Symbol("A");
console.log(A===B);  // false

var c = Symbol(10);
var d = Symbol(15)
console.log(c,d);

let obj1 = {
    name:"Arun"
}
let obj2 = {
    name:"Arun kumar"
}
let obj3 = {...obj1,...obj2}
console.log(obj3);


let obj4 = {
    [Symbol("name")]:"Arun",
    [Symbol("age")]:35
}
let obj5 = {
    [Symbol("name")]:"Arun kumar"
}
let obj6 = {...obj4,...obj5}
console.log(obj6);

obj = {}
arr = [10,12,13,34,14,54,34,65,14]
for(let iterator in arr){
    obj[Symbol(iterator)] = arr[iterator]
}
