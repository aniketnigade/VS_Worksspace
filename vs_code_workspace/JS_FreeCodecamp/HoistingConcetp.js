// hoisting 
// console.log(C);  C is not defined


console.log(A); // just undefined error 
var A;
A= "aniket";
console.log(A);

console.log(B);
var B = "shruti";
console.log(B);

// but if we give comment to A and "aniket" then no error 
// comes this is callled as hoisting
// function also hoisted 

// element has been used before declaration

functionhoisting ();

function functionhoisting (){
    console.log("i did it inside function");
}

// functionfail is not a function 
// functionfail();
// var functionfail = function(){
//     console.log("Failed");
// }


// always define variable at top 
// always define function at bottom