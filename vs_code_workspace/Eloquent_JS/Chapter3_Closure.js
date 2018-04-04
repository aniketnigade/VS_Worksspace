// creating local binding in which function returns
// same value which is passed to itself.
// being able to reference a specific instance of a local binding 
// in an enclosing scope—is called closure.
function MaxVal(a){
    let local = a;
    return () => local;
} 

// console.log(MaxVal(99)); output is -> undefined
let wrap = MaxVal(12);
console.log(wrap()); // OUTPUT - > 12
// let wrap = MaxVal(13); already declared
let wrap1 = MaxVal(15);
console.log(wrap1());
// this is used to store both calls.
// ----------------------------------------------------------
function factor(factor1){
    return number => number*factor1;
}
let insta = factor(23);
console.log(insta(5)); // 115
// factor1 = 23 // number = 5 converted intp 115
//---------------------------------------
// Recursion->$ is a valid function or variable name in Javascript.
// This is growing functions 
function printFarmInventory(cows, chickens) {
        let cowString = String(cows);
        while (cowString.length < 3) {
        cowString = "0" + cowString;
        }
            console.log(`${cowString} Cows`);
            let chickenString = String(chickens);
            while (chickenString.length < 3) {
                chickenString = "0" + chickenString;
            }
        console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

