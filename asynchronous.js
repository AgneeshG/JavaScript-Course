console.log("Good morning");  // one
function sync(){
    console.log('step 1');  // three
    console.log('step 2');  // four
    console.log('step 3');  // five
}
sync()  // two

setTimeout(()=>console.log('step1 - 5\'s'),5000); 
setTimeout(()=>console.log('step2_1'),2000);  
setTimeout(()=>console.log('step3_1'),1000);  

setTimeout(()=>{console.log('step1 - 4\'s')},4000);  
setTimeout(()=>{console.log('step2_2')},2000);  
setTimeout(()=>{console.log('step3_2')},1000);

console.log('Program completed');  // six
sync()  // seven

// setInterval(()=>{console.log('interval');},3000)
// sync() 



//  async and await method
let promisefn = new Promise((resolve,reject)=>{
    let var1 = true
    if(var1){
        setTimeout(resolve,5000,'promise function - true - ')
    } else{
        resolve("resolve two")
    }
})

let promisefn1 = new Promise((resolve,reject)=>{
    let var1 = true
    if(var1){
        setTimeout(resolve,7000,'promise function - true -')
    } else{
        resolve("resolve two")
    }
})  

function fn1(msg){
    console.log("async and await :");
    // setTimeout(console.log(msg+"setTimeout for 4 seconds"),8000)
    console.log(msg+"Hello");
}

// function fn2(msg){
//     console.log(msg+"Hello world");
// }

// promisefn.then(fn1).catch(fn2)
async function asyncfn(){
    console.log("Async function");
    const aw = await promisefn
    console.log(aw);
    const aw2 = await promisefn1
    console.log(aw2);
    console.log("bye");
 }
 asyncfn()