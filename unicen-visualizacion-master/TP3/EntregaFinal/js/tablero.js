"Use strict";
//CREAMOS LA CLASE TABLERO
class Tablero {


  constructor(filas, columnas, canvas, ctx) {
    this.columnas = columnas;
    this.filas = filas;
    this.matriz = [];
this.armarMatriz();
    this.canvas = canvas;
    this.ctx = ctx;
    this.cantFichas= this.getCantFichas();
  }

  getFilas() {
    return this.filas;
  }

  getColumnas() {
    return this.columnas;
  }

  getEspacioBlancoX() {
    return (this.canvas.width - this.getColumnas() * this.getAnchoCelda()) / 2;
  }

  getEspacioBlancoY() { 
    return (this.canvas.height - this.getFilas() * this.getAltoCelda()) * 4 / 5; 
  }
  

  getAnchoCelda() {
    return this.canvas.width * .7 / this.columnas;
  }

  getAltoCelda() {
    return this.canvas.height * .7 / this.filas;
  }
getFilas(){
  return this.filas;
}

getColumnas(){
  return this.columnas;
}
  getRadioFicha() {
    return this.getAltoCelda() / 2 * 0.8;
  }

  getCantFichas(){
  return this.getFilas() * this.getColumnas();
}
  armarMatriz(x,y) {
    for (let fila = 0; fila < this. getFilas(); fila++) {
      this.matriz[fila] = [];
      for (let columna = 0; columna < this.getColumnas(); columna++) {
         this.matriz[fila][columna]=0;
  
      }
    }

  }

  armarTablero() {
    
    //PARA BORRAR TODO LO QUE YA ESTA, DEBEMOS UTILIZAR:
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //this.ctx.lineWidth = 3;

    // Dibuja las celdas del tablero
    for (let fila = 0; fila < this.getFilas(); fila++) {
      for (let columna = 0; columna < this.getColumnas(); columna++) {
        // Calcula el espacio en blanco a la izquierda y arriba para centrar el tablero
        const x = this.getEspacioBlancoX() + columna * this.getAnchoCelda();
        const y = this.getEspacioBlancoY() + fila * this.getAltoCelda();
        const casillero = new Casillero(x,y, this.getAnchoCelda(), this.getAltoCelda(), this.getRadioFicha());
       this.matriz[fila][columna]=casillero;
       casillero.dibujar(this.ctx);

        //this.ctx.fillStyle = "rgb(0,85,164)";
      //  this.ctx.fillRect(x, y, this.getAnchoCelda(), this.getAltoCelda());
      //estos son los bordes rosas: 
      this.ctx.strokeStyle = "rgb(255,0,255)";
        this.ctx.strokeRect(x, y, this.getAnchoCelda(), this.getAltoCelda());
        // Dibujamos las fichas según el estado de la matriz
 /*       if (this.matriz[fila][columna] === 0) {
          

        }
        else {

          const ficha = this.matriz[fila][columna];
          ficha.dibujarFicha(this.ctx, x + this.getAnchoCelda() / 2, y + this.getAltoCelda() / 2);
          this.ctx.strokeRect(x, y, this.getAnchoCelda(), this.getAltoCelda());
          this.ctx.fillStyle = "rgb(255,0,255)";
  
        }*/
        
      }
    }
    
  }



getFilaLibre(columna){
  for(let i=this.getFilas()-1;i>=0 ;i--){
  if(this.matriz[columna][i]==0)
  return i;
  }
return -1;
}



}






//LOS CONSTRUCTORES DE NUESTROS TABLEROS
//const juego7x6 = new Tablero(7, 6);
//const juego8x7 = new Tablero(8, 7);
//const juego8x8 = new Tablero(8, 8);



