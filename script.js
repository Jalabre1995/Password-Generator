///generate random password////


var Question = confirm("Uppercse and Lowercase letters are allowed.And use at least two characters in your password.");

function generate() {
    
    let complexity = document.getElementById("slider").value;

    ////Possible Password values////
    let letters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678910!@#$%^&*()_+=");

    let password = "";
    ///create a for loop for password characters/////
    for(var i = 0; i <= complexity; i++){
        password = password + letters.charAt(Math.floor(Math.random() * Math.floor(letters.length -1)));
    }

    document.getElementById("dotted").value = password;


    document.getElementById("LastNums").innerHTML += password + "<br />";
}
    ////set the default length to 25////

    document.getElementById("length").innerHTML = "length: 25";

    function copy() {
        var copyText = document.getElementById("copy");
        copyText.select();
        copyText.setSelectionRange(0,25)
        document.execCommand(onclick="copy");
        alert("Text Copied" +copyText.value);

    }


