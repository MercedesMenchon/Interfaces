"use strict";

let enciende =document.getElementById("btn-prende");
enciende.addEventListener("click", encender);

let apaga=document.getElementById("btn-apaga");
apaga.addEventListener("click", apagar);

apagar();

function encender(){
    // cambio el src de la imagen para que me muestre la lampara prendida
let imagen = document.getElementById("lampara");
imagen.src= "images/luzprendida.jpg"

// Le agrego la clase prendido y le saco la clase apagado

document.querySelector("body").classList.add("prendido");
document.querySelector("body").classList.remove("apagado");

}

function apagar(){
    let imagen = document.getElementById("lampara");
imagen.src= "images/luzapagada.jpg"

// Le agrego la clase prendido y le saco la clase apagado

document.querySelector("body").classList.add("apagado");
document.querySelector("body").classList.remove("prendido");

}