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



const imagenFicha1 = new Image();
imagenFicha1.src = "Images\\4 en linea\\mosca.png";

const imagenFicha2 = new Image();
imagenFicha2.src = "Images\\4 en linea\\sapo.png";


//creo juego
const juego = new Juego(tablero8x8, canvas, ctx);
juego.agregarEventoClic(); // Agrega el manejador de eventos al canvas
juego.addFichas(); // Llama a la función para agregar fichas
//PARA PROBAR QUE ANDE LA FUNCION QUE DETECTA SI LA FICAH ESTA UBICADA EN UN LUGAR CORRECTO DEL JUEGO
//const fichaa = new Ficha(100, 150, 150, "green", ctx, "Images\\4 en linea\\mosca.png");
//fichaa.dibujar();
//console.log(juego.fichaSoltadaEnelJuego(500,800))
console.log(juego.esPosicionValida(10,5));

