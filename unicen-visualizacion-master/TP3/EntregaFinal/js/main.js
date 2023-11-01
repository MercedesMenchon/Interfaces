"Use strict";
let canvas = document.getElementById('tablero');
let ctx = canvas.getContext('2d');


const juego8x8 = new Tablero(7, 8,canvas,ctx);
const ficha = new Ficha(20,45, 45);
ficha.dibujarFicha(ctx);

