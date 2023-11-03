"Use strict";
let canvas = document.getElementById('tablero');
let ctx = canvas.getContext('2d');
let anchoCanvas = canvas.width;
let altoCanvas = canvas.height;
const CANT_FICHAS = 15;
const juego8x8 = new Tablero(7, 8, canvas, ctx);
//const ficha = new Ficha(20,45, 45);
//ficha.dibujarFicha(ctx);
/*
let fichas = [];
let lastClickedFicha = null;
let isMouseDown = false;

function addFichas() {
if(fichas.length<CANT_FICHAS){
    setTimeOut(addFicha, 333);
}
  
}

function addFicha(){
    let fichita=new Ficha(radio, anchoCanvas, altoCanvas, fill, ctx);
    fichas.push(fichita);
    dibujarFicha();
}
//metodo que se usa para que despues de tantos minutos llame a una funcion (lo vamos a necvesitar)

setTimeOut(() => { addFichas();}, 333);

*/

//dibujo las fichas
for (let index = 0; index < CANT_FICHAS; index++) {
    ctx.fillStyle = 'rgba(120,0,25)';
    ctx.beginPath();
    ctx.arc(Math.round(Math.random() * anchoCanvas), Math.round(Math.random() * altoCanvas), 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}
