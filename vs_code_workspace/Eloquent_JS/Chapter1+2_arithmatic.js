/*
console = object
log = is the function() which is property of console object 
*/
console.log("Hi , \n this is new line");
var ans = 'answer is  ${100 / 2}';
console.log('answer is  ${100 / 2}');
console.log(ans);
console.log(typeof ans);

// Boolean
console.log(3 > 2);

console.log("zZ" > "zA"); // Capital always small than smallletters
console.log("aA" > "aB");

// NaN == Nan false

console.log(NaN == NaN); // never equals 

// Automatical conversion Also Called as Type Coercion
console.log("NaN" > 1); // false
console.log('2' - 1); // 1
console.log("2" - 1); // 1
console.log(1 - "NaN"); // NaN
console.log(10 % "5"); // 0
console.log("false" == 0); // false
console.log(false == 0); // true
// consol.log("AV" - "A"); // errror
console.log(2 + "20" + "1" + 1); // 22011
console.log(2 + "1"); // 21
console.log(""== null); // false
console.log(undefined == null ); // true
console.log(""== undefined); // false

// Magic of logical || and && operator 
console.log("Aniket" || "Abhijeet"); // Aniket
console.log("aaa" || "aa"); // aaa if left is bigger than right then left is return

console.log("Aniket" && "Abhijeet"); // Abhijeet (becos right is gretor)
console.log("aaa" && "aa"); // if left is bigger than right then right is return

// let vs var
let pi = 12 ;
var pi1 = 12;
if(true)
{
    var pi1 = 222;
    console.log(pi1); // 222
}
console.log(pi1); // 222
if(true)
{
    let pi = 21;
    console.log (pi); // 21
}
console.log(pi); // 12 block wise declaration treated as differnt for let

// constant act as final 
const AB = 12;
// AB = 13; error Assignment to constant variable.
console.log(AB);
// console.log is function
// Math.min(2, 4) is a expression

// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " + theNumber * theNumber);

// condition if statement

var a = 21;
if (a>21) 
    console.log("gretor than 20");
else // we can skip this line also 
    console.log("Smaller");

    // while statement
// var a = 10;
// var i =21;
// while(i < 100)
// {
//     console.log(i/a);
//     i++;
// }

let counter = 1;
if (false != true) 
    counter++;
    console.log(counter);
    console.log("That makes sense.");
    if (1 < 0) 
        console.log("No surprise there.");

/*
multiline comment
*/
