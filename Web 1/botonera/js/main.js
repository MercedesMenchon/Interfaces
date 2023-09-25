"use strict";

let btn = document.querySelector("#btn");
btn.addEventListener("click",crear);


let div= document.querySelector(".div");


function crear(){
    console.log("entre");
    div.innerHTML+='<div><button class="btn">Crear</button><h3 class="pepito" >Hola Mundo!</h3></div>';

    let nuevosbtn = document.querySelectorAll(".btn");
    for(let i=0;i<nuevosbtn.length;i++){
        nuevosbtn[i].addEventListener("click", function(e){
            let texto = this.nextElementSibling;
            texto.classList.toggle("visible");
        });
    }
}

