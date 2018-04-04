// common array methods

var a = ["a", "b", "c"];

a.push("d");
console.log(a); // add at end

console.log(a.pop());  // deletes from end
console.log(a);

var b = ["g", "q"];
console.log(a.concat(b)); // together display a+b temporary
console.log(b);

console.log(a.join("!")); // joins all item with ! in between them

console.log(a.reverse()); // reverse permanantly
console.log(a);

console.log(a.shift()); // removes first element display
console.log(a); // permanantly

console.log(a.unshift()); // how much remaining
console.log(a.unshift("e")); // add at start
console.log(a);

console.log(a.slice(0, 2)); // take 0 ,1 only
console.log(a.slice(1, 2));

a.push("d");
a.push("c");
a.push("g");
a.push("a");

a.sort(a); // also sorts
a.sort(b);
console.log(b);
// console.log(a.sort()); // permamntly sort by ascending
console.log(a);

console.log(a.splice(1,4)); // displays element starting to end index
console.log(a); // permanantly changed
console.log(a.splice(0,3,"z"));
console.log(a); // deleted all and aded only z
