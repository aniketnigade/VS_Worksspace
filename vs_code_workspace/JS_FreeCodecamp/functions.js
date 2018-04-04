/* Function */

function square(number) {
    return number * number;
}

console.log(square(12));

var Samevar = "hat";
function myFun() {
    var Samevar = "Bat"
    console.log(Samevar); // bat local scope over global scope
}

myFun();
console.log(Samevar); // hat global scope over local scope

console.log(addsquare(1, 100));

function addsquare(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

a = addsquare(2, 3);
b = addsquare(4, 3);
c = addsquare(5, 2);

console.log(a);
console.log(b);
console.log(c);
