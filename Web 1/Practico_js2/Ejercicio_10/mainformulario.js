"use strict"

console.log("anda");

document.querySelector('#btn-comentar').addEventListener('click',agregar);


let opiniones = [];
let list = "";

function agregar(){
    let ingreso = document.querySelector('#comentario').value; 
    console.log(ingreso);
    opiniones.push(ingreso);
console.log(opiniones);
    list = document.querySelector("#comentarios").innerHTML= list +  "<li>" + ingreso +"</li>";
}

