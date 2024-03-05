
//  one
function sampleFunc(num1,num2){
    var addition = num1 + num2;
    return addition;
}
console.log(sampleFunc(42,146));

// one_one
displayName('Vetrivel');    // calling function before function decleration
function displayName(name){
    console.log(`Name : ${name}`);
}


// two
var func1 = function(...num){
    console.log(num.length);
    for(let i=0; i<num.length;i++){
    console.log(num[i]);
    }
}
func1(4,2,8,4,90)



// finding sum of array numbers
let arr = [1,2,3,4,5,6]
let arr1 = [3,4,5,8,9,5]
let arr2 = [8,4,9,3,0,6]
let findSum = function(arr){
    let sum = 0
    for(let value of arr){
        sum += value
    }
    return sum
}
console.log(findSum(arr));
console.log(findSum(arr2));

let findSumArrow = (arr) => {
    let sum = 0
    for(let value of arr){
        sum += value
    }
    return sum
}
console.log('Arrow function : ',findSumArrow(arr1));


// passing parameter as array
let func7 = function(...args){
    let var1 = 0
    for(value of args){
        var1 += value
    }
    return var1
}   
console.log(`Passing parameter as array : `,func7(3,4,3,10,20));