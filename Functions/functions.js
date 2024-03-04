
//  one
function sampleFunc(num1,num2){
    var addition = num1 + num2;
    return addition;
}
console.log(sampleFunc(42,146));

// two
var func1 = function(...num){
    console.log(num.length);
    for(let i=0; i<num.length;i++){
    console.log(num[i]);
    }
}
func1(4,2,8,4,90)