"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// while loop
var a = 10;
while (a > 1) {
    console.log(a);
    a -= 2;
}
var i = 0;
console.log("Even numbers");
while (i <= 10) {
    i += 2;
    console.log(i);
}
// do while loop
var j = 7;
do {
    console.log("value of i : ".concat(i));
} while (i < 5);
console.log("Do while loop terminated.");
console.log("---");
do {
    console.log(i);
    i--;
} while (i > 8);
// for loop
console.log("For loop");
// for(let i=1;i<=5;i++){
//     // console.log(i);
//     for(let j=1;j<=5;j++){
//         console.log(j);
//     }
// }
var sym = '*';
for (var i_1 = 1; i_1 <= 5; i_1++) {
    console.log(sym.repeat(i_1));
}
// break and continue
for (var i_2 = 1; i_2 < 10; i_2++) {
    if (i_2 > 7) {
        break;
    }
    else if (i_2 == 4 || i_2 == 5) {
        continue;
    }
    console.log(i_2);
}
