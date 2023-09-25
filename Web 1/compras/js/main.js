"use strict";

let productos=[];
let precios=[];



let agregarbtn=document.getElementById("btn-agregar");
agregarbtn.addEventListener("click", agregar);

let quitarbtn=document.getElementById("btn-quitar");
quitarbtn.addEventListener("click", quitar);

function agregar(){
    let producto= document.getElementById("articulo").value;
productos.push(producto);

let precioso= document.getElementById("precio").value;
precios.push(parseInt(precioso,10));
console.log("aca");
let mensaje = sumar();

mostrar(mensaje);


}

function sumar(){
    let sum=0;
        for( let i=0; i<precios.length;i++) {
        sum+= precios[i];
        console.log("estoyt");
    }
    return sum;
}

function mostrar (texto){
      let todo=document.getElementById("total");
    todo.innerHTML=texto;
}