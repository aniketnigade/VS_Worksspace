// serialize the data. That means it is converted into a
// flat description. A popular serialization format is called JSON (pronounced
// “Jason”), which stands for JavaScript Object Notation. It is widely used as a
// data storage and communication format on the Web, even in languages other
// than JavaScript.
/*  acts as persistant object
{
    "Squrriesl":false,
    "events" : ["Work" , "touched tree" , "pizza", "running"]
 }

 e functions JSON.stringify and JSON.parse to convert
data to and from this format. The first takes a JavaScript value and returns
a JSON-encoded string. The second takes such a string and converts it to the
value it encodes
*/
let string = JSON.stringify({
    squirrel: false,
    events: ["weekend"]
});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
    // → ["weekend"]
