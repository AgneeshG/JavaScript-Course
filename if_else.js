age = 24

let result = age>18 ? "can_vote" : "have_to_wait"
console.log(result);

// one
if(age>18){
    console.log("Major");
} else {
    console.log("Minor");
}

// two
personOneAge = 54;
personTwoAge = 71;
personThreeAge = 48;
if(personOneAge > personTwoAge && personOneAge > personThreeAge){
    console.log("Person One is older than person Two and Three.");
} else if(personTwoAge>personThreeAge) {
    console.log("Person Two is older than person One and Three.");
} else {
    console.log("Person Three is older than person One and Two.");
}

// three - find whether person can be allowed to take a roller coaster ride
age = 16;
parentPermission = true;
if( (age>=18 || parentPermission) && age<60){
    console.log("You are allowed for this roller coaster ride.");
} else {
    console.log("You are not allowed for this roller coaster ride.");
}