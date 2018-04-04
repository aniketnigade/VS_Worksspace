// String

var var1 = "Aniket Nigade"; //Acts as Array also

console.log(var1[0]);

console.log(var1[var1.length - 1 ]);

console.log(var1.charAt(1));

console.log(var1.substring(0,10));

console.log(var1.substr(1,10));

// you cann't change character of string because they are immutable 
var1[0] = "B";
console.log(var1); 