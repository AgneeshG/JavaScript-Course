class Employee{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    displayName(){
        console.log(`Employee name : ${this.name}`);
    }
    displayAge(){
        console.log(`${this.name} employee age : ${this.age}`);
    }

}


export {Employee}

