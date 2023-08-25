//storing user input to a variable
var nameCheck = document.getElementById('name');
var emailCheck = document.getElementById('email');
var commentCheck = document.getElementById('comment');

//checking if any required feilds are empty and showing an alert accordingly
function formValidate() {
    if(nameCheck.value == '' || emailCheck.value == '' || commentCheck.value == '' ) {
        alert("Field cannot be empty!")
    } else {
        alert("Form Submitted Successfully")
    }
}

//function for meh rating, changes opacity of meh to 1 and of others to 0.5
function meh() {
    if(document.querySelector("#mehRating").style.opacity != "1"){
        document.querySelector("#mehRating").style.opacity = "1";
        document.querySelector("#smileRating").style.opacity = "0.5";
        document.querySelector("#happyRating").style.opacity = "0.5";
    } else {
        document.querySelector("#smileRating").style.opacity = "0.5";
    }
}

//function for smile rating, changes opacity of smile to 1 and of others to 0.5
function smile() {
    if(document.querySelector("#smileRating").style.opacity != "1"){
        document.querySelector("#smileRating").style.opacity = "1";
        document.querySelector("#happyRating").style.opacity = "0.5";
        document.querySelector("#mehRating").style.opacity = "0.5";
    } else {
        document.querySelector("#smileRating").style.opacity = "0.5";
    }

}

//function for happy rating, changes opacity of happy to 1 and of others to 0.5
function happy() {
    if(document.querySelector("#happyRating").style.opacity != "1"){
        document.querySelector("#happyRating").style.opacity = "1";
        document.querySelector("#smileRating").style.opacity = "0.5";
        document.querySelector("#mehRating").style.opacity = "0.5";
    } else {
        document.querySelector("#happyRating").style.opacity = "0.5";
    }

}
