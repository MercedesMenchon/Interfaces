"Use strict";
//CREAMOS LA CLASE TABLERO
export default class Tablero {
 
    constructor(filas, columnas,canvas,ctx) {
  this.columnas=columnas;
  this.filas=filas;
      this.matriz = []; 
      this.armarMatriz();
      this.canvas = canvas;
      this.ctx = ctx;
      this.armarTablero();
    }

    getAnchoCelda() {
      return 320/ this.columnas;
    }
  
    getAltoCelda() {
      return 250/ this.filas;
    }

    getRadioFicha(){
      return this.getAltoCelda()/2*0.8;
        }


    armarMatriz() {
        for (let fila = 0; fila < this.filas; fila++) {
          this.matriz[fila] = [];
          for (let columna = 0; columna < this.columnas; columna++) {
            this.matriz[fila][columna] = 0; 
        }
      }

    }
dibujarTablero(){
    this.armarTablero();
    this.dibujarFichas();
}



    armarTablero() {
        
      
      //PARA BORRAR TODO LO QUE YA ESTA, DEBEMOS UTILIZAR:
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
   this.ctx.lineWidth = 3;
      // Dibuja las celdas del tablero
      for (let fila = 0; fila < this.filas; fila++) {
        for (let columna = 0; columna < this.columnas; columna++) {
            const x = 115 +columna * this.getAnchoCelda();
          const y = 75 +fila * this.getAltoCelda();
            
            this.ctx.fillStyle = "rgb(0,85,164)";
            this.ctx.fillRect(x, y, this.getAnchoCelda(), this.getAltoCelda());
            this.ctx.strokeStyle = "rgb(255,0,255)";
            this.ctx.strokeRect(x, y, this.getAnchoCelda(), this.getAltoCelda());
          // Dibujamos las fichas según el estado de la matriz
      if(this.matriz[fila][columna]===0){
     const casillero = new Casillero(x,y,this.getAnchoCelda(), this.getAltoCelda(), this.getRadioFicha());
    casillero.dibujar(this.ctx);  
 
    }
          else {

            const ficha = this.matriz[fila][columna];
            ficha.dibujarFicha(this.ctx, x +this.getAnchoCelda() / 2, y + this.getAltoCelda() / 2);
            this.ctx.strokeRect(x, y, this.getAnchoCelda(), this.getAltoCelda()); 
            this.ctx.fillStyle = "rgb(255,0,255)";
        }
        }
      }
    }





}



//LOS CONSTRUCTORES DE NUESTROS TABLEROS
//const juego7x6 = new Tablero(7, 6);
//const juego8x7 = new Tablero(8, 7);
//const juego8x8 = new Tablero(8, 8);



