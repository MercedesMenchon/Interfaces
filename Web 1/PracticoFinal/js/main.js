"use strict";

function saludar(){
    alert ("Holis!");
}

let btn = document.getElementById("btn-enviar");
btn.addEventListener("click", saludar);

let gracias= document.getElementById("agradecimiento");
gracias.innerHTML="<p> GRAACIAS! <p/>";