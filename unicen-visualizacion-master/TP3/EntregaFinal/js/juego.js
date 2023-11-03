"Use strict";
/*
let.lastClickedFicha = null;
let.isMouseDown = false;
*/
class Juego {
  constructor(tablero,canvas,ctx) {
    this.fichas = [];
    this.tablero = tablero;
    this.ctx=ctx;
    this.canvas=canvas;
    
    // this.jugador1 = new Jugador('Jugador 1', 'red');
    //this.jugador2 = new Jugador('Jugador 2', 'yellow');
    //this.fichaActual = null; // Ficha que se está moviendo actualmente
  }



  addFichas() {
  if (this.fichas.length < this.tablero.getCantFichas()) {
      //setTimeOut(addFicha, 333);
    for(let i=0; i<this.tablero.getCantFichas(); i++){
      let posx = Math.round(Math.random() * canvas.width);
      let posy = Math.round(Math.random() * canvas.height);
      let fichita = new Ficha(this.tablero.getRadioFicha(), posx, posy, 'red', ctx);
      this.fichas.push(fichita);
    }
     
  }
  this.dibujarFichas();
}
dibujarFichas() {
  /*ClearCanvas();*/
  for (let i = 0; i< this.fichas.length; i++) {
    this.fichas[i].dibujar();
  }
}

/*
dibujar(){
  ctx.fillStyle = 'rgba(120,0,25)';
  ctx.beginPath();
  ctx.arc(Math.round(Math.random() * anchoCanvas), Math.round(Math.random() * altoCanvas), 8, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}
*/
/*
findClickedFigure(x, y) {
  for (let i = 0; i < fichas.length; i++) {
    const element = fichas[i];
    if (element.isPointedInside(x, y)) {
      return element;
    }
  }
}

findClickedFigure(x, y) {
  for (let i = 0; i < fichas.length; i++) {
    const element = fichas[i];
    if (element.isPointedInside(x, y)) {
      return element;
    }
  }
}
*/
/*
ClearCanvas(){
  ctx.fillStyle='F8F8FF';
  ctx.fillRect(0,0,anchoCanvas, altoCanvas);
}
*/
//metodo que se usa para que despues de tantos minutos llame a una funcion (lo vamos a necvesitar)

//setTimeOut(() => { addFichas(); }, 333);


}







