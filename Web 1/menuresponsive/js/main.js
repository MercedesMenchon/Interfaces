"use strict";

let btnmenu =document.querySelector("#btn-menu");
btnmenu.addEventListener("click", abrir);

function abrir(){
    
    let menumovile = document.querySelector(".nav");
    console.log("entre");
    menumovile.classList.toggle("menus");
}