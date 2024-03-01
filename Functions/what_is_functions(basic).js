/* ------------------------------ FUNCTIONS ------------------------------ */
// One
function func1(){
    console.log("Hello world!");
}
func1()

// Two
function func2(parameter1, parameter2){
    console.log(`Hello ${parameter1}! ${parameter2}`);
}
func2("Argument1","Argument2")

// Three
function func3(name, message){
    console.log(`Hello ${name}! ${message}.`);
}
func3("Anbu","How are you")

// Four
function func4(name){
    return `Hello, ${name}!`
}
let printname = func4("Vetri")
console.log(printname);

// Five
function func5(message,name){
    if(name){
        return `Hello, ${name}! ${message}`;
    } else {
        return `Hello, Annonymous! ${message}`;
    }
}
let var1 = func5('How are you')
console.log(var1);

// Six - Function will be duplicated
function willBeDuplicated(message){
    console.log("I will be duplicate");
}

function willBeDuplicated(message){
    console.log("I am original");
}

willBeDuplicated('Function:')


