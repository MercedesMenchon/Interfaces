"Use strict";

let canvas = document.getElementById('tablero');
let ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 600;
let anchoCanvas = canvas.width;
let altoCanvas = canvas.height;

let filas=null;
let columnas= null;
let cantLinea= null;
let personajeJugador1 =null;
let juego;


document.addEventListener("DOMContentLoaded", function () {
  iniciarJuego();




 
  document.getElementById("sapoButton").addEventListener("click", function () {
    console.log("Has elegido al sapo");
    personajeJugador1 = "sapo";
  //  document.querySelector(".character-selection").classList.toggle("visible");
  // Desactivar la clase clickeado en el botón Mosca
  document.getElementById("moscaButton").classList.remove("clickeado");
  this.classList.toggle("clickeado");

    console.log(personajeJugador1);
  });

  // Event listener para el botón Mosca
  document.getElementById("moscaButton").addEventListener("click", function () {
   // document.querySelector(".character-selection").classList.toggle("visible");
    personajeJugador1 = "mosca";
    console.log("Has elegido la mosca");
      // Desactivar la clase clickeado en el botón Sapo
  document.getElementById("sapoButton").classList.remove("clickeado");
  this.classList.toggle("clickeado");
 console.log(personajeJugador1);
  });
 

document.querySelector("#tablero7x6").addEventListener("click", function (){
  if(personajeJugador1!= null){
   seleccionarBotonJuego()
  
   filas=7;
   columnas= 6;
   cantLinea= 4;
  } 
});
document.querySelector("#tablero7x8").addEventListener("click", function (){
  if(personajeJugador1!= null){
  seleccionarBotonJuego();
  
  filas=7;
  columnas=8;
  cantLinea=5;
  }
  });
document.querySelector("#tablero8x8").addEventListener("click", function (){
  if(personajeJugador1!= null){
  seleccionarBotonJuego(personajeJugador1);
 
  filas=8;
  columnas= 8;
  cantLinea= 6;
  }
  });
  document.querySelector("#btn-playJuego").addEventListener("click",function (){
    document.querySelector(".character-selection").classList.toggle("visible");
    document.querySelector("#reiniciarJuego").classList.remove("oculto");
    let tablero = new Tablero (filas,columnas,cantLinea,canvas,ctx);
    this.juego = new Juego(tablero,canvas,ctx);
    let temporizador = new Temporizador(600,this.juego);
     this.juego.iniciar(personajeJugador1);
   temporizador.iniciarTemporizador();

    document.querySelector("#reiniciarJuego").addEventListener("click", function(){
      console.log(this.juego);
      iniciarJuego();
    });
    
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
  console.log("iniciarJuego");
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0, anchoCanvas, altoCanvas);
  };
  img.src = "Images\\4 en linea\\4enlineaAgua.jpg";

  document.querySelector(".character-selection").classList.toggle("visible");

}







