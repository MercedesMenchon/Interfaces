"Use strict";

let canvas = document.getElementById('tablero');
let ctx = canvas.getContext('2d');
canvas.width = 1000; 
canvas.height = 600; 
let anchoCanvas = canvas.width;
let altoCanvas = canvas.height;


document.addEventListener("DOMContentLoaded", function() {
    iniciarJuego();
    let tablero7x6 = this.querySelector("#tablero7x6").addEventListener("click", function(e){
        generarTablero(7,6).agregarEventoClic();
    });
 let tablero7x8 = this.querySelector("#tablero7x8").addEventListener("click", function(e){
        generarTablero(7,8).agregarEventoClic();
    });
   let tablero8x8 = this.querySelector("#tablero8x8").addEventListener("click", function(e){
        generarTablero(8,8).agregarEventoClic();
    });
});

function iniciarJuego(){
   
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, anchoCanvas, altoCanvas);
    };
    img.src = "Images\\4 en linea\\4enlineaAgua.jpg";
}

function generarTablero(x,y){
    const tablero = new Tablero(x,y, canvas, ctx);
    const juego = new Juego(tablero,canvas, ctx);
    return juego;
}





