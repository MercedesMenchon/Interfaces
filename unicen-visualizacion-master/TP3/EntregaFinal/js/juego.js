"use strict";

class Juego {
  constructor(tablero, canvas, ctx) {
    this.fichas = [];
    this.tablero = tablero;
    this.ctx = ctx;
    this.canvas = canvas;
    this.fichaResaltada = null; // Almacena la ficha resaltada actual
    this.mousedown = false;
    this.jugadores = ["jugador1", "jugador2"];
    this.addFichas();
    this.juegoTerminado = false; //indica si el juego terminó
    // rastreo del jugador actual
    this.jugadorActual = this.jugadores[0];

  }


  addFichas() {
    let posy = 0;
    if (this.fichas.length < this.tablero.getCantFichas()) {
      //setTimeOut(addFicha, 333);
      //EL FOR QUEE STA ACA, DECIA /4 PERO SI SON 2 JUGADORES ES 2, NO?
      for (let i = 0; i < this.tablero.getCantFichas() / 2; i++) {
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

        const fichaJugador1 = new Ficha(this.tablero.getRadioFicha(), posxPlayer1, posy, "orange", ctx, "Images\\4 en linea\\mosca.png", "jugador1");
        const fichaJugador2 = new Ficha(this.tablero.getRadioFicha(), posxPlayer2, posy, "green", ctx, "Images\\4 en linea\\sapo.png", "jugador2");

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
        console.log(i);
       
        if (!ficha.colocada && ficha.isPointedInside(x, y) && ficha.getJugador()==this.jugadorActual) {
          console.log("soy el jugador activo");
          console.log(this.jugadorActual);
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
      if (this.juegoTerminado) {
        return; // Evita procesar eventos si el juego ya ha terminado
      }
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

    this.canvas.addEventListener('mouseup', (event) => {
      if (this.juegoTerminado) {
        return; // Evita procesar eventos si el juego ya ha terminado
      }
      if (fichaArrastrada) {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        fichaArrastrada.setResaltado(false);
        fichaArrastrada.setArrastrandose(false);
  
        // Utiliza las funciones para verificar la posición y columna
        if (this.fichaSoltadaEnelJuego(x, y)) {
          let columna = this.getColumnaDeCaidaFicha(x, y);
          let fila = this.getFilaLibre(columna);
          let newX = this.tablero.matriz[fila][columna].getCentroX();
          let newY = this.tablero.matriz[fila][columna].getCentroY();

          this.tablero.matriz[fila][columna].setFicha();
          fichaArrastrada.colocada = true; // Marca la ficha como colocada
          console.log(this.tablero.matriz);
          console.log("cambio:");
          console.log(this.tablero.matriz[fila][columna].setFicha(fichaArrastrada));
          console.log(newX);
          console.log(newY);
          fichaArrastrada.setX(newX);
          fichaArrastrada.setY(newY);
          this.tablero.matriz[fila][columna].setFicha(fichaArrastrada);
          fichaArrastrada.dibujar();
          this.hayGanador(fila, columna);
          
         
        }

        fichaArrastrada = null;
        this.clearCanvas(); // Borrar el lienzo
        this.dibujarTablero(); // Dibuja el tablero en su posición original
        this.getTurno();

      }
    });

  }
  setJugadorActual(jugador) {
    this.jugadorActual = jugador;
  }


  getJugadorActual(){
    return this.jugadorActual;
  }

  getTurno() {
   
   if (this.getJugadorActual() == this.jugadores[0]) {
    console.log(this.getJugadorActual());
    console.log(this.getJugadorActual());
    const opcion =this.jugadores[1];
      setJugadorActual(opcion);
      console.log("opcion 1");

    }
    else 
      if (this.jugadorActual == this.jugadores[1]) {
        setJugadorActual(this.jugadores[0]);
      }
    
   // return this.jugadorActual;*/
  }

  //Determinamos en cuál ficha se hizo clic en el lienzo del juego, si se encuentra, se devuelve.
  findClickedFigure(x, y) {
    console.log('entro a la ficha');
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


  fichaSoltadaEnelJuego(x, y) {
    if (this.tablero.getRadioFicha() < y && y < this.tablero.getEspacioBlancoY()) {
      const columna = this.getColumnaDeCaidaFicha(x, y);
      // Verifica si la columna no está llena
      if (columna < 0 || columna >= this.tablero.getColumnas() || this.tablero.matriz[0][columna].getFicha() != null) {
        return false;
      }

      // Calcula la fila en la que se debe colocar la ficha
      let fila = this.getFilaLibre(columna);

      // Verifica si la fila y columna están dentro de los límites del tablero
      return fila >= 0 && fila < this.tablero.getFilas() && columna >= 0 && columna < this.tablero.getColumnas();
    }

    return false;
  }


  getFilaLibre(columna) {
    // Calcula la fila en la que se debe colocar la ficha
    let fila = this.tablero.getFilas() - 1;
    console.log("Luciana prueba:");
    console.log(this.tablero.matriz[fila][columna].getFicha());
    while (fila >= 0 && this.tablero.matriz[fila][columna].getFicha()) {
      console.log("entrooo");
      console.log(this.tablero.matriz[fila][columna].getFicha());
      fila--;
    }
    console.log("fila:");
    console.log(fila);
    return fila;

  }




  getColumnaDeCaidaFicha(x, y) {
    return Math.floor((x - this.tablero.getEspacioBlancoX()) / this.tablero.getAnchoCelda());
  }

  dejarCaer(x, y) {
    let fichas = document.querySelectorAll('Ficha');
    for (let i = 0; i < fichas.length; i++) {
      fichas[i].addEventListener('mouseup', fichaSoltadaEnelJuego(this.getPosicionX(), this.getPosicionY()));
    }

  }


  hayGanador(fila, columna) {
    console.log("entro a hay ganador");
    // Comprueba la línea horizontal}
    let jugador = this.tablero.matriz[fila][columna].getFicha().getJugador();

    let contador = 0;
    for (let i = Math.max(0, columna - 3); i <= Math.min(this.tablero.getColumnas() - 1, columna + 3); i++) {
      console.log("la i:");
      console.log(i);
      if (this.tablero.matriz[fila][i].getFicha() != null && this.tablero.matriz[fila][i].getFicha().getJugador() === jugador) {
        contador++;

        if (contador === 4) {
          console.log("gane");
          this.juegoTerminado = true; // Marca el juego como terminado
          return true;
        }
      } else {
        contador = 0;

      }
    }

    // Comprueba la línea vertical
    contador = 0;
    for (let i = Math.max(0, fila - 3); i <= Math.min(this.tablero.getFilas() - 1, fila + 3); i++) {
      if (this.tablero.matriz[i][columna].getFicha() != null && this.tablero.matriz[i][columna].getFicha().getJugador() === jugador) {
        contador++;
        if (contador === 4) {
          console.log("gane");
          this.juegoTerminado = true; // Marca el juego como terminado
          return true;
        }
      } else {
        contador = 0;
      }
    }

    // Verificar en línea diagonal descendente
    for (let fila = 0; fila < this.tablero.getFilas() - 3; fila++) {
      for (let columna = 0; columna < this.tablero.getColumnas() - 3; columna++) {
        let contador = 0;
        for (let i = 0; i < 4; i++) {
          if (
            this.tablero.matriz[fila + i][columna + i].getFicha() !== null &&
            this.tablero.matriz[fila + i][columna + i].getFicha().getJugador() === jugador
          ) {
            contador++;
            if (contador === 4) {
              console.log("gane");
              this.juegoTerminado = true; // Marca el juego como terminado
              return true;
            }
          } else {
            contador = 0;
          }
        }
      }
    }

    // Verificar en línea diagonal ascendente
    for (let fila = 3; fila < this.tablero.getFilas(); fila++) {
      for (let columna = 0; columna < this.tablero.getColumnas() - 3; columna++) {
        let contador = 0;
        for (let i = 0; i < 4; i++) {
          if (
            this.tablero.matriz[fila - i][columna + i].getFicha() !== null &&
            this.tablero.matriz[fila - i][columna + i].getFicha().getJugador() === jugador
          ) {
            contador++;
            if (contador === 4) {
              console.log("gane");
              this.juegoTerminado = true; // Marca el juego como terminado
              return true;
            }
          } else {
            contador = 0;
          }
        }
      }
    }


    return false;
  }
}
















