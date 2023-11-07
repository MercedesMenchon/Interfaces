"Use strict";
let canvas = document.getElementById('tablero');
let ctx = canvas.getContext('2d');
canvas.width = 1000; 
canvas.height = 600; 
//let xCanvas = canvas.width;
//let yCanvas = canvas.height;
//const tablero8x8 = new Tablero(1, 5, canvas, ctx);
 // Configura el tamaño del canvas con una resolución adecuada

let anchoCanvas = canvas.width;
let altoCanvas = canvas.height;

let tablero8x8 = new Tablero(8, 7, canvas, ctx);
console.log("tablero canvas width");


console.log(tablero8x8.matriz);
console.log("espacio:");
console.log(tablero8x8.getEspacioBlancoX());


const imagenFicha1 = new Image();
imagenFicha1.src = "Images\\4 en linea\\mosca.png";

const imagenFicha2 = new Image();
imagenFicha2.src = "Images\\4 en linea\\sapo.png";


//creo juego
const juego = new Juego(tablero8x8,canvas, ctx);
juego.addFichas(); // Llama a la función para agregar fichas
juego.agregarEventoClic(); // Agrega el manejador de eventos al canvas


//PARA PROBAR QUE ANDE LA FUNCION QUE DETECTA SI LA FICAH ESTA UBICADA EN UN LUGAR CORRECTO DEL JUEGO
const fichaa = new Ficha(50,200, 537, "green", ctx, "Images\\4 en linea\\mosca.png");
fichaa.dibujar();
console.log("esta?:")
console.log(juego.fichaSoltadaEnelJuego(700,45))
//console.log(juego.esPosicionValida(500,60));

