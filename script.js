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
