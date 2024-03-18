console.log("--- primitive types ---");

var str1 = new String('Hello world')
console.log(str1.endsWith('world'));
console.log(str1.toUpperCase());
console.log(str1.charAt('l'));
console.log(str1.charCodeAt('r'));
console.log(str1.concat(' Good evening'));
console.log(str1.includes('lo'));
console.log("rose is a rose is a rose".indexOf('rose'));
console.log("rose is a rose is a rose".lastIndexOf('rose'));
console.log("rose is a rose is a rose".match('rose'));
console.log("one two three".split(' '));
console.log("one more time".search('more'));
console.log(str1.slice(0,6));
console.log("   space everywhere       ".trim());
console.log(str1);



var boo = new Boolean(true)
console.log(boo.String);
console.log(boo.valueOf());
console.log(boo.toString());



var num21 = new Number(1000);
console.log(num21);
console.log(num21.toFixed(2));
console.log(num21.toPrecision());
console.log(num21.toString());
console.log(num21.toString(2));
console.log(num21.toString(8));
console.log(num21.toString(16));
console.log(num21.toExponential(2));
console.log(num21.toPrecision(3));
console.log(num21.toPrecision(4));
console.log(num21.toPrecision(5));
console.log(num21.toLocaleString());
