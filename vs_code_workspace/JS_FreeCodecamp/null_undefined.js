var a;
console.log(a);

var b = null;
console.log(b);

c = null;
console.log(c);

console.log(typeof null);               // object
console.log(typeof undefined);          // undefined
console.log(typeof 2);


console.log(null == undefined);         // true
console.log(null === undefined);        // fasle

console.log(null == null);              // true
console.log(null === null);             // true
console.log(!null);                     // true
console.log(!!null);                    // fasle
console.log(1 * null);                  // 0
console.log(1 + null);                  // 1
console.log(1 + undefined);             // NaN = not a number