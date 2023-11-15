"Use strict";

let canvas = document.getElementById('tablero');
let ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 600;
let anchoCanvas = canvas.width;
let altoCanvas = canvas.height;
let temporizador = new Temporizador(10);
const tablero1= new Tablero(6,7,4, canvas, ctx);
const juego1 = new Juego(tablero1,canvas, ctx,temporizador);

const tablero2 = new Tablero(7,8,5, canvas, ctx);
 const juego2= new Juego(tablero2,canvas, ctx,temporizador);

const tablero3 = new Tablero(8,8,6, canvas, ctx);
const juego3 = new Juego(tablero3,canvas, ctx,temporizador);


document.addEventListener("DOMContentLoaded", function() {
    iniciarJuego();
    temporizador.iniciarTemporizador();
let personajeJugador1 = null;
  document.querySelector("#tablero7x6").addEventListener("click", function(e){

    document.querySelector(".character-selection").classList.toggle("visible");

    document.getElementById("sapoButton").addEventListener("click", function () {
      console.log("Has elegido al sapo");
      personajeJugador1 = "sapo";
      document.querySelector(".character-selection").classList.toggle("visible");
    });

    // Event listener para el botón Mosca
    document.getElementById("moscaButton").addEventListener("click", function () {
      document.querySelector(".character-selection").classList.toggle("visible");
      personajeJugador1 = "mosca";
      console.log("Has elegido la mosca");
  
    });

  
    // e.preventDefault();
    juego1.Iniciar(personajeJugador1);  
    juego2.apagarJuego();
    juego3.apagarJuego();
      temporizador.reiniciarTemporizador();
       //selector de ficha
  
        });
document.querySelector("#tablero7x8").addEventListener("click", function(e){
  juego2.Iniciar();  
  juego1.apagarJuego();
  juego3.apagarJuego();
 temporizador.reiniciarTemporizador();
    });
  document.querySelector("#tablero8x8").addEventListener("click", function(e){
    juego1.Iniciar();  
    juego2.apagarJuego();
    juego1.apagarJuego();
   temporizador.reiniciarTemporizador();
    });

});




function iniciarJuego() {
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0, anchoCanvas, altoCanvas);
  };
  img.src = "Images\\4 en linea\\4enlineaAgua.jpg";
}







