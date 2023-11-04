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
    this.fichaResaltada = null; // Almacena la ficha resaltada actual

    // this.jugador1 = new Jugador('Jugador 1', 'red');
    //this.jugador2 = new Jugador('Jugador 2', 'yellow');
    //this.fichaActual = null; // Ficha que se está moviendo actualmente
  }


  addFichas() {
    let posy = 0;
    if (this.fichas.length < this.tablero.getCantFichas()) {
      //setTimeOut(addFicha, 333);
      for (let i = 0; i < this.tablero.getCantFichas() / 4; i++) {
      //determinamos a partir de que pixel del canvas dibujamos las fichas a cada lado del tablero
        let posxJ1 = this.tablero.getEspacioBlancoX() / 4;
        let posxJ2 = this.tablero.getEspacioBlancoX() * 5 / 4 + this.canvas.width * .7;

        // Generar desplazamientos verticales y horizontales aleatorios
        let randomVerticalOffset = Math.random() * this.tablero.getRadioFicha() * 4;
        let randomHorizontalOffset = Math.random() * this.tablero.getRadioFicha() * 2;

        let separationFactor = 3; 

        const posy = this.tablero.getRadioFicha() * 10 + randomVerticalOffset * separationFactor;
        const posxPlayer1 = posxJ1 + randomHorizontalOffset;
        const posxPlayer2 = posxJ2 + randomHorizontalOffset;

        const fichaJugador1 = new Ficha(this.tablero.getRadioFicha(), posxPlayer1, posy, "orange", ctx, "Images\\4 en linea\\mosca.png");
        const fichaJugador2 = new Ficha(this.tablero.getRadioFicha(), posxPlayer2, posy, "green", ctx, "Images\\4 en linea\\sapo.png");
        
        this.fichas.push(fichaJugador1);
        this.fichas.push(fichaJugador2);


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
//creo funcion para click en fichas
agregarEventoClic() {
  this.canvas.addEventListener('click', (event) => {
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Encuentra la ficha clickeada
    const fichaClickeada = this.findClickedFigure(x, y);

    if (fichaClickeada) {
      if (this.fichaResaltada === fichaClickeada) {
        // Si la ficha clickeada ya está resaltada, la desresaltamos
        fichaClickeada.setResaltado(false);
        this.fichaResaltada = null;
      } else {
        // Si la ficha clickeada no está resaltada, la resaltamos y desresaltamos la ficha previamente resaltada (si hay alguna)
        if (this.fichaResaltada) {
          this.fichaResaltada.setResaltado(false);
        }
        fichaClickeada.setResaltado(true);
        this.fichaResaltada = fichaClickeada;
      }
      this.dibujarFichas(); // Redibuja las fichas para reflejar el cambio
    }
  });

  // Detecta el evento de soltar el botón del mouse
  this.canvas.addEventListener('mouseup', () => {
    if (this.fichaResaltada) {
      this.fichaResaltada.setResaltado(false); // Desresalta la ficha al soltar el botón del mouse
      this.fichaResaltada = null;
      this.dibujarFichas();
    }
  });
}


procesarClic(x, y) {
  // Encuentra la ficha clickeada
  const fichaClickeada = this.findClickedFigure(x, y);

  if (fichaClickeada) {
    // Cambia el color del borde de la ficha al hacer clic
    fichaClickeada.setFill('red'); 
    this.dibujarFichas(); // Redibuja las fichas para reflejar el cambio
  }
}
  findClickedFigure(x, y) {
    for (let i = 0; i < this.fichas.length; i++) {
      const element = this.fichas[i];
      if (element.isPointedInside(x, y)) {
        return element;
      }
    }
  }

  
  /*
  ClearCanvas(){
    ctx.fillStyle='F8F8FF';
    ctx.fillRect(0,0,anchoCanvas, altoCanvas);
  }
  */
  //metodo que se usa para que despues de tantos minutos llame a una funcion (lo vamos a necvesitar)

  //setTimeOut(() => { addFichas(); }, 333);


}







