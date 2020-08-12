let logo = document.getElementById("homelogo");
let BLM = document.getElementById("BLM");
let Environment = document.getElementById("environment");
let COVID = document.getElementById("COVID");
let current = document.getElementById("current");

logo.onmouseover = function() {
    logo.style.width = "75px"
    logo.style.height = "75px"
    logo.style.opacity = ".7"
}

logo.onmouseout = function() {
    logo.style.width = "50px"
    logo.style.height = "50px"
    logo.style.opacity = "1"
}

BLM.onmouseover = function() {
    BLM.style.width = "350px";
    BLM.style.opacity = "0.5";
}

BLM.onmouseout= function() {
    BLM.style.width = "300px";
    BLM.style.opacity = "1";
}

Environment.onmouseover = function() {
    Environment.style.width = "650px";
    Environment.style.opacity = "0.5";
}

Environment.onmouseout= function() {
    Environment.style.width = "600px";
    Environment.style.opacity = "1";
}

COVID.onmouseover = function() {
    COVID.style.width = "650px";
    COVID.style.opacity = "0.5";
}

COVID.onmouseout= function() {
    COVID.style.width = "600px";
    COVID.style.opacity = "1";
}

current.onmouseover = function() {
    current.style.width = "650px";
    current.style.opacity = "0.5";
}

current.onmouseout= function() {
    current.style.width = "600px";
    current.style.opacity = "1";
}
