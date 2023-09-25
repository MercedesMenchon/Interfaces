"use strict"
//Defino una variable que sea el boton.
let btn=document.querySelector('#btn-play');
//Defino que se escuche al boton cuando haga click y se use la función jugar
btn.addEventListener('click',jugar);
//defino las opciones que ouede aparecer cuando apreto jugar
let opciones=["piedra", "papel", "tijera"];

//Defino la funcion
function jugar(){
     //Genero un número randomentre 0 y 3, que son las tresopciones que tengo.
     let random = Math.floor(Math.random()*3);

     //Si no lo quiero hacer fijo, existe la opcion .legth que me tira el tamaño del arrelo
     //Entonces puedo adaptar el número del random
     //let random = Math.floor(Math.random()* opciones.legth);
     //defino una nueva variable que tome como opcion, una de las opciones que tengo.

     let opcion=opciones[random]

     //Deermino que dentro deltexto delhtml, este la palabra "tijera" u otra

     document.querySelector('.result').innerHTML = opcion;


     }
