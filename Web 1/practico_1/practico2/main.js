"use strict";

let botonAdd = document.querySelector("#btn").addEventListener("click", cambiar);

//NECESITO QUE CUANDO ESCRIBA ALGO EN EL INPUT ME LO CAMBIE POR EL TÍTULO DE LA PÁGINA
function cambiar() {
    let ingreso = document.querySelector('#nombre').value;
    let nuevo=document.querySelector('#titulo').innerHTML=ingreso;

}


//NECESITO QUE ME CAMBIE DE COLOR LOS TITULOS

let color1= document.querySelector("#rojo").addEventListener('click', cambio1);

function cambio1(){
    document.querySelector("#titulo").classList.add("red");
}
let color2= document.querySelector("#azul").addEventListener('click', cambio2);

function cambio2(){
    document.querySelector("#titulo").classList.add("blue");
}


let color3= document.querySelector("#verde").addEventListener('click', cambio3);

function cambio3(){
    document.querySelector("#titulo").classList.toggle("green");
}

//ARREGLO

let arreglo=["hola","chau","buendia","buenasnoches"];

console.log(arreglo[3]);



//OBJETOS

let objeto={["nombre"="maria",
"apellido"= "Dominguez",
"edad"=15],

["nombre"="mMirta",
"apellido"= "Sanchez",
"edad"=21] ,
}

let manyelements=