const half = function (a) { // called as function binding longer way
    return a / 2;
}
let a = 100;
console.log(half(a));


//cannot write method below var decalration or any else when
// we write const method then its always top ..on any code
// 
const hummus = function (factor) { 
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(ingredientAmount + " " + unit+ " " + name);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
}; // block based concept

console.log(hummus(10)); // inner function dont need to call 

/*  art of passing function binding to another function
let launchMissiles = function () {
    missileSystem.launch("now");
};
if (safeMode) {
    launchMissiles = function () 
    {
        // Do nothing 
    };
}
*/

