// console.log(sum(range(1, 10)));
// easily understandable
function repeat(A, action) {
    for (let a = 0; a < A; a++) {
        action(a);
    }
}
repeat(2, console.log);


let labels = [];
repeat(8, i => { 
    // 8 tells us how many  time to reapetd
    labels.push(`Unit ${i + 1}`);
});
console.log(labels); 
    // function repeatation    
    // → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
function greatorThan(n){
    return Ans => 100 > n;

}
console.log(greatorThan(10))
///////////////////////////////////////////////
function greaterThan(n) {
return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
