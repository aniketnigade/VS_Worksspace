// instead of function keyword we use " => " symbol
// here => also called as THIS INPUT

const A = x =>{ // feature added in 2015
    return x*x*x*x;
}
console.log(A(12));
//////////////////////////////
const B = (x,y) =>{
    return ((x*x*x*x)/y);
}
console.log(B(12,10));
//////////////CALLING WORKFLOW- CALL STACK////////////////////////////////////////
function greet(word){ // 2nd step
    console.log("HEllo" + word);
}
greet("Harry"); // 1st step

console.log("Hi"); // 3rd step
/////////////////////////////////////////////////////////
// console.log(first() + "Came first");
// function first(){
//     return second();
// }
// function second(){
//     return first();
// }
// RangeError: Maximum call stack size exceeded
////////////////////////////////////
function power(base , power=2){ 
    // we can directly provide value for argument on run timen basis
    return base*power;
}
console.log(power(4)); // 8
console.log(power(2,10)); // 10 overtakes power arg
