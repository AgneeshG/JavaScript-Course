/* ---- String property ---- */
// length

string1 = 'Hello world! Good morning. Java Script'
console.log(string1.length);

/* ---- Escape notation ---- */

/* ------------------------- String methods ------------------------- */

/* String.prototype.charAt(index) */
firstName = "Dharshini"
console.log(firstName.charAt(4));  // -> s
console.log(firstName.charAt(7));  // -> n


/* String.prototype.concat() */
lastName = "Nataraj"
console.log(firstName.concat(' ',lastName));  // -> Dharshini Nataraj


/* String.prototype.includes() */
console.log(firstName.includes("sh"));  // -> true
console.log(firstName.includes("na"));  // -> false


/* String.prototype.startsWith() */
console.log(firstName.startsWith("Dh"));  // -> true
console.log(firstName.startsWith("dh"));  // -> false


/* String.prototype.endsWith() */
console.log(firstName.endsWith("e"));  // -> false
console.log(lastName.endsWith("raj"));  // -> true


/* String.prototype.indexOf() */
console.log(string1.indexOf("!"));  // -> 11(index value)
console.log(string1.indexOf("morning"));  // -> 18(index value)


/* String.prototype.repeat() */
console.log(firstName.repeat(4));    // -> DharshiniDharshiniDharshiniDharshini


/* String.prototype.replace() */
console.log(lastName.replace("raj", "Raj"));  //  -> NataRaj
console.log(lastName);  // -> Nataraj


/* String.prototype.slice */
console.log(firstName.slice(3));
console.log(firstName.slice(5));


/* String.prototype.split */
console.log(firstName.split('i',1));  // ->  ['Dharsh']
console.log(firstName.split('i',2));   // ->   ['Dharsh', 'n']
console.log(string1.split(' ',2));  // ->   ['Hello', 'world!']
console.log(string1.split(' ',4));   // ->   ['Hello', 'world!', 'Good', 'morning.']


/* String.prototype.substr */
console.log(string1.substr(8));  //  -> rld! Good morning. Java Script
console.log(firstName.substr(5));   // -> hini


/* String.prototype.toLowerCase() */
console.log(firstName.toLowerCase());  //  ->  dharshini
console.log(lastName.toLowerCase());  //  ->  nataraj


/* String.prototype.toUpperCase() */
console.log(firstName.toUpperCase());  //  ->  DHARSHINI
console.log(lastName.toUpperCase());  //  ->  NATARAJ


let message = "    hello   ";
/* String.prototype.trim() */
console.log(message.trim());  //  ->  'hello'


/* String.prototype.trimEnd() */
console.log(message.trimEnd());  //  ->   '    hello'


/* String.prototype.trimStart() */
console.log(message.trimStart());  //  ->  'hello   '


/* String.prototype. */
/* String.prototype. */
/* String.prototype. */


/* String.prototype. */
/* String.prototype. */
