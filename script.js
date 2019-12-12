///generate random password////
var button1 = document.querySelector("#onclick")
var button2 = document.querySelector("#onclick2")

function generate() {
    let complexity = document.getElementById("number2").value;
    button1.textContent = onclick;

    var length = 50,

    ////password vlaues that are used/////
    
     var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*","(",")","_","+","1","2","3","4","5","6","7","8","9","0"];

     var password = "";
    
    ///create a for loop for password characters//////

    for(var i = 0; i <= complexity; i++){
        password += password + letters.charAt(Math.floor(Math.random * Math.floor(letters.length -1)));
    }
return password;

    
}
    ///add text to the display////
    document.getElementById("dotted").value = password;


button1.addEventListener("onclick", function() {
    generate();
    
})
    

