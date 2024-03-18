
const username = prompt("Enter Username : ")
let msg = document.getElementById('message-h1')
// msg.innerHTML = "Welcome to home page"
msg.textContent += username === "" ? ' Guset' : ' '+username;  


/* document.getElementsByName() */
let btn = document.getElementsByName('language')
console.log(btn);


/* document.getElementsByClassName() */
let div1 = document.getElementById('h3 container')
let msg1 = document.getElementsByClassName('message')
console.log(msg1);
// let msg1 = div1.getElementsByClassName('message')
// console.log(div1);


document.body.style.backgroundColor = '#c5d1e3'
function daylight(){
    document.body.style.background = '#c5d1e3'
}
function darkmode(){
    document.body.style.backgroundColor = '#000000'
    // document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
}
function changeTitle(){
    document.title = "My website"
}

/* --------------------------------- Query selector and Query selectorAll ------------------------------------ */

/* querySelector() and querySelectorAll() */
let var3 = document.querySelector('.one')  // select first element with class name "one"
let var4 = document.querySelector('#secondDiv')  // select first element with id "secondDiv"
let var1 = document.querySelectorAll(".one")   // select all elements with class name 'one'
let var2 = document.querySelectorAll("#firstDiv")  // select elements with id of "firstDiv"
console.log("second div : ",var4);
let first_div = document.getElementById('firstDiv')  
let var5 = first_div.querySelector('.one')  // select first element with the class name of 'one'(inside firstDiv id) 
let var6 = first_div.querySelectorAll('.one')
console.log("-----");
let var7 = document.querySelectorAll("h4")  // select all h4 tags 
let var8 = document.querySelectorAll("h1,h4")  // select all h1 and h4 tags
console.log(var7);
console.log(var8);  


/* parent node property */
let var9 = document.querySelector('.one').parentNode
console.log(var9);
let var10 = document.querySelector('.one')  // parentElement.nodeName;
let var10_ = var10.parentNode   ;
console.log(var10_);

/* child element */
let var11 = document.querySelector('#secondDiv')
console.log("first child",var11.firstChild);
console.log("first child element ",var11.firstElementChild);
console.log("first child element ",var11.lastElementChild);
console.log("first child element ",var11.childNodes);

/* =================================== ==================================== ==================================== */

/* --------------------------------- ---------------------------- ------------------------------------ */
let div2 = document.createElement("div")
div2.innerHTML = "<p>Create element method</p>"
div2.innerHTML = "<p>Hello world.</p>"
document.body.appendChild(div2)
div1.title = 
console.log(div2);








/* Adding two number */
function add(){
    let num1_ = document.getElementById('num1').value
    let num2_ = document.getElementById('num2').value
    let p_value = document.getElementById('print_result')
    const add_result = Number(num1_) + Number(num2_)
    p_value.textContent = add_result
}


/* change h1 tag color */
function changeColor_(){   // not used
    const h1id = document.getElementById('one')
    h1id.style.color = "red"
    const h1Color = document.getElementsByClassName('one')
    h1Color.style.color = "red";

}
/* change h4 tag color */
function changeColor() {
    const headings = document.getElementsByTagName('h4');
    for (let i = 0; i < headings.length; i++) {
        headings[i].style.color = 'red'; // Change color to red
    }
}



var secDiv = document.getElementById('secondDiv')
var h4Tag = secDiv.getElementsByClassName('one')
console.log(h4Tag);