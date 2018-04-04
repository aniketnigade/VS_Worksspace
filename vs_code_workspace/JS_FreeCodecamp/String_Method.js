// 20 String methods

var stringOne = "freCodeCamp is the best place to learn" ;
var stringTwo = "frontend and backend development" ;

// charAt()
    console.log(stringOne.charAt(1));

// charCodeAt()
    console.log(stringOne.charCodeAt(19)); // "b unicode"

// concat()
    console.log(stringOne.concat(" " + stringTwo));

// endsWith()
    console.log(stringOne.endsWith("arn"));
    console.log(stringOne.endsWith("baba"));

//fromCharCode()
    console.log(String.fromCharCode(98)); // gives charater of given code
    
// includes()
    console.log(stringOne.includes("freC")); // finds substr is present or not

// indexOf()
    console.log(stringOne.indexOf("b"));

// lastindexOf()
    console.log(stringOne.lastIndexOf("e")); // gives last occurence of given char 

// match()
    console.log(stringTwo.match(/end/g)); // finds sring is present or not and displays as array output times 

// repeat()
    console.log(stringOne.repeat(4)); // repeats the output
    
// replace()
    console.log(stringTwo.replace(/end/g , "END")) // regular expression to change str with reqirements

//search() // if exact matching word finds then returns start char index 
    console.log(stringTwo.search("rnt"));
    console.log(stringTwo.search("and"));

// slice()
    console.log(stringTwo.slice(4,13)); // takes this range and displays 

// splite()
    console.log(stringOne.split(" ")); // split on which basis

// startswith()
    console.log(stringTwo.startsWith("fr")); // starting string

// substr()
    console.log(stringTwo.substr(12,3)); // (start,len)

//substring()
    console.log(stringTwo.substring(1,3)); // (strt,end-1)

// touppercase()
    console.log(stringOne.toUpperCase());

// tolowercase()
    console.log(stringOne.toLowerCase());

// trim()   
    var name = "    MY NAME IS ANIKET ...   "; 
    console.log(name.trim()); // removes space at start and end