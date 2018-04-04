// rray methods 
// unshift and shift to add 
// element in array at start 
let todolist = [];
function remember(task) {
    todolist.push(task);
}
function gettask() {
    return todolist.shift(task);
}
function rememberUrgently(task) {
    return todolist.unshift(task);
}

function removeelement(array1, index) {
    return array1.slice(0, index).concat(array1.slice(index + 1));
}
console.log([1, 2, 3, 4, 5,].indexOf(2));
console.log([1, 2, 3, 4, 5, 3, 4, 5, 6, 7,].lastIndexOf(4));
console.log(removeelement([1, 2, 3, 4, 5], 3)); // 4thindex is removed 

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
console.log("ona two three".indexOf('ee'));
// gives combine word position also 
console.log("  Aniket \n ".trim());
// trims white spaces 

console.log(String(1316).padStart(10, "A"));
// AAAAAA1316 

console.log(String(1316).padEnd(10, "A"));
// 1316AAAAAA

let Str1 = "My Name is Aniket Nigade"
let Str2 = Str1.split(" ");
console.log(Str1);
console.log(Str2);
console.log(Str2.join('.'));
// My.Name.is.Aniket.Nigade
