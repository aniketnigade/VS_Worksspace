function RamdomPOintOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    };
}

console.log(RamdomPOintOnCircle(10));
console.log("Random Number always fractional less than 1 ->");
console.log(Math.random());
console.log("Random Number ->");
console.log(Math.floor(Math.random()*10));
