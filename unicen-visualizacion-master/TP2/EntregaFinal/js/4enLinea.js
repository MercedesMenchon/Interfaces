"use strict";



let cantVotosInicial=8250;
document.querySelector(".cant-votos").innerHTML= cantVotosInicial+" votos";

document.querySelector("#btn-comentario").addEventListener("click",addVoto);
function addVoto(){
  cantVotosInicial++;
  document.querySelector(".cant-votos").innerHTML= cantVotosInicial+" votos";
}



let comentariosViejos=[{
  "usuario":"Mauro",
  "comentario": "que buen juego!"
},
{
  "usuario":"Mauro",
  "comentario": "que buen juego!"
},
{
  "usuario":"Mauro",
  "comentario": "que buen juego!"
},
{
  "usuario":"Mauro",
  "comentario": "que buen juego!"
},
{
  "usuario":"Mauro",
  "comentario": "que buen juego!"
},
];
function showComentarios(){
  let lista = "";
  for(let i=0; i<comentariosViejos.length;i++) {
lista += "<h3>" + comentariosViejos[i].usuario + "</h3> <p>" + comentariosViejos[i].comentario + "</p>"
  }
  
document.querySelector(".listaComentarios").innerHTML = lista;


}
showComentarios();



document.querySelector("#btn-comentar").addEventListener("click",addComentario);

function addComentario(){
  if(!document.querySelector("#comentario").empty){
  let comentario = document.querySelector("#comentario").value;
  let nuevoComentario={
    "usuario":"Laura",
    "comentario":comentario
  }
  comentariosViejos.push(nuevoComentario);
   document.querySelector("#comentario").value="";
  showComentarios();
}
}