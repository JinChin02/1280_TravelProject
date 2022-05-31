var emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
var submit = document.getElementById("submit");
var emailInput = document.getElementById("email");
var fnameInput = document.getElementById("fname");
var lnameInput = document.getElementById("lname");
var destinationInput = document.getElementById("destination");
var feedbackInput = document.getElementById("feedback");

function savingFeedback(){
    try{
        if(!emailRegex.test(emailInput.value) || emailInput.value == "") throw "Please Input A Valid Email";
        if(fnameInput.value == "") throw "Please Input Your First Name";
        if(lnameInput.value == "") throw "Please Input Your Last Name";
        if(destinationInput.value == "none") throw "Please Select A Destination";
        if(feedbackInput.value == "") throw "Please Leave Your Feedback";
        alert("We have received your feedback and will reply you via email as soon as possible");
    }
    catch(e){
        alert(e);
    }
}

submit.onclick = function(){savingFeedback();};
