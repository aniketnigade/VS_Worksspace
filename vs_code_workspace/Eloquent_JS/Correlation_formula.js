/*
Correlation is a measure of dependence between statistical variables. A statistical
variable is not quite the same as a programming variable. In statistics
you typically have a set of measurements, and each variable is measured for
every measurement.
*/

// φ = (n11n00 − n10n01)/ sqrt (n1•n0•n•1n•0)
// function phi(table) {
//     return (table[3] * table[0] - table[2] * table[1]) /
//         Math.sqrt((table[2] + table[3]) *
//             (table[0] + table[1]) *
//             (table[1] + table[3]) *
//             (table[0] + table[2]));
// }
// console.log(phi([76, 9, 4, 1]));
// // 0.0685994
// console.log("The lycanthrope's log");

// also called as shorthand operator 
// addentry(["work", "touched tree", "pizza", "running","television"], false);
// addentry(["work", "ice cream", "cauliflower", "lasagna","touched tree", "brushed teeth"], false);
// addentry(["weekend", "cycling", "break", "peanuts","beer"], true);
// function addentry(events, squirrel) {
//     journal.push({ events, squirrel });
// }

// var day1 = {
//     squirrel: false,
//     events: ["work", "touched tree", "pizza", "running"],
// };

// tough topic ...feeling so sad 
function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}
let journal = [];

console.log(tableFor("pizza",JOUNAL);
