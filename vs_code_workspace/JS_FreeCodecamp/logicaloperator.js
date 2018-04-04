function cheking(name1){
    name1 = name1 || "shruti";
    console.log("name is " + name1);
}
cheking(); // if we pass null it will cosider or element data
cheking("aniket"); // aniket

function cheking1(name1){
    name1 = name1 && "shruti";
    console.log("name is " + name1);
}
cheking1(); // if we pass null it will cosider or element data
cheking1("aniket"); // false answer then consider shruti
