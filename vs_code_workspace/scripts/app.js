var app = angular.module("angularApp",['ngSanitize']); //angularjs module as directory

function onLoad()
{
    // alert("onLoad() external is called ");
    // document.getElementById("timestamp").innerHTML = Date() ;
    getAPIBadge();
}

function checkNumber()
{
    var theNumber,theMessage;
    theNumber = document.getElementById("smallnumber").value;
    //if number is invalid then throw msg
    if (isNaN(theNumber) || theNumber < 1 || theNumber > 10){
        theMessage = "Number should be inbetween 1 and 10 "; 
    }else{
        theMessage = "Correct Data";
    }

    document.getElementById("numberMessage").innerHTML = theMessage;
}

function getAPIBadge()
{
    var ctcAPI = "http://ChooseToCodeAPI.azurewebsites.net/api/values" ;
    $.post (ctcApi , {
        SchoolName : "Joe's choose to code" , 
        zipcode : "411027" , 
        Level : "Pro" 
    }).done(function (data) {
        $ ("#badge").html(data);
    });
}