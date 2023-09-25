"use strict"

//Event listener
document.querySelector('#btn-agregar').addEventListener('click',agregar);
document.querySelector('#btn-reset').addEventListener('click',reset);
document.querySelector('#btn-borrarultimo').addEventListener('click',borrarultimo);
document.querySelector('#btn-sortear').addEventListener('click',sortear);

//Para definir la funcion agregar, tengo que determinar un arreglo donde le meto el contenido
let nombres=[];

function agregar(){
let input=document.querySelector('#nombre')
let nombre =input.value;
//Agrego usando la opcion con .push
nombres.push(nombre);
console.log(nombres);

//Muestro la lista de nombres que van agregando
mostrar();

//quiero vaciar el input
//SIEMPRE QUE ES INPUT TENGO QUE PONER VALUE, SINO ES EL INNERHTML
input.value=""

}

function mostrar(){
    let lista= document.querySelector('.listado');
    //primero borro cualquier cosa que tenga
    lista.innerHTML=" "

    //ahora quiero imprimir la lista, para eso tengo que repetirla, uso el for each
    for(let elementoActual of nombres){
        lista.innerHTML += "<li>" + elementoActual + "</li>";

    }
    
}

function reset(){
    //Tengo que agarrar el arreglo y declararlo vacio, sino queda la info en js y l usuario no lo ve y estaria maaal
    nombres=[];
    //Hay que hacer que no se vea mas la lista
    mostrar();
}

function borrarultimo(){
// Existe el .pop que elimina el ultimo elemento
nombres.pop();
mostrar();
}

function sortear(){
let random = Math.floor(Math.random()*nombres.length);
console.log(random);
document.querySelector('#results').innerHTML=nombres[random];


}

console.log("conectado");