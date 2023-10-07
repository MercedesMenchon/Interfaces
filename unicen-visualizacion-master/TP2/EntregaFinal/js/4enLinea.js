"use strict";



let cantVotosInicial=8250;
document.querySelector(".cant-votos").innerHTML= cantVotosInicial+" votos";

document.querySelector("#btn-comentario").addEventListener("click",addVoto);
function addVoto(){
  cantVotosInicial++;
  document.querySelector(".cant-votos").innerHTML= cantVotosInicial+" votos";
}



let comentariosViejos=[{
  "usuario":"Coquito.LOL",
  "comentario": "cansado de ganar... Quiero un rival de verdad!"
},
{
  "usuario":"Jazmin003",
  "comentario": "Me encanto el juego! Pude jugar con mi hija y me ganooo! La próxima gano yo!el sapo que se coma a la moscaaa!!!"
},
{
  "usuario":"RayoTormentoso",
  "comentario": "Odioo este juegooo!!! Siempre pierdooo :("
},
{
  "usuario":"PioPajarito",
  "comentario": "No paro de ganar! Me encanta ser el sapo que se come a la mosca! ¿Alguien con ganas de jugar y perdeer?"
},
{
  "usuario":"elToro",
  "comentario": "Que gran juego! Me encanta jugarlo con mis nietos y compartir tiempo!"
},
{
  "usuario":"MonicaMama",
  "comentario": "Que divertiiido! Cuando era chica yo tenia el San Remo de este juego!°, que bueno que ahora puedo jugar con esta version porque perdí todas las fichas!"
},
{
  "usuario":"JimenaTeGana",
  "comentario": "Le hice honor a mi nombre, KIERO ESTAR EN EL POOODIOOO! "
},
{
  "usuario":"SoyYo",
  "comentario": "Perdí varias veces, pero ya entendí como ganaaar!! Que facíl se me hace ahoraaa, QUIERO EL 5 EN"
},
];
function showComentarios(){
  let lista = "";
  for(let i=comentariosViejos.length-1; i>=0;i--) {
lista += "<div> <h3>" + comentariosViejos[i].usuario + "</h3> <p>" + comentariosViejos[i].comentario + "</p> </div>"
  }
  
document.querySelector(".listaComentarios").innerHTML = lista;


}
showComentarios();



document.querySelector("#btn-comentar").addEventListener("click",addComentario);

function addComentario(){
 
  let comentario = document.querySelector("#comentario").value;
  if(comentario.length > 2 && comentario.length<201){
  let nuevoComentario={
    "usuario":"Laura",
    "comentario":comentario
  }
  comentariosViejos.push(nuevoComentario);
   document.querySelector("#comentario").value="";
  showComentarios();
}
}
