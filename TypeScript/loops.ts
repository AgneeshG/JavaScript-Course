
// while loop
let a = 10
while(a>1){
    console.log(a);
    a -= 2
}


let i = 0
console.log("Even numbers");

while(i<=10){
    i += 2
    console.log(i);
}



// do while loop
let j = 7
do{
    console.log(`value of i : ${i}`);
}while(i<5)
console.log("Do while loop terminated.");

console.log("---");

do{
    console.log(i);
    i--;
}while(i>8)

// for loop
console.log("For loop");

// for(let i=1;i<=5;i++){
//     // console.log(i);
//     for(let j=1;j<=5;j++){
//         console.log(j);
//     }
// }


let sym = '*'
for(let i=1;i<=5;i++){
    console.log(sym.repeat(i));
    
}



// break and continue

for(let i=1;i<10;i++){
    if(i>7){
        break;
    }else if(i==4 || i==5){
        continue;
    }
    console.log(i);
    
}


export{} 