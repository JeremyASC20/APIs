let nav = document.getElementsByClassName("nav");

for (let i = 0; i < nav.length; i++) {
    nav[i].onmouseover = function() {
        nav[i].style.color = "red";
        nav[i].style.fontSize = "25px";
    }
    nav[i].onmouseout = function() {
        nav[i].style.color = "black";
        nav[i].style.fontSize = "15px";
    }
}

let textbox = document.getElementById("user_text");
let clickButton = document.querySelector("button");

clickButton.onclick = function(event) {
    event.preventDefault();
    let userInput = textbox.value;

    if (textbox.value == "BLM" || textbox.value == "discrimination" || textbox.value == "blm" || textbox.value == "Discrimination" ) {
        window.open("/Discrimination/index.html", '_blank');
    }
}