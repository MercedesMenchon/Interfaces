"use strict";
let cantVotosInicial=8250;
document.querySelector(".cant-votos").innerHTML= cantVotosInicial+" votos";

document.querySelector("#btn-comentario").addEventListener("click",addVoto);
function addVoto(){
  cantVotosInicial++;
  document.querySelector(".cant-votos").innerHTML= cantVotosInicial+" votos";
}

