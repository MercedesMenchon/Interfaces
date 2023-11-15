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


<<<<<<< Updated upstream
document.addEventListener("DOMContentLoaded", function () {
  iniciarJuego();
  let temporizador = new Temporizador(10);
  temporizador.iniciarTemporizador();

  document.querySelector("#tablero7x6").addEventListener("click", function (e) {
    e.preventDefault();
    const tablero1 = new Tablero(6, 7, 4, canvas, ctx);
    const juego1 = new Juego(tablero1, canvas, ctx, temporizador);

    //selector de ficha
    document.querySelector(".character-selection").classList.toggle("visible");

    // Event listener para el botón Sapo
    document.getElementById("sapoButton").addEventListener("click", function () {
      console.log("Has elegido al sapo");
      document.querySelector(".character-selection").classList.toggle("visible");
      temporizador.reiniciarTemporizador();
      juego1.agregarEventoClic();
    });


    // Event listener para el botón Mosca
    document.getElementById("moscaButton").addEventListener("click", function () {
      document.querySelector(".character-selection").classList.toggle("visible");
      console.log("Has elegido la mosca");
      temporizador.reiniciarTemporizador();
      juego1.agregarEventoClic();
    });

    

    
  });
  this.querySelector("#tablero7x8").addEventListener("click", function (e) {
    const tablero2 = new Tablero(7, 8, 5, canvas, ctx);
    const juego2 = new Juego(tablero2, canvas, ctx, temporizador);
    juego2.agregarEventoClic();
    temporizador.reiniciarTemporizador();
  });
  this.querySelector("#tablero8x8").addEventListener("click", function (e) {
    const tablero3 = new Tablero(8, 8, 6, canvas, ctx);
    const juego3 = new Juego(tablero3, canvas, ctx, temporizador);
    juego3.agregarEventoClic();
    temporizador.reiniciarTemporizador();
  });



=======
document.addEventListener("DOMContentLoaded", function() {
    iniciarJuego();
    temporizador.iniciarTemporizador();

  this.querySelector("#tablero7x6").addEventListener("click", function(e){
    juego1.Iniciar();  
    juego1.agregarEventoClic();
       juego2.setjuegoIniciado(false);
       juego3.setjuegoIniciado(false);
      temporizador.reiniciarTemporizador();
        });
 this.querySelector("#tablero7x8").addEventListener("click", function(e){
  juego2.Iniciar();  
  juego2.agregarEventoClic();
  juego1.setjuegoIniciado(false);
  juego3.setjuegoIniciado(false);
 temporizador.reiniciarTemporizador();
    });
   this.querySelector("#tablero8x8").addEventListener("click", function(e){
    juego1.Iniciar();  
    juego3.agregarEventoClic();
    juego2.setjuegoIniciado(false);
    juego1.setjuegoIniciado(false);
   temporizador.reiniciarTemporizador();
    });
>>>>>>> Stashed changes

});




function iniciarJuego() {
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0, anchoCanvas, altoCanvas);
  };
  img.src = "Images\\4 en linea\\4enlineaAgua.jpg";
}







