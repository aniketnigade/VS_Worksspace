let object1 = {index : 10};
let object2 = object1;
let object3 = {index : 10};

console.log(object1==object1); // true
console.log(object1==object3); // false

object1.index = 21;
console.log(object2); // reflects on obj2 due to 
// obj2 = obj1 
// 21
object2.index = 23;
console.log(object2); // updated
// 23 
console.log(object1); // updated
//23 -- unfortunatley obj1 also changed 
//true only if both objects are precisely the same value. Comparing different
// objects will return false, even
// if they have identical properties. 
