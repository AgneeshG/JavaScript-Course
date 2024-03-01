/* ------------ Create Objects using function ------------ */

// Factory functions  ->  camelcase : myFirstName
// one
function createPerson(name,age){
    return {
        name:name,
        age:age,
        greeeting: function(){
            console.log(`My name is ${this.name} and i am ${this.age} years old.`);
        }
    };
}
let anbu = createPerson("Anbu",31);  // anbu is object name
anbu.greeeting();


//two
function createPerson2(name,age){
    return {
        name:name,
        age:age,
        greeting(){
            let msg = `My name is ${this.name} and i'm ${this.age} years old.`;
            console.log(msg);
        }
    };
}
let trisha = createPerson2("Trisha",27);  // trisha is object name
trisha.greeting();


// Constructor functions  ->  Pascal : MyFirstName
// three



/* --- Dynamic Nature of Objects --- */
const person ={
    name:"Banu"
};

person.age = 24  // adding age to person object
person.address = {   // adding address to person object
    city:"coimbatore",
    state:"tamilnadu"
}
console.log(person);

person.age = 31  // change age 
console.log(person);
// person = "Aravind"   // -> error