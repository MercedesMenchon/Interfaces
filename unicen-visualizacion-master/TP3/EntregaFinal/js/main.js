"Use strict";

let canvas = document.getElementById('tablero');
let ctx = canvas.getContext('2d');
canvas.width = 1000; 
canvas.height = 600; 
let anchoCanvas = canvas.width;
let altoCanvas = canvas.height;


document.addEventListener("DOMContentLoaded", function() {
    iniciarJuego();
    let temporizador = new Temporizador(10);
    let tablero7x6 = this.querySelector("#tablero7x6").addEventListener("click", function(e){
        const tablero1 = new Tablero(6,7,4, canvas, ctx);
        const juego1 = new Juego(tablero1,canvas, ctx,temporizador);
        juego1.agregarEventoClic();
   
        
        
    });
 let tablero7x8 = this.querySelector("#tablero7x8").addEventListener("click", function(e){
    const tablero2 = new Tablero(7,8,5, canvas, ctx);
    const juego2 = new Juego(tablero2,canvas, ctx,temporizador);
    juego2.agregarEventoClic();
 
    });
   let tablero8x8 = this.querySelector("#tablero8x8").addEventListener("click", function(e){
    const tablero3 = new Tablero(8,8,6, canvas, ctx);
    const juego3 = new Juego(tablero3,canvas, ctx,temporizador);
    juego3.agregarEventoClic();

    });

});

function iniciarJuego(){
   
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, anchoCanvas, altoCanvas);
    };
    img.src = "Images\\4 en linea\\4enlineaAgua.jpg";
}







