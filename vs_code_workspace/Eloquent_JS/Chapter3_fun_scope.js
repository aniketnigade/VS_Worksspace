/*
There's no problem with what you've done, but you must remember the difference between function declarations and function expressions.

A function declaration, that is:

function doSomething () {}
Is hoisted entirely to the top of the scope (and like let and const they are block scoped as well).

This means that the following will work:

doSomething() // works!
function doSomething() {}
A function expression, that is:

[const | let | var] = function () {} (or () =>
*/

// Function
// let a= 2;
// console.log(square(a));
// function square(B) // declaration
// {
//     return B * B ;
// }

// or 


var square = function(B){ // name of the function is square called by console.log // expression declaration
    return B * B
 }
console.log(square(21));

// study of global scope and local scope 
// var is for global 
// let is for local

let X= 10;
if (true){
    var Y = 20 
    let Z = 30;
    console.log(X+Y+Z); // ALL CONSIDERD
}
    console.log(X+Y); // not defined error for Z
