"use strict";



let btnenviar = document.querySelector("#btnenviar");
btnenviar.addEventListener("click", agregar);

let estudiantes=[];

function agregar(){
    let nombre= document.querySelector("#nombre").value;
    let edad= document.querySelector("#edad").value;
console.log("entre");
let nuevoest={
    nombre:nombre,
    edad: edad
}

estudiantes.push(nuevoest);
console.log(estudiantes);
mostrar();

}

function mostrar(){
let tablita= document.querySelector("#tabla");
tablita.innerHTML=" ";
for (let i=0;i<estudiantes.length;i++){
   tablita.innerHTML+= "<tr><td>"+ estudiantes[i].nombre + "</td>"+"<td>"+ estudiantes[i].edad + "</td></tr>";
}

}