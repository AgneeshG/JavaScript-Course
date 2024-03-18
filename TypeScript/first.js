"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* ---- Datatypes ---- */
// Primitive types
var n = 31;
var num = 45;
var str = "Hello!";
var boo = true;
// Reference types [array, object]
var str_array = ['one', 'two', 'three', 'four'];
var num_array = [1, 2, 3, 4, 5];
var mixed_array = ['one', 1, 'two', 2, 4, true];
// object
var object_value = {
    name: 'Balu',
    age: 28,
    isAlive: true
};
var object_value_two = {
    name: "Velan",
    age: 32,
    isMajor: true
};
var obj_array = [{ name: "Hari", age: 17, isMajor: false }, { name: "Banu", age: 29, isMajor: true }, { name: 'Mani', age: 25, isMajor: true }];
console.log(object_value_two);
console.log("Object array : ", obj_array[1]);
var Employee_list = [{ name: "Arun", age: 41, salary: 25000 }, { name: 'Billa', age: 32, salary: 23000 }];
var Student_list = [{ name: 'Venkat', age: 19, id: 205 }, { name: 'Vetri', age: 21, id: 115 }];
console.log(Employee_list);
console.log(Student_list);
var animals = ["cat", 'dog', "lion", "bear"];
// map method
var animals_list = animals.map(function (animal) {
    return "Animal name : ".concat(animal.toUpperCase());
});
console.log(animals_list);
var animals_list2 = animals.map(function (animal) {
    return animal.toUpperCase();
});
var animal_count = animals.map(function (animal) {
    return 3;
});
// forEach method
animals.forEach(function (animal) {
    console.log(animal);
});
// switch
var number_ = "43";
switch (true) {
    case (+number_ >= 0 && +number_ <= 30): // unery plus operator
        console.log("switch - one");
        break;
    case Number(number_) > 30 && Number(number_) <= 50:
        console.log("switch - two");
        break;
    case number_ > 50:
        console.log("switch - three");
        break;
    default:
        console.log("switch default");
}
var num5 = 32;
switch (true) {
    case (num5 > 30):
        console.log("dfhfvgod");
}
// set 
var mySet = new Set();
var secondSet = new Set(["create", "second", "set"]);
mySet.add("one");
mySet.add("two");
mySet.add("three");
mySet.add("one");
console.log("has method : ", mySet.has("three"));
console.log("has method : ", mySet.has("hello"));
console.log("delete method : ", mySet.delete("one"));
console.log("", mySet.size);
console.log("clear method : ", mySet.clear());
console.log("add value : ", mySet.add("five"));
console.log("second set : ", secondSet);
console.log(mySet);
// function add(a:number, n:number);
// function add(a:string, b: string);
// function add(a:boolean, b:boolean);
function add(a, b) {
    console.log("add function : ", a + b);
}
add(12, 21);
add("one", "two");
add(true, true);
