const countBs = function (str){
    var count = 0;
    for (let i = 0 ; i < str.length ; i++){
        var check = str[i];
        if (check=="B"){
            count++;
        }
    }
    return count;
}
var str = "BBbb";
console.log("Char B count is : " + countBs(str));

const countChar = function (str1,char1){
    var count1 = 0;
    for (let i = 0 ; i < str1.length ; i++){
        var check1 = str1[i];
        if (check1==char1){
            count1++;
        }
    }
    return count1;
}
var str1 = "ABCDEABCDEABCdeabcd";
var char1 = "A";
console.log("Char "+ char1 + "count is " + countChar(str1,char1));    