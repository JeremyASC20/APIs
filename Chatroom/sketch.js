let logo = document.getElementById("homelogo");

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