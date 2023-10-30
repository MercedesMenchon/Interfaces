"Use strict";
//CREAMOS LA CLASE TABLERO


class Tablero {
 
    constructor(filas, columnas) {
  this.columnas=columnas;
  this.filas=filas;
      this.matriz = []; 
      this.armarMatriz();
      this.canvas = document.getElementById('tablero');
      this.ctx = this.canvas.getContext('2d');
      this.armarTablero();
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
        //Para obtener el ancho y el alto, dividimos el tamaño del canvas por las filas
        //y columnas que tiene el tablero
      const anchoCelda = this.canvas.width / this.columnas;
      const altoCelda = this.canvas.height / this.filas;
      //PARA BORRAR TODO LO QUE YA ESTA, DEBEMOS UTILIZAR:
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
   this.ctx.lineWidth = 3;
      // Dibuja las celdas del tablero
      for (let fila = 0; fila < this.filas; fila++) {
        for (let columna = 0; columna < this.columnas; columna++) {
            const x = columna * anchoCelda;
          const y = fila * altoCelda;
            
            this.ctx.fillStyle = "rgb(0,85,164)";
            this.ctx.fillRect(x, y, anchoCelda, altoCelda);
            this.ctx.strokeStyle = "rgb(255,0,255)";
            this.ctx.strokeRect(x, y, anchoCelda, altoCelda);
          // Dibujamos las fichas según el estado de la matriz
      if(this.matriz[fila][columna]===0){
        this.ctx.fillStyle = "rgb(255,255,255)";
        this.ctx.beginPath();
        this.ctx.arc(x+anchoCelda/2,y+altoCelda/2,anchoCelda*0.3,0,2*Math.PI);
        this.ctx.fill();
      }
          else {
            const ficha = this.matriz[fila][columna];
            ficha.dibujarFicha(this.ctx, x + anchoCelda / 2, y + altoCelda / 2);
            this.ctx.strokeRect(x, y, celdaWidth, celdaHeight); 
            this.ctx.fillStyle = "rgb(255,0,255)";
        }
        }
      }
    }
}


//LOS CONSTRUCTORES DE NUESTROS TABLEROS
//const juego7x6 = new Tablero(7, 6);
const juego8x7 = new Tablero(8, 7);
//const juego8x8 = new Tablero(8, 8);



