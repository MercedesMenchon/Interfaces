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

    // this.jugador1 = new Jugador('Jugador 1', 'red');
    //this.jugador2 = new Jugador('Jugador 2', 'yellow');
    //this.fichaActual = null; // Ficha que se está moviendo actualmente
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


  //creo funcion para click en fichas, moverlas y resaltarlas con click
  /* agregarEventoClic() {
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
 
 */
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

    this.canvas.addEventListener('mouseup', (event) => {

      if (fichaArrastrada) {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        fichaArrastrada.setResaltado(false);
        fichaArrastrada.setArrastrandose(false);
        let newX = fichaArrastrada.getPosicionX();
        let newY = fichaArrastrada.getPosicionY();

        // Utiliza las funciones para verificar la posición y columna
        if (this.fichaSoltadaEnelJuego(x, y)) {
          let columna = this.getColumnaDeCaidaFicha(x, y);
          let fila = this.getFilaLibre(columna);
          let newX = this.tablero.matriz[fila][columna].getCentroX();
          let newY = this.tablero.matriz[fila][columna].getCentroY();
          
          this.tablero.matriz[fila][columna].setFicha();
          console.log(this.tablero.matriz);
          console.log("cambio:");
          console.log(this.tablero.matriz[fila][columna].setFicha(fichaArrastrada));
          console.log(newX);
          console.log(newY);
          fichaArrastrada.setX(newX);
          fichaArrastrada.setY(newY);
          this.tablero.matriz[fila][columna].setFicha(fichaArrastrada);
          console.log(this.tablero.matriz);
          console.log("cambio:");
         console.log( this.tablero.matriz[fila][columna].getFicha());
          console.log(newX);
          console.log(newY);
          


          fichaArrastrada.dibujar();
     
        }

        fichaArrastrada = null;
        this.clearCanvas(); // Borrar el lienzo
        this.dibujarTablero(); // Dibuja el tablero en su posición original
        //this.dibujarFichas(); // Redibujar todas las fichas
      }
    });







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
      if (columna < 0 || columna >= this.tablero.getColumnas() || this.tablero.matriz[0][columna].getFicha()!=null) {
        return false;
      }

      // Calcula la fila en la que se debe colocar la ficha
      let fila = this.getFilaLibre(columna);

      // Verifica si la fila y columna están dentro de los límites del tablero
      return fila >= 0 && fila < this.tablero.getFilas() && columna >= 0 && columna < this.tablero.getColumnas();
    }

    return false;
  }

  
  getFilaLibre(columna){
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
  /*esPosicionValida(fila, columna) {
      // Verificar si la posición está dentro de los límites del tablero
    if (fila < 0 || fila >= this.tablero.getFilas() || columna < 0 || columna >= this.tablero.getColumnas()) {
      return false;
    }
  
    getColumnaDeCaidaFicha(x, y) {
      return Math.floor((x - this.tablero.getEspacioBlancoX()) / this.tablero.getAnchoCelda());
    }
    /*esPosicionValida(fila, columna) {
        // Verificar si la posición está dentro de los límites del tablero
      if (fila < 0 || fila >= this.tablero.getFilas() || columna < 0 || columna >= this.tablero.getColumnas()) {
        return false;
       
      }
    
      // Verificar si la celda en esa posición está vacía
      if (this.tablero.matriz[fila][columna] === 0) {
          return true;
      }
    
      return false;
    }*/

  dejarCaer(x, y) {
    let fichas = document.querySelectorAll(Ficha);
    for (let i = 0; i < fichas.length; i++) {
      fichas[i].addEventListener('mouseup', fichaSoltadaEnelJuego(this.getPosicionX(), this.getPosicionY()));
    }

  }

/*
  colocarFicha(columna, ficha) {
    // Determina la fila libre en la columna
    const fila = this.tablero.getCasilleroLibre(columna);


  console.log("Fila estas acá??: " + fila); 
    if (fila !== -1) {
      // Coloca la ficha en el tablero y en la lista de fichas del juego

      //  ficha.setPosicion()
      ficha.setPosicion(this.tablero.matriz[fila][columna].getCentroX(), this.tablero.matriz[fila][columna].getCentroY());
      // Dibuja el tablero actualizado con las fichas
      this.dibujarTablero();

      // Realiza cualquier verificación de ganador o cambio de turno que necesites aquí
      // ...

      return true; // La ficha se colocó con éxito
    } else {
      // La columna está llena
      return false;
    }
  }
*/
}











