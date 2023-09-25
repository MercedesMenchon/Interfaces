"use strict";

let tirar= document.getElementById("btn-tira");
tirar.addEventListener("click", tirardados);


function tirarundado(dado){
    let dadox= document.getElementById(dado);
    let d= Math.floor((Math.random()*6)+1);
    dadox.src="images/dado" + d +".png"; 
    return d   
}

function sumarresultados(x,y){
    let resultado= document.getElementById("result");
    let sum= x+y;
    resultado.innerHTML=sum;
    return sum
   }
 
function mostrarmensaje(sum, condicion){
    if(sum == condicion){
        let mensaje = document.getElementById("ganador");
        mensaje.innerHTML="Ganaste!";
            }
}
function tirardados(){
let mensaje = document.getElementById("ganador");
mensaje.innerHTML="";
let n1 = tirarundado("dado1");
let n2= tirarundado("dado2");
let sum = sumarresultados(n1,n2);
mostrarmensaje(sum,8);

    }




