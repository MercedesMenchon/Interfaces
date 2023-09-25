"use strict";

let n1;
let n2;
operacion();

function operacion(){
    n1= Math.floor((Math.random() * 9) + 1);
    n2= Math.floor((Math.random() * 9) + 1);
    document.querySelector("#numero1").innerHTML=n1;
    document.querySelector("#numero2").innerHTML=n2;
}

let validar = document.querySelector("#btn-validar");
validar.addEventListener("click",validacion);
function validacion(){
    let solucion = n1+n2;
    let suma = document.querySelector(".captcha").value;
        if (suma == solucion){
            document.querySelector("#resultado").innerHTML= "Correcto"; 
            document.querySelector("#btn-enviar").classList.remove("oculto");
         }
         else{
            document.querySelector("#resultado").innerHTML= "Incorrecto es: " + solucion;
            document.querySelector("#refrescar").classList.remove("oculto");
         }
    }


let btn_refrescar = document.querySelector("#refrescar");
btn_refrescar.addEventListener("click", refrescar);
function refrescar(){
    operacion();
    document.querySelector("#resultado").innerHTML= "";
    document.querySelector("#refrescar").classList.add("oculto");
}

let enviar = document.querySelector("#btn-enviar");
enviar.addEventListener("click",solicitarturno);
function solicitarturno(){
    document.querySelector("#final").innerHTML= "Su turno fue registrado satisfactoriamente";
    document.querySelector("#formulario").classList.add("oculto");
}

