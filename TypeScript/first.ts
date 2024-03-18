import { employee } from "./types/employee.type";
import { student  } from "./types/student_type";


/* ---- Datatypes ---- */

// Primitive types
let n = 31;
let num:number = 45;   
let str:string = "Hello!"
let boo:boolean = true


// Reference types [array, object]
let str_array:string[] = ['one','two','three','four']
let num_array:number[] = [1,2,3,4,5]
let mixed_array:any[] = ['one',1,'two',2,4,true]



// object
let object_value:{name:string,age:number,isAlive:boolean} = {
    name:'Balu',
    age:28,
    isAlive:true
}

let object_value_two:{name:string,age:number,isMajor:boolean} = {
    name:"Velan",
    age:32,
    isMajor:true
}

let obj_array:{name:string,age:number,isMajor:boolean}[] = [{name:"Hari", age:17, isMajor:false}, {name:"Banu",age:29,isMajor:true}, {name:'Mani',age:25,isMajor:true}]
console.log(object_value_two);
console.log("Object array : ",obj_array[1]);




let Employee_list:employee[] | null = [{name:"Arun",age:41,salary:25000}, {name:'Billa',age:32,salary:23000}]
let Student_list:student[] = [{name:'Venkat',age:19,id:205}, {name:'Vetri',age:21,id:115}]
console.log(Employee_list);
console.log(Student_list);


let animals:string[] = ["cat",'dog',"lion","bear"]
// map method
let animals_list = animals.map((animal)=>{
    return `Animal name : ${animal.toUpperCase()}`      
})
console.log(animals_list);

let animals_list2 = animals.map((animal:string)=>{
    return animal.toUpperCase()
})

let animal_count = animals.map((animal):number=>{    // this can return only number values
    return 3  
})

// forEach method
animals.forEach((animal)=>{
    console.log(animal);
    
})



// switch
let number_: string | number = "43"
switch(true){
    case (+number_>=0 && +number_<=30):  // unery plus operator
        console.log("switch - one");
        break;
    case Number(number_)>30 && Number(number_)<=50:
        console.log("switch - two");
        break;
    case number_>50:
        console.log("switch - three");      
        break
    default:
        console.log("switch default");
}

let num5 = 32
switch(true){
    case(num5>30):
    console.log("dfhfvgod");
    
}



// set 
let mySet = new Set()
let secondSet = new Set<string>(["create","second","set"])
mySet.add("one")
mySet.add("two")
mySet.add("three")
mySet.add("one")
console.log("has method : ",mySet.has("three"));
console.log("has method : ",mySet.has("hello"));
console.log("delete method : ",mySet.delete("one"));
console.log("",mySet.size);
console.log("clear method : ",mySet.clear());
console.log("add value : ",mySet.add("five"));
console.log("second set : ",secondSet);
console.log(mySet);


// function overloading
function add(a:number, n:number);
function add(a:string, b: string);
// function add(a:boolean, b:boolean);
function add(a:any, b:any){
    console.log("add function : ",a+b);
    
}
add(12,21)
add("one","two")
// add(true, true)