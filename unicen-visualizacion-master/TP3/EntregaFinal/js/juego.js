"use strict";

class Juego {
  constructor(tablero, canvas, ctx) {
    this.fichas = [];
    this.tablero = tablero;
    this.ctx = ctx;
    this.canvas = canvas;
    this.fichaResaltada = null; 
    this.mousedown = false;
    this.jugadores = ["jugador1", "jugador2"];
    this.addFichas();
    this.juegoTerminado = false; 
    this.jugadorActual = this.jugadores[0];
    this.estadoFichas = this.fichas.map(ficha => ({ x: ficha.getPosicionX(), y: ficha.getPosicionY() }));

  
  }

  setEstadoFichas() {
    this.estadoFichas = [];
    for (let i = 0; i < this.fichas.length; i++) {
      let estado = {
        "x": this.fichas[i].getPosicionX(),
        "y": this.fichas[i].getPosicionY()
      };
      this.estadoFichas.push(estado);
    }
    console.log(this.estadoFichas);
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

        const fichaJugador1 = new FichaJugador1(this.tablero.getRadioFicha(), posxPlayer1, posy, ctx);
        const fichaJugador2 = new FichaJugador2(this.tablero.getRadioFicha(), posxPlayer2, posy, ctx);

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

  dibujarFichas(fichaArrastrada = null) {
    for (let i = 0; i < this.fichas.length; i++) {
      if (fichaArrastrada && this.fichas[i] !== fichaArrastrada) {
        continue;
      }
      this.fichas[i].dibujar();
    }
  }


  agregarEventoClic() {
    let temporizadorIniciado = false;
    let fichaArrastrada = null;
    this.canvas.addEventListener('mousedown', (event) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
       for (let i = this.fichas.length - 1; i >= 0; i--) {
        const ficha = this.fichas[i];
     
        if (!ficha.colocada && ficha.isPointedInside(x, y) && ficha.getJugador() == this.jugadorActual) {
          console.log("soy el jugador activo");
          console.log(this.jugadorActual);
          fichaArrastrada = ficha;
          if (!temporizadorIniciado) {
            this.iniciarTemporizador();
            console.log("Iniciar temporizador");
            temporizadorIniciado = true;
        }
          break; 
        }
      }

      if (fichaArrastrada) {
        fichaArrastrada.setResaltado(true);
        fichaArrastrada.setArrastrandose(true);
        this.clearCanvas();
        this.dibujarTablero();

    
      }
    });

    this.canvas.addEventListener('mousemove', (event) => {
      if (this.juegoTerminado) {
        return; 
      }
      if (fichaArrastrada) {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;


        this.clearCanvas(); // Borrar el lienzo

        this.dibujarTablero(); 

        // Dibuja todas las fichas excepto la arrastrada
        fichaArrastrada.setPosicion(x, y);
        this.clearCanvas();
        this.dibujarTablero();
        this.dibujarFichas(fichaArrastrada); // Dibuja el tablero en su posición original

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

    
        if (this.fichaSoltadaEnelJuego(x, y)) {
          let columna = this.getColumnaDeCaidaFicha(x, y);
          let fila = this.getFilaLibre(columna);
          let newX = this.tablero.matriz[fila][columna].getCentroX();
          let newY = this.tablero.matriz[fila][columna].getCentroY();
//LE AGREGUE LA FICHA
          this.tablero.matriz[fila][columna].setFicha(fichaArrastrada);
          fichaArrastrada.colocada = true; 
          this.dibujarCaida(fichaArrastrada,x,y,newX,newY,this.canvas);
          fichaArrastrada.setX(newX);
          fichaArrastrada.setY(newY);
          this.tablero.matriz[fila][columna].setFicha(fichaArrastrada);
         // fichaArrastrada.dibujar();
         
          this.getTurno();
          fichaArrastrada = null;
          this.reiniciarTemporizador(); // Reinicia el temporizador cuando la ficha se coloca correctamente
         temporizadorIniciado = false;
          this.dibujarTablero();
          setTimeout(() => {
            this.controlGanador(fila, columna);
          }, 400);
          
         
        }
      }
        this.dibujarTablero();
    });

  }

dibujarCaida(ficha, x1, y1, x2, y2,canvas) {
    let frame = 0;
    const framesTotales = 30; // Número de frames para la transición (ajustar esto para cambiar la velocidad)
    const pasoX = (x2 - x1) / framesTotales;
    const pasoY = (y2 - y1) / framesTotales;
 for(let i=0;i<framesTotales;i++){
      
    // Calcula la nueva posición en cada frame
    if (frame < framesTotales) {
      x1 += pasoX;
      y1 += pasoY;
      ficha.setX(x1);
      ficha.setY(y1);
  console.log(ficha.getPosicionY());
      this.dibujarTablero();
      ficha.dibujar();
      frame++;
    
 }}}



  getJugadorActual() {
    return this.jugadorActual;
  }


  controlGanador(fila, columna) {
    let win = this.hayGanador(fila, columna);
    if (win == true) {
      this.mostrarGanador(this.tablero.matriz[fila][columna].getFicha())
    }
    else if (win == false && this.getCantidadFichasColocadas() == this.fichas.length)
      this.mostrarEmpate(this.tablero.matriz[fila][columna].getFicha())
  }


  getCantidadFichasColocadas() {
    let contador = 0;
    for (let i = 0; i < this.fichas.length; i++) {
      if (this.fichas[i].colocada == true) {
        contador++;
      }
    }
    return contador;
  }

  getTurno() {

    if (this.getJugadorActual() == this.jugadores[0]) {
      this.jugadorActual = this.jugadores[1];
    }
    else
      if (this.jugadorActual == this.jugadores[1]) {
        this.jugadorActual = this.jugadores[0];
      }

   
  }

  //Determinamos en cuál ficha se hizo clic 
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




  fichaSoltadaEnelJuego(x, y) {
    if (this.tablero.getRadioFicha() < y && y < this.tablero.getEspacioBlancoY()) {
      const columna = this.getColumnaDeCaidaFicha(x, y);
      if (columna < 0 || columna >= this.tablero.getColumnas() || this.tablero.matriz[0][columna].getFicha() != null) {
        return false;
      }

      let fila = this.getFilaLibre(columna);

 
      return fila >= 0 && fila < this.tablero.getFilas() && columna >= 0 && columna < this.tablero.getColumnas();
    }

    return false;
  }


  getFilaLibre(columna) {
   
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




  getColumnaDeCaidaFicha(x) {
    return Math.floor((x - this.tablero.getEspacioBlancoX()) / this.tablero.getAnchoCelda());
  }

  dejarCaer(x, y) {
    let fichas = document.querySelectorAll('Ficha');
    for (let i = 0; i < fichas.length; i++) {
      fichas[i].addEventListener('mouseup', fichaSoltadaEnelJuego(this.getPosicionX(), this.getPosicionY()));
    }

  }


  hayGanador(fila, columna) {

    let jugador = this.tablero.matriz[fila][columna].getFicha().getJugador();
    let contador = 0;
    for (let i = Math.max(0, columna - 3); i <= Math.min(this.tablero.getColumnas() - 1, columna + 3); i++) {
      console.log("la i:");
      console.log(i);
      if (this.tablero.matriz[fila][i].getFicha() != null && this.tablero.matriz[fila][i].getFicha().getJugador() === jugador) {
        contador++;

        if (contador === 4) {

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
          this.juegoTerminado = true;

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


  mostrarGanador(fichaGanador) {

    ctx.fillStyle = 'rgba(128, 128, 128, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const x = canvas.width / 2;
    const y = canvas.height * 3 / 5;

    // Dibuja el nombre del ganador debajo de la ficha
    ctx.fillStyle = 'rgba(255,255,255)';
    ctx.font = '100px Arial';
    ctx.textAlign = 'center';

    ctx.fillText("¡GANASTE!", x, y / 4 + fichaGanador.getRadio());
    const ficha = new Ficha(fichaGanador.getRadio() * 10, x, y, fichaGanador.getFill(), fichaGanador.getCtx(), fichaGanador.getJugador(), fichaGanador.getImagen());
    ficha.dibujar();
  }

  mostrarEmpate(ultimaFicha) {

    ctx.fillStyle = 'rgba(128, 128, 128, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const x = canvas.width / 2;
    const xJ1 = canvas.width * 1 / 3;
    const xJ2 = canvas.width * 2 / 3;
    const y = canvas.height * 3 / 5;

    // Dibuja el nombre del ganador debajo de la ficha
    ctx.fillStyle = 'rgba(255,255,255)';
    ctx.font = '100px Arial';
    ctx.textAlign = 'center';

    ctx.fillText("¡EMPATE!", x, y / 4 + ultimaFicha.getRadio());
    const ficha1 = new FichaJugador1(this.tablero.getRadioFicha() * 7, xJ1, y, ultimaFicha.getCtx());
    const ficha2 = new FichaJugador2(this.tablero.getRadioFicha() * 7, xJ2, y, ultimaFicha.getCtx());
    ficha1.dibujar();
    ficha2.dibujar();
  }





  // Método para iniciar el temporizador
  iniciarTemporizador() {
    console.log("Iniciando temporizador");
    this.tiempo = 10; // Reinicia el tiempo al inicio del turno
    this.actualizarTiempoEnPantalla(); // Actualiza el tiempo inicial en pantalla

    this.temporizador = setInterval(() => {
      this.reducirTiempo();
    }, 1000); // Se ejecuta cada segundo
  }

  detenerTemporizador() {
    console.log("Deteniendo temporizador");
    clearInterval(this.temporizador);
  }

  reiniciarTemporizador() {
    this.detenerTemporizador();
    //this.iniciarTemporizador();
}

  // Reduce el tiempo restante del jugador
  reducirTiempo() {
    this.tiempo--;
    this.actualizarTiempoEnPantalla();

    if (this.tiempo <= 0) {
        this.detenerTemporizador();
       this.dejarCaer();
    }
}


  actualizarTiempoEnPantalla() {
    const elementoTiempo = document.getElementById('timer');
    elementoTiempo.textContent = `Tiempo: ${this.tiempo} segundos`;
  
    console.log(`Actualizando tiempo en pantalla: ${this.tiempo}`);
  
    if (this.tiempo <= 3) {
      elementoTiempo.style.color = "red";
    } else {
      elementoTiempo.style.color = "black";
    }
  }




}
















