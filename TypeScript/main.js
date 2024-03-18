function display() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally : ", i);
}
display();
// datatypes
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5];
var f = ['hello', 'world', 'good', 'morning'];
var g = [1, 2, 'three', 'four', true];
var ColorRed = 1;
var ColorBlue = 2;
var ColorWhite = 3;
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["White"] = 2] = "White";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
console.log(backgroundColor);
// type assertions
var var1 = 'hello';
var var2;
var2 = "worLD";
var upperCaseFunc = var1.toUpperCase();
// let endsWithFunc = var1.endsWith('o');  // error
var lowerCaseFunc = var2.toLowerCase();
var lowerCaseFunc2 = var2.toLocaleLowerCase();
console.log("Upper case : ", upperCaseFunc);
console.log("Lower case : ", lowerCaseFunc);
console.log("LocaleLowerCase : ", lowerCaseFunc2);
// union types
var var3 = "hello";
var3 = 123;
var3 = "world";
var var4 = true;
var4 = "coimbatore";
var var5 = "sample text";
var5 = 54874;
// Arrow functions
var func1 = function (message, num) {
    console.log(message, num * 2);
};
func1("Empty string and ", 56);
var func2 = function (x, y) {
    console.log("Result : ".concat(x + y));
};
func2(45, 21);
function createUser(userData) {
    return "User mail address : ".concat(userData.email);
}
var venkat = createUser({ name: "Venkat", age: 21, id: 'ct001', email: "sample@mail.com" });
console.log(venkat);
var cardOne = {
    cardHolderName: "ravi",
    cardNumber: "432",
    cardDate: "21/3/23",
    cvv: 231
};
console.log(cardOne);
var userOne = {
    _id: "2134",
    name: "Ragu",
    age: 24,
    email: "ragu@gmail.com"
};
userOne.email = "ragu2010@gmail.com";
// userOne._id = "475"  // error = can not change value for readonly
//  Functions
// interface
var draw = function (point) {
    console.log("Draw function one", point.x + point.y);
};
draw({ x: 15, y: 45, z: 21 });
var func6 = function () {
    console.log("Interface method");
};
var draw2 = function (point) {
    console.log("point");
    func6();
    console.log(point.x + point.y + point.z);
};
draw2({ x: 12, z: 32, y: 17, draw3: func6 });
var func_1 = function () {
    console.log("sample statement");
};
var sample_func = function (parameter_) {
    console.log("Hello world");
    console.log(parameter_.num1 + parameter_.num2 + parameter_.num3);
    parameter_.func();
};
sample_func({ num1: 15, num2: 180, num3: 5, str: "Hello world", func: func_1 });
// function 
function sample_func1(name, age, city) {
    return "string value";
}
var function1_value = sample_func1("one", 23, "one and one");
function using_void(message) {
    console.log(message);
}
function display_user(name, age, gender) {
    console.log(name);
}
display_user("Naveen", 31, true);
function display_data(_a) {
    var string = _a.name_, number = _a.age, boolean = _a.isMajor;
    return "Hello";
}
display_data({ name_: "gokul", age: 28, isMajor: true });
// classes
var student = /** @class */ (function () {
    function student() {
        var _this = this;
        this.display_student = function () {
            console.log("Name: ".concat(_this.name, ", Age: ").concat(_this.age, ", Class: ").concat(_this.class));
        };
        this.result = function () {
            console.log("You have passed in this exam");
        };
    }
    return student;
}());
var student_1 = new student();
student_1.name = "Aravind";
student_1.age = 20;
student_1.class = "10\'A";
var student_2 = new student();
student_2.name = "Krishna";
student_2.age = 19;
student_2.class = "12\'B";
var employee = /** @class */ (function () {
    function employee(name, age, empid, salary) {
        this.name = name,
            this.age = age,
            this.empid = empid,
            this.salary = salary;
        employee.employee_count++;
    }
    employee.prototype.display_employee = function () {
        console.log("Employee details - Name: ".concat(this.name, ", Age: ").concat(this.age, ", Empid: ").concat(this.empid));
    };
    employee.prototype.work_time = function () {
        console.log("9AM to 6PM - Total working hours 8.");
    };
    Object.defineProperty(employee.prototype, "Salary", {
        // getter and setter
        get: function () {
            return this.salary;
        },
        set: function (value) {
            this.salary = value;
        },
        enumerable: false,
        configurable: true
    });
    employee.employee_count = 0;
    return employee;
}());
var employee1 = new employee("Sam", 45, 545, 25000);
var employee2 = new employee("Kumar", 34, 145, 30000);
student_1.display_student();
student_2.display_student();
employee1.display_employee();
console.log(employee.employee_count);
var abc = "aghdghodg";
console.log(abc);
