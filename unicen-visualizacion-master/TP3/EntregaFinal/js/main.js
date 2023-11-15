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
let personajeJugador1 =null;


document.querySelector(".character-selection").classList.toggle("visible");
 

 document.getElementById("sapoButton").addEventListener("click", function () {
    console.log("Has elegido al sapo");
    personajeJugador1 = "sapo";
    // Desactivar la clase clickeado en el botón Mosca
    document.getElementById("moscaButton").classList.remove("clickeado");
    this.classList.toggle("clickeado");
  //  document.querySelector(".character-selection").classList.toggle("visible");
    console.log(personajeJugador1);
  });

  // Event listener para el botón Mosca
  document.getElementById("moscaButton").addEventListener("click", function () {
   // document.querySelector(".character-selection").classList.toggle("visible");
    personajeJugador1 = "mosca";
       // Desactivar la clase clickeado en el botón Sapo
       document.getElementById("sapoButton").classList.remove("clickeado");
    this.classList.toggle("clickeado");
    console.log("Has elegido la mosca");
 console.log(personajeJugador1);
  });
 

document.querySelector("#tablero7x6").addEventListener("click", function(e){
  if(personajeJugador1!= null){
  // e.preventDefault();
  seleccionarBotonJuego()
  document.querySelector(".character-selection").classList.toggle("visible");
  juego1.Iniciar(personajeJugador1);  
  juego2.apagarJuego();
  juego3.apagarJuego();
  temporizador.iniciarTemporizador();
       //selector de ficha
  }
      });
document.querySelector("#tablero7x8").addEventListener("click", function(e){
  if(personajeJugador1!= null){
  seleccionarBotonJuego();
  document.querySelector(".character-selection").classList.toggle("visible");
  juego2.Iniciar(personajeJugador1);  
juego1.apagarJuego();
juego3.apagarJuego();
temporizador.iniciarTemporizador();
  }
  });
document.querySelector("#tablero8x8").addEventListener("click", function(e){
  if(personajeJugador1!= null){
  seleccionarBotonJuego(personajeJugador1);
  document.querySelector(".character-selection").classList.toggle("visible");
  juego1.Iniciar();  
  juego2.apagarJuego();
  juego1.apagarJuego();
  temporizador.iniciarTemporizador();
  }
  });

});


function elegirPersonaje(){
  
  return personajeJugador1;
}


function seleccionarBotonJuego(){
  let botonesDeJuego= document.querySelectorAll(".btn-4enlinea");
for(i=0;i<botonesDeJuego.length;i++){
  botonesDeJuego[i].classList.toggle("select");
}
}

function iniciarJuego() {
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0, anchoCanvas, altoCanvas);
  };
  img.src = "Images\\4 en linea\\4enlineaAgua.jpg";
}







