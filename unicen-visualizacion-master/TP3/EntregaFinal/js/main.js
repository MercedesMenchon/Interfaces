"Use strict";
let canvas = document.getElementById('tablero');
let ctx = canvas.getContext('2d');
let xCanvas = canvas.width;
let yCanvas = canvas.height;
const tablero8x8 = new Tablero(7, 8, canvas, ctx);



//creo juego
const juego = new Juego(tablero8x8, canvas, ctx);


juego.addFichas();


