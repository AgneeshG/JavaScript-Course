
// one
let ticketBook = new Promise((resolve,reject) => {
    let bookingSuccess = true
    if(bookingSuccess){
        resolve()
    } else {
        reject()
    }
})
ticketBook.then(ticketBooked)
.catch(failure)
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
    if(payment){
        resolve(amt)
    } else {
        reject()
    }
})
function paymentDone(amt){
    console.log(`Rs.${amt} transfered succesfully`);
}
function paymentIssue(amt){
    console.log(`Your amount Rs.${amt} has not sent. It will be return shortly`);
}
paymentTwo.then(paymentDone)
paymentTwo.catch(paymentIssue)
