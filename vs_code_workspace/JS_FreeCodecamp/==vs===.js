// == vs ===
var a = 3;
var b = "3";
console.log(a==b);      // no data type checking
console.log(a===b);     // all checking

console.log(true=="1"); // 
console.log(false==0);

console.log("aniket"==new String("aniket"));
console.log("aniket"===new String("aniket")); // literals are not exactly equals to new string object


