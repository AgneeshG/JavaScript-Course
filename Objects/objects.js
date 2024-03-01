/* --------------- Objects --------------- */

const userData = {
    name:"Govind",
    age:31,
    address:{
        city:"coimbatore",
        state:"tamilnadu"
    }
}

/* Enumerating Properties of object */

for(let key in userData){
    console.log(key);
}

for(let key in userData){
    console.log(key, userData[key]);
}

// for(let key of userData){    // -> error (userData us not iterable)
//     console.log(key);
// }

for(let key of Object.keys(userData)){   // -> display all key 
    console.log(key);
}

for(let entry of Object.entries(userData)){   // -> display all both key and value pair
    console.log(entry);
}

if('name' in userData){
    console.log("Yes!");
}


/* ------ Cloning an javascript object ------ */
// one
let another = {}
for(let key in userData){
    another[key] = userData[key]
}
console.log(another);

// two
another = Object.assign({
    gender:"male"
}, userData)
console.log(another);

// three
let another1 = {
    ...userData
}
console.log(another1);

/* ---- Garbage collection ---- */


/* -------- in-built Math objects -------- */
number_list = [1,2,3,4,9,43,56,96,2,1.54,0.56,324.73]

// spread operator (...)
console.log("PI value : ",Math.PI);
console.log("Max : ",Math.max(...number_list));
console.log("Min : ",Math.min(...number_list));
console.log(" : ",Math.abs(...number_list));
console.log();




/* --------  -------- */








/* --------  -------- */
