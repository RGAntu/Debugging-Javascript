// <--------------- 1. Syntax Error ------------>

// 01 -> Missing Quote
// let x = "Redoy ghosh
// console.log(x)

// 02 -> Unmatched Parentheses 
// console.log( "hello, redoy" 


// 03 -> Incorrect Keyword 
// for (Let i = 0; i < 5; i++){
//     console.log(i)
// }

// 04 -> Unexpected Token
// const for = 0;

// 05 ->  Unexpected End
// function add(a,b){
//     return a + b;


// 06 -> Unexpected Identifier
// let person = {
//     name : "Alice"
//     age: 25
// };




// <----------------- 2. Type Error ------------->

// 01. Incorrect data types in operation

let number = 42;
number() // Trying to call a number as a function 

let user;
console.log(user.name) // user is undefined


// 02. Calling a method on incorrect object type
let number1 = 42; 
number1.toUpperCase(); // TypeError: number.toUpperCase is not a function