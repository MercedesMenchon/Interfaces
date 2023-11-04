"Use strict";
/*
let.lastClickedFicha = null;

*/
class Juego {
  constructor(tablero, canvas, ctx) {
    this.fichas = [];
    this.tablero = tablero;
    this.ctx = ctx;
    this.canvas = canvas;
    this.fichaResaltada = null; // Almacena la ficha resaltada actual
    this.mousedown = false;


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
    this.dibujarTablero();
  }

  dibujarTablero() {
    this.tablero.armarTablero();
    this.dibujarFichas();
  }

  dibujarFichas() {
    //ClearCanvas();
    for (let i = 0; i < this.fichas.length; i++) {
      this.fichas[i].dibujar();
    }
  }


  //creo funcion para click en fichas, moverlas y resaltarlas con click
  agregarEventoClic() {
    let fichaArrastrada = null;

    this.canvas.addEventListener('mousedown', (event) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      console.log(`x: ${x}, y: ${y}`);//controlo donde estan mis coordenadas
      // Encuentra la ficha clickeada
      for (let i = this.fichas.length - 1; i >= 0; i--) {
        const ficha = this.fichas[i];
        if (ficha.isPointedInside(x, y)) {
          fichaArrastrada = ficha;
          break; // Detén la búsqueda después de seleccionar la ficha superior
        }
      }

      if (fichaArrastrada) {
        fichaArrastrada.setResaltado(true);
        fichaArrastrada.setArrastrandose(true);
      }
    });

    this.canvas.addEventListener('mousemove', (event) => {
      if (fichaArrastrada) {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        fichaArrastrada.setPosicion(x, y);
        this.clearCanvas(); // Borrar el lienzo

        this.dibujarTablero(); // Dibuja el tablero en su posición original

        // Dibuja todas las fichas excepto la arrastrada
        for (let i = 0; i < this.fichas.length; i++) {
          if (this.fichas[i] !== fichaArrastrada) {
            this.fichas[i].dibujar();
          }
        }
      }
    });

    this.canvas.addEventListener('mouseup', () => {
      if (fichaArrastrada) {
        fichaArrastrada.setResaltado(false);
        fichaArrastrada.setArrastrandose(false);
        fichaArrastrada = null;
        this.clearCanvas(); // Borrar el lienzo
        this.dibujarTablero(); // Dibuja el tablero en su posición original
        this.dibujarFichas(); // Redibujar todas las fichas
      }
    });
  }




  //Determinamos en cuál ficha se hizo clic en el lienzo del juego, si se encuentra, se devuelve.
  findClickedFigure(x, y) {
    for (let i = 0; i < this.fichas.length; i++) {
      const element = this.fichas[i];
      if (element.isPointedInside(x, y)) {
        return element;
      }
    }
  }


  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  //metodo que se usa para que despues de tantos minutos llame a una funcion (lo vamos a necvesitar)

 // setTimeOut(() => { addFichas(); }, 333);


}







