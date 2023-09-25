"use strict"

document.querySelector('#suma').addEventListener('click',sumaruno);
document.querySelector('#resta').addEventListener('click',restaruno);
document.querySelector('#agregar').addEventListener('click',agregar);


//Almaceno aparte la cantidad de pasos
let totalpasos = 0;


function sumaruno() {
    totalpasos= totalpasos + 1;
    document.querySelector('#pasos').innerHTML= totalpasos; 
}

function restaruno(){
    totalpasos -= 1;
    document.querySelector('#pasos').innerHTML = totalpasos;

}

function agregar(){
    let input = document.querySelector('#inputpasos').value;
    
    // lO CONCATENA PQ LOS INPUT SON STRING, entonces hayq ue cambarla a number para poder sumar
    //para eso unso el parseInt()
    //para pasar a numero, podemos poner Number()
    totalpasos += parseInt(input);
    document.querySelector('#pasos').innerHTML = totalpasos; 
}


 