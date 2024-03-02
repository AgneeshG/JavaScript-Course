// one
function sampleFunc(num1,num2){
    var addition = num1 + num2;
    return addition;
}
console.log(sampleFunc(42,146));

// two
function sampleFunc2(num1,num2){
    mathObject = {
        add_ : num1 + num2,
        sub_ : num1 - num2,
        mul_ : num1 * num2,
        div_ : num1 / num2
    };
    return mathObject;
}
var var_1 = sampleFunc2(4,6);
console.log(var_1);
console.log(var_1.mul_);


// three - anonymous function
let sampleFunction = function(){
    console.log("Hello world!");
}
sampleFunction();
let sampleFunc3 = function(name){
    console.log("Hello "+name);
}
sampleFunc3('vatri')


// four - callback function