"use strict"

let boton1= document.querySelector('#btn-1').addEventListener('click', function(e){
    sumar();
    document.querySelector('#contador-1').innerHTML=inicio;
});

let boton2= document.querySelector('#btn-2').addEventListener('click',function(e){
    sumar();
    document.querySelector('#contador-2').innerHTML=inicio;
});

let boton3= document.querySelector('#btn-3').addEventListener('click', function(e){
    sumar();
    document.querySelector('#contador-3').innerHTML=inicio;
});



let inicio = 0;

function sumar(){
    inicio = inicio + 1;
   
}


//Cambiar color

document.querySelector('#color').addEventListener('click', colorear);


function colorear(){
   let lista=  document.querySelectorAll(".titulo");
   lista.forEach(function(item){
       console.log(item);
    item.classList.toggle("blue");
   })
}


