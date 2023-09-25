"use strict";

let btnagregar= document.querySelector("#agregar");
btnagregar.addEventListener("click", agregar);

let btnvaciar= document.querySelector("#vaciar");
btnvaciar.addEventListener("click", vaciar);

let btnborrarultimo = document.querySelector("#del-ult");
btnborrarultimo.addEventListener("click",borrarultimo);

let btnsortear= document.querySelector("#sortear");
btnsortear.addEventListener("click",sortear);

let lista=[];

function agregar(){
let nuevo = document.querySelector("#nombre").value;
lista.push(nuevo);
mostrar();
}

function vaciar(){
     lista=[];
mostrar();
}

function borrarultimo(){

    lista.pop();
    mostrar();
}

function sortear(){
    let pos = Math.floor(Math.random() * lista.length );
    let ganador = lista[pos];
    document.querySelector(".ganador").innerHTML="El ganador es" + ganador;

}

function mostrar(){

   let list= document.querySelector(".listado");
   list.innerHTML="";
   for(let i=0; i<lista.length;i++){
    list.innerHTML+= "<li>"+ lista[i] + "</li>";
   }
}