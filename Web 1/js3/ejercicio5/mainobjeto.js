"use strict"
let equipo = {
    "nombre": "Barcelona FC",
    "puntos": 98,
    "pj": 35,
    "pg": 32,
    "pe": 2,
    "pp": 1
}
console.log(equipo);

console.log(equipo.pg);
console.log(equipo.pj);

console.log(equipo);


//CONTADOR DE PARRAFOS

document.querySelector('#btn-p').addEventListener('click',contar);

function contar(){

let parrafos = document.querySelectorAll('p');
console.log(parrafos);
let cantidad = parrafos.length;
document.querySelector('#cant-parrafos').innerHTML=cantidad;
}

// CONTADOR DE ITEMS

document.querySelector('#btn-p').addEventListener('click', calcular);


function calcular(){
    let lista = document.getElementsByClassName("lista-menu");
    let cantlista= lista.length;
    document.querySelector('#cant-items')= cantlista;
}

