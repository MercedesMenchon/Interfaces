"Use strict";
let canvas = document.getElementById('tablero');
let ctx = canvas.getContext('2d');
let xCanvas = canvas.width;
let yCanvas = canvas.height;
const tablero8x8 = new Tablero(7, 8, canvas, ctx);
 // Configura el tamaño del canvas con una resolución adecuada
 canvas.width = 800; 
 canvas.height = 600; 
let anchoCanvas = canvas.width;
let altoCanvas = canvas.height;
const CANT_FICHAS = 15;
const juego8x8 = new Tablero(7, 8, canvas, ctx);


const imagenFicha1= new Image();
Image.src= "Images\\4 en linea\\mosca.png";

const fichaJugador1 = new fichaJugador(40,45,45,ctx,"orange","Images\\4 en linea\\mosca.png");
fichaJugador1.dibujar();
const fichaJugador2 = new fichaJugador(40,150,150,ctx,"green","Images\\4 en linea\\sapo.png");
fichaJugador2.dibujar();











