function fight(x,y,z){
    // return (z+z); not define NaN 
       return (x+x); 
}
console.log(fight(12,30));
// online 12 has been taken

function run (x,y){
    if (y === undefined){
        return -x;
    }
    else{
        return x+y;
    }
}

console.log(run ());