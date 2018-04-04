// ternary operator

var age = 19;
console.log((age>12)? "Less":"grator");

console.log((age<21) ? ((age >18)? "in between 18 and 21" : "less than or equal 18") :((age<31) ? "Age beween 21 and 31" : "Age greator than or equal 31"));
var stop ; 

age > 21 ? (
    console.log("Grator than 21"),
    stop = true
):(
    console.log( "Less than 21"),
    stop = false
);
 