console.log("--- Iterators and Generators ---");

let num=1
function temp(){
    for(let i=1;i<=10;i++){
        console.log(num);
        num++;
    }
}
temp()
temp()

function* test5(){
    for(let i=0;i<5;i++){
        yield i
    }
}

let j=0
let j1=10
function display(x){
    for(i=1;i<=10;i++){
        console.log(x);
        x++;
        j = x;
    }
}
display(j)
console.log(`j : ${j }`);

let k =0 
function* test(){
    for(let i=0;i<5;i++){
        // yield 21;
        // yield 22;
        // yield 23;
        yield k++;
        
    }
    // yield 1;
    // yield 2;
    // yield 3;
}
let obj = test()

console.log(obj.next());
console.log(obj.next().value);


console.log(obj.next());
console.log(obj.next());
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);

// class first{
//     a = 20
//     constructor(){
//         alert('aaa')
//     }
//     display(){
//         console.log(this)
//     }
// }
// let AA = new first()
// AA.display()
