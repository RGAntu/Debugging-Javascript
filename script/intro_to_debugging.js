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
// number() // Trying to call a number as a function 

let user;
// console.log(user.name) // user is undefined


// 02. Calling a method on incorrect object type
let number1 = 42; 
// number1.toUpperCase(); // TypeError: number.toUpperCase is not a function



// <------------------ 3. Reference Error -----------> 
const sum = () => {
    const result = 10 + 22;
}

console.log(result);

// Example 1 : Undeclared variable 
console.log(x); // ReferenceError: x is not defined


// Example 2: Variable out of scope
function myFunction(){
    let y = 5;
}
console.log(y) // ReferenceError: y is not defined



/**
 * ------ Common Causes ----- 
 * 1. Undeclared variable: Using a variable without declaring it with let, const or var.
 * 
 * 2. Variable out of scope: Trying to access a variable from outside the block where it was declared (like using a variable defined inside a function outside of it).
 */