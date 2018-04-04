// Aray

var array1 = ["1", 1, "aniket", "@@", 12,];
console.log(array1);
console.log(array1[2]);

var array2 = [["1", "one", "two"], 1, ["aniket", "@@"], ["family", "first", "friends"], 12];
console.log(array2);

console.log(array2[0][2][2]);
console.log(array2[2][1][1]);
// zeroth row - first coloumn - 2nd char in first column word

// manipulate array [updates its value]
array2[2][1] = "123";
console.log(array2); // @@ = > 123n

array2.forEach(function (element) {  // prints all element one by one 
    console.log(element);
});

