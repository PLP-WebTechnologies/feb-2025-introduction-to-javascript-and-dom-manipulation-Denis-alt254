document.getElementById("myButton").onclick = function() {
    document.getElementById("myText").innerHTML = "Hello World!";
    document.getElementById("myText2").innerHTML = "Hello World!";
    document.getElementById("myText3").innerHTML = "Hello World!";
    document.getElementById("myText4").innerHTML = "Hello World!";
    document.getElementById("myText5").innerHTML = "Hello World!";
    document.getElementById("myText6").innerHTML = "Hello World!";
}

document.getElementById("myButton2").addEventListener("click", function() {
    document.getElementById("myText5").innerHTML = "You clicked the button!";
});
document.getElementById("myButton2").addEventListener("click", function() {
    document.getElementById("myText5").style.color = "blue";
});

document.getElementById("myButton3").addEventListener("click", function() {
    document.getElementById("myText6").innerHTML = "You clicked the button!";
});
document.getElementById("myButton3").addEventListener("click", function() {
    document.getElementById("myText6").style.color = "red";
});