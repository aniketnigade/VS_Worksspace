//variables

//Boolean
var flag = true
if (flag) {
    console.log("True");
}
else {
    console.log("False");
}

// null 
var NULL1 = null
console.log(NULL1 * 21);

// undefined
var a;
console.log(a);
console.log(a * 32);

// Number
var a1 = 21.22;
var a2 = 21.78;
var a3 = 10;
console.log(a1 + a2);
console.log(a1 + a2 + a3);
console.log(a1 + a3);

// string
var A = "HI";
console.log("THIS IS " + A);

// symbol
var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(String(sym1)===String(sym2));

// object 
var myclass = new Object();
myclass.name = "Moto";
myclass.model = "G3";
myclass.price = "10000";
console.log(myclass.price);


