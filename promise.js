
// one
let ticketBook = new Promise((resolve,reject) => {
    let bookingSuccess = true
    if(bookingSuccess){
        resolve()
    } else {
        reject()
    }
})
ticketBook.then(ticketBooked).catch(failure)
function ticketBooked(){
    console.log("Train ticket booked successfully.");
}
function failure(){
    console.log("Thanks for trying. Ticket booking failure");
}



// two
let payment = new Promise((resolve,reject)=>{
    paymentStatus = true
    if(paymentStatus == true){
        resolve()
    } else {
        reject()
    }
})

function paymentSuccess(){
    console.log("Payment sent successfully.");
}
function paymentFailure(){
    console.log("Payment failed.");
}
payment.then(paymentSuccess)
payment.catch(paymentFailure)



// three
let amt = 450
let paymentTwo = new Promise((resolve,reject)=>{
    paymentStatus = true
    if(paymentStatus){
        resolve(amt)
    } else {
        reject(amt)
    }
})
function paymentDone(amt){
    console.log(`Rs.${amt} transfered succesfully`);
}
function paymentIssue(amt){
    console.log(`Your amount Rs.${amt} has not sent. It will be return shortly`);
}
paymentTwo.then(paymentDone)
.catch(paymentIssue)



// four
let product = 'mobile'
let productOrderStatus = new Promise((resolve,reject)=>{
    let orderDelivered = false
    if(orderDelivered){
        resolve(product)
    } else {
        reject(product)
    }
})

// function delivered(){
//     console.log(`Your ${product} successfully delivered`);
// }
function process(){
    console.log(`Your ${product} has been shiped to nearby dealer.`);
}
// let del = (()=>{
//     console.log('delivered');
// })
productOrderStatus.then(()=>{ console.log('delivered'); })
.catch(process)



// five
function tossCoin(){
    return new Promise((resolve,reject)=>{
        const rand = Math.floor(Math.random()*2)
        if(rand == 1){ 
            resolve()
        } else {
            reject()
        }
    })
}
tossCoin()
.then(()=>{ console.log("Congrats! You win it's head"); })
.catch(()=>{ console.log("Sorry! You lost, it's tail"); })



/* Six Promise.all() - Fulfills when all of the promises fulfill; rejects when any of the promises rejects. */
let reachA = new Promise((resolve,reject)=>{
    const reached = true
    if(reached){
        resolve('Ramya reached')
    } else {
        reject('Ramya not reached')
    }
})

let raechB = new Promise((resolve,reject)=>{
    let reached = true
    if(reached){
        resolve('Arun reached')
    } else {
        reject('Arun not reached')
    }
})

let reahcC = new Promise((resolve,reject)=>{
    let reached = true
    if(reached){
        resolve('Kumar reached')
    } else{
        reject('Kumar not reached')
    }
})

Promise.all([reachA,raechB,reahcC])
.then((message)=>{ console.log(message) })
.catch((message)=>{ console.log(message) })




/* Seven */
let reachD = new Promise((resolve,reject)=>{
    const reached = true
    if(reached){
        setTimeout(resolve,3000,'Varun reached')
    } else {
        reject('Varun not reached')
    }
})

let raechE = new Promise((resolve,reject)=>{
    let reached = true
    if(reached){
        setTimeout(resolve, 2000, 'Dharshini reached')
    } else {
        reject('Dharshini not reached')
    }
})

let reahcF = new Promise((resolve,reject)=>{
    let reached = true
    if(reached){
        setTimeout(resolve, 4000, 'Vetri reached')
    } else{
        reject('Vetri not reached')
    }
})

Promise.all([reachD,raechE,reahcF])
.then((message)=>{ console.log(message) })
.catch((message)=>{ console.log(message) })



/* Eight - Promise.allSetteled() - Fulfills when all promises settle. */
let reachG = new Promise((resolve,reject)=>{
    const reached = true
    if(reached){
        setTimeout(resolve,3000,'Dharshan reached')
    } else {
        reject('Dharshan not reached')
    }
})

let raechH = new Promise((resolve,reject)=>{
    let reached = true
    if(reached){
        setTimeout(resolve, 2000, 'Sam reached')
    } else {
        reject('Sam not reached')
    }
})

let reahcI = new Promise((resolve,reject)=>{
    let reached = false
    if(reached){
        setTimeout(resolve, 4000, 'Pavithra reached')
    } else{
        reject('Pavithra not reached')
    }
})

Promise.allSettled([reachG,raechH,reahcI])
.then((message)=>{ console.log(message) })
.catch((message)=>{ console.log(message) })

console.log("Promise.all method");


// Nine - Async, Await 
