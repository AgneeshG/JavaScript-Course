function display() {
    for(var i=0;i<5;i++){
        console.log(i);
    }
    console.log("Finally : ",i);
}
display();

// datatypes
let a:number;
let b:string;
let c:boolean;
let d:any;
let e:number[] = [1,2,3,4,5]
let f:string[] = ['hello','world','good','morning']
let g:any[] = [1,2,'three','four',true]

const ColorRed = 1;
const ColorBlue = 2;
const ColorWhite = 3;

// enum
enum Color { Red=0, Blue=1, White=2 };
let backgroundColor = Color.Blue;
console.log(backgroundColor);

enum seatChoise {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window"
}
let mySeat = seatChoise.WINDOW



// type assertions
let var1 = 'hello'
let var2;
var2 = "worLD"
let upperCaseFunc = var1.toUpperCase()
// let endsWithFunc = var1.endsWith('o');  // error
let lowerCaseFunc = (var2 as string).toLowerCase()
let lowerCaseFunc2 = (<string> var2).toLocaleLowerCase()
console.log("Upper case : ",upperCaseFunc);
console.log("Lower case : ",lowerCaseFunc);
console.log("LocaleLowerCase : ",lowerCaseFunc2);


// union types
let var3:string | number = "hello"
var3 = 123
var3 = "world"

type type1 = string | number
type type2 = string | boolean
let var4:type2 = true
var4 = "coimbatore"
let var5:type1 = "sample text"
var5 = 54874 
let data1 :string[] | number[] = ['thiru','himachal'] 

// Arrow functions
let func1 = (message,num)=>{
    console.log(message,num*2);
}
func1("Empty string and ",56)


let func2 = (x:number,y:number)=>{
    console.log(`Result : ${x+y}`);
}
func2(45,21)



// tuples
let data2: [string, number] = ["peacock",57]
let data_ :[string, boolean, string, number]
data_ = ["property", true, "Company",2]
let rgb:[number, number, number] = [255, 255, 255]

type num_only = [number, number]
let num_only_one: num_only = [21,12]


// type aliases
type User = {
    name:string;
    age:number;
    id:string | number;
    email:string;
}
function createUser(userData:User){
    return `User mail address : ${userData.email}`
}
let venkat = createUser({name:"Venkat", age:21, id:'ct001', email:"sample@mail.com"})
console.log(venkat);

type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cardHolderName:string
    cvv: number
}
let cardOne:cardDetails = {
    cardHolderName: "ravi",
    cardNumber:"432",
    cardDate:"21/3/23",
    cvv:231
} 
console.log(cardOne);


// Readonly
type siteUser = {
    readonly _id: string
    name: string
    age: number
    email: string
    creaditCardDetails?: number
}

let userOne:siteUser = {
    _id: "2134",
    name: "Ragu",
    age: 24,
    email: "ragu@gmail.com"
}
userOne.email = "ragu2010@gmail.com"
// userOne._id = "475"  // error = can not change value for readonly


// array
let fruits :string[] = ["apple","banana","orange","papaya"]
fruits.push("cherry")
console.log(fruits);
type user = {
    name:string
    age:number
    gender:string
}
let userDetails :user[] = [
    {name:"Arun",age:23,gender:"male"}, 
    {name:"Siva",age:31,gender:"male"}
]


let MLModels : number[][] = [
    [255,255,255],
    [1451,684,752,462]
]

let datas: (string | number)[] = ["hello", "front", 548, "run", 894]



//  Functions
// interface
let draw = (point:{x:number,y:number,z:number})=>{
    console.log("Draw function one",point.x+point.y);
}
draw({x:15,y:45,z:21})


interface Point{
    x:number,
    y:number,
    z:number,
    draw3:()=>void
}
let func6 = ()=>{ 
    console.log("Interface method");
}
let draw2 = (point:Point)=>{
    console.log("point"); 
    func6()   
    console.log(point.x+point.y+point.z);
    
}
draw2({x:12,z:32,y:17,draw3:func6})

interface UserOne {
    readonly dbId: number,
    email: string,
    uesrId: number,
    googleId?: string
}
interface UserOne {
    startTrail():string,
    getCoupon(couponName:string, value: number):number
}
let userArun: UserOne = {
    dbId: 646189156,
    email: "uerarun@gmail.com",
    uesrId: 2211,
    startTrail: ()=>{
        return 'returning string value'
    },
    getCoupon: ()=>{
        return 651451464
    }
}


interface point1{
    num1:number,
    num2:number,
    num3:number, 
    str:string,
    func:()=>void
}
let func_1 = ()=>{
    console.log("sample statement");
}
let sample_func = (parameter_:point1)=>{
    console.log("Hello world");
    console.log(parameter_.num1+parameter_.num2+parameter_.num3);
    parameter_.func()
}
sample_func({num1:15,num2:180,num3:5,str:"Hello world",func:func_1})



interface takePhoto {
    cameraMode : string
    filter: string
    burst : number
}
interface story{
    createStory() : void
}
class instagram implements takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number){
            this.cameraMode = cameraMode
            this.filter = filter
            this.burst = burst
    }
}
class youtube implements takePhoto, story{
    constructor(        
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
        ){}
    createStory(): void{
        console.log("story was created.");
    }
}





// function 
function sample_func1(name:string,age:number,city:string):string {
    return "string value"
}
let function1_value = sample_func1("one",23,"one and one")


function using_void(message):void{   // using void it not going to return anything in the function
    console.log(message);
}


function display_user(name,age,gender){
    console.log(name);
}
display_user("Naveen",31,true)

function display_data({name_:string,age:number,isMajor:boolean}){
    return `Hello`
}
display_data({name_:"gokul",age:28,isMajor:true})




// classes
class student{
    name:string;
    age:number;
    class:string;
    display_student = ()=>{
        console.log(`Name: ${this.name}, Age: ${this.age}, Class: ${this.class}`);
    }
    result = ()=>{
        console.log("You have passed in this exam");
    }
}
let student_1 = new student();
student_1.name = "Aravind"
student_1.age = 20
student_1.class = "10\'A"

let student_2 = new student();
student_2.name = "Krishna"
student_2.age = 19
student_2.class = "12\'B"


class employee{
    static employee_count:number = 0;
    name:string
    age:number
    empid:number
    private salary:number
    constructor(name:string,age:number,empid:number,salary:number){
        this.name=name,
        this.age = age,
        this.empid = empid,
        this.salary = salary
        employee.employee_count++;
    }
    display_employee(){
        console.log(`Employee details - Name: ${this.name}, Age: ${this.age}, Empid: ${this.empid}`);
    }
    work_time(){
        console.log("9AM to 6PM - Total working hours 8.");
    }

    // getter and setter
    get Salary(){
        return this.salary;
    }
    set Salary(value){
        this.salary = value;
    }
}
let employee1 = new employee("Sam",45,545,25000)
let employee2 = new employee("Kumar",34,145,30000)


student_1.display_student()
student_2.display_student()

employee1.display_employee()
console.log(employee.employee_count);



// abstract class
abstract class Take_Photo{
    constructor(
        public cameraMode: string,
        public filter: string
        ){}
    
    abstract getSepia(): void

    getReelTime(): number{
        return 8
    }
}
class instagram extends Take_Photo{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log("Sepia");
        
    }

    g
}
