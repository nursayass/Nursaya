//1
// no error
let message = "hello";
message = 123456;

//2
let n = 123;
n = 12.345;

//3
alert( 1 / 0 ); // Infinity

//4
alert( "not a number" / 2 ); // NaN, such division is erroneous

//5
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

//6
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

//7
let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

//8
alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)

//9
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

//10
let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")

//11
let age = null;

//12
let age1;
alert(age1); // shows "undefined"

//13
let age2 = 100;
// change the value to undefined
age2 = undefined;
alert(age2); // "undefined"

//14
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function" (3)



