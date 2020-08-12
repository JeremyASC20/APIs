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

    if (textbox.value == "BLM" || textbox.value == "discrimination" || textbox.value == "blm" || textbox.value == "Discrimination" || textbox.value == "hate" || textbox.value == "racism" || textbox.value == "Racism" || textbox.value == "Inequality" || textbox.value == "inequality" || textbox.value == "police") {
        textbox.value = "";
        window.open("/Discrimination/index.html", '_blank');
    }
    else if (textbox.value == "Global warming" || textbox.value == "Global Warming" || textbox.value == "global warming" || textbox.value == "GLOBAL WARMING" || textbox.value == "sea level" || textbox.value == "Sea Level" || textbox.value == "Sea level" || textbox.value == "SEA LEVEL" || textbox.value == "temperature" || textbox.value == "Temperature" || textbox.value == "global" || textbox.value == "Global" || textbox.value == "Environmental" || textbox.value == "environmental") {
        textbox.value = "";
        window.open("/Environmental/index.html", "_blank");
    }
    else if (textbox.value == "covid" || textbox.value == "COVID" || textbox.value == "Covid" || textbox.value == "covid-19" || textbox.value == "Covid-19" || textbox.value == "COVID-19" || textbox.value == "pandemic" || textbox.value == "Pandemic" || textbox.value == "virus" || textbox.value == "Virus" || textbox.value == "coronavirus" || textbox.value == "Coronavirus" || textbox.value == "CORONAVIRUS") {
        textbox.value = "";
        window.open("/Global_Pandemic/index.html", "_blank");
    }
    else if (textbox.value == "current" || textbox.value == "Current" || textbox.value == "CURRENT" || textbox.value == "Lebanon" || textbox.value == "lebanon" || textbox.value == "LEBANON" || textbox.value == "events" || textbox.value == "EVENTS" || textbox.value == "Events" || textbox.value == "world") {
        textbox.value = "";
        window.open("/Current/index.html", "_blank");
    }
    else if (textbox.value == "petition" || textbox.value == "Petition" || textbox.value == "PETITION" || textbox.value == "goals" || textbox.value == "Goals" || textbox.value == "goal" || textbox.value == "Goal"){
        textbox.value = "";
        window.open("/goal/index.html", "_blank");
    }
    else {
        textbox.value = "Try a different word!"
    }
}