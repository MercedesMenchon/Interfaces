"Use strict";
/*
let.lastClickedFicha = null;
let.isMouseDown = false;
*/
class Juego {
  constructor(tablero, canvas, ctx) {
    this.fichas = [];
    this.tablero = tablero;
    this.ctx = ctx;
    this.canvas = canvas;

    // this.jugador1 = new Jugador('Jugador 1', 'red');
    //this.jugador2 = new Jugador('Jugador 2', 'yellow');
    //this.fichaActual = null; // Ficha que se está moviendo actualmente
  }


  addFichas() {
    let posy=0;
    if (this.fichas.length < this.tablero.getCantFichas()) {
      //setTimeOut(addFicha, 333);
      for (let i = 0; i < this.tablero.getCantFichas()/4; i++) {
      /*  let posx = Math.round(Math.random() * canvas.width);
        let posy = Math.round(Math.random() * canvas.height);*/
        let posxJ1 = this.tablero.getEspacioBlancoX()/4;
        let posxJ2 = this.tablero.getEspacioBlancoX()*5/4+this.canvas.width * .7;
        posy +=this.tablero.getRadioFicha()*2.1;
        const fichaJugador1 = new Ficha(this.tablero.getRadioFicha(),posxJ1,posy,"orange",ctx,"Images\\4 en linea\\mosca.png");
        const fichaJugador3= new Ficha(this.tablero.getRadioFicha(),posxJ1*3,posy,"orange",ctx,"Images\\4 en linea\\mosca.png");
       
        const fichaJugador2 = new Ficha(this.tablero.getRadioFicha(),posxJ2,posy,"green",ctx,"Images\\4 en linea\\sapo.png");
        this.fichas.push(fichaJugador1); 
        this.fichas.push(fichaJugador2);
        this.fichas.push(fichaJugador3);
        
      }
    }
    this.dibujarFichas();
  }


  dibujarFichas() {
    /*ClearCanvas();*/
    for (let i = 0; i < this.fichas.length; i++) {
      this.fichas[i].dibujar();
    }
  }


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







