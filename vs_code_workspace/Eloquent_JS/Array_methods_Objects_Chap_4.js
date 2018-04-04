var a = [1, 2, 3, 4];
console.log(a[3]);
// console.log(undefined.length);
// ndefined and null dont support such property

var str = "AniketNigade";
// function
console.log(typeof str.toLowerCase());
console.log(str.toUpperCase());

// push and pop works as stack
a.push(5); // supports sarguments
a.push(6);
console.log(a);
a.pop(); // does't support argument
a.pop();
console.log(a);

// jack converts into squreal ,has to
// maintain some log of conversion 
// time , location , converted or not 
// wolf or squrrel converison

var day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"],
};

console.log(day1.squirrel);
console.log(day1.events[1]);
day1.wolf = false;
console.log(day1.wolf);

var newobj = {
    index: 1,
    "Name": "Aniket",
};
console.log(newobj.Name);
// how to delete some object
delete newobj.index;
console.log(newobj);
// check whether deleted or not 
console.log("index" in newobj); // new syntax
// to find properties of object
console.log(Object.keys(day1));

// we can directally assign block values or one object properties  to old object
Object.assign(newobj, day1);
console.log(newobj);
console.log(typeof newobj); // objetcs
console.log(typeof a); // array are also objects
console.log("###################################")
// how to create array of objects
var Array_Obj = [
    {
        Name : ["Aniket" , "Abhijeet" , "Akshay"],
        age :  [1,2,3],
        weight : [12,21,34]    
    },
    {
        Name : ["Anu" , "Abhi" , "Akii"],
        age :  [21,21,23],
        weight : [33,54,78]
    }
]
console.log(Array_Obj);
console.log("###################################");
console.log(Array_Obj[1]);
console.log("###################################");
console.log(Array_Obj[0]);
////////////////////////////////////
console.log("The lycanthrope's log");
let journal = [];
function addentry(events , squirrel){
    journal.push({events , squirrel});
}
// also called as shorthand operator 
addentry(["work", "touched tree", "pizza", "running","television"], false);
addentry(["work", "ice cream", "cauliflower", "lasagna","touched tree", "brushed teeth"], false);
addentry(["weekend", "cycling", "break", "peanuts","beer"], true);
