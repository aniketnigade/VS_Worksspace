// Excercise 1
// 1. print # triangle pattern fastest way
var line = '#';
for (line; line.length < 8; line += "#")
  console.log(line);

// 2. Print chess board balck and white based output
/*
# # # # 
 # # # 
# # # #
*/

for(let i = 0 ; i < 8 ; i++){
    for(let j= 0 ; j < 8 ; j++){
        if(i%2 == 0){
            process.stdout.write("#");
            process.stdout.write(" ");
        }
        else {
            process.stdout.write(" ");
            process.stdout.write("#");
        }
    }
    console.log("");
}

// var size = 4 ;
// var board;
// for (let y = 0; y < size; y++) {
//     for (let x = 0; x < size; x++) {
//       if ((x + y) % 2 == 0) {
//         board += " ";
//       } else {
//         board += "#";
//       }
//     }
//     board += "\n";
// }