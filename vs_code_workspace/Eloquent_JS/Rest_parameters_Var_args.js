// function DynamiclenStr(... a){
//     console.log(a[3]);
// }
// DynamiclenStr(1,2,3,5,6,7,8);
// // 5 

// find max number using var args
function max(...Numbers){
    let MAXNUM = - Infinity;
    for (let i of Numbers){
        if(i > MAXNUM){
            MAXNUM = i;
        }else{
            continue;
        }
    }
    return MAXNUM
}

console.log(max(1,-1,76,67,100,-2,0));
// 100

let Numbers = [-1,-2,-3,-4];
console.log(max(...Numbers));
// -1 

// spread out mechanism
console.log(["Will" ,...Numbers, "Happy"]);
