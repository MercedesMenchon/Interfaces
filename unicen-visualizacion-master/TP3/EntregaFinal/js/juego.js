"use strict";

class Juego {
  constructor(tablero, canvas, ctx, temporizador) {
    this.fichas = [];
    this.tablero = tablero;
    this.ctx = ctx;
    this.canvas = canvas;
    this.fichaResaltada = null; 
    this.mousedown = false;
<<<<<<< Updated upstream
    this.jugadores = ["Mosca", "Sapo"];
    this.addFichas();
=======
    this.jugadores = ["jugador1", "jugador2"];
>>>>>>> Stashed changes
    this.juegoTerminado = false; 
    this.jugadorActual = this.jugadores[0];
    this.juegoIniciado=false;
   this.temporizador=temporizador;
 
  }

Iniciar(){
  this.addFichas();
  this.setjuegoIniciado(true);
}


setJuegoTerminado(boolean){
  this.juegoTerminado=boolean;
}
getjuegoIniciado(){
  return this.juegoIniciado;
}
setjuegoIniciado(boolean){
  this.juegoIniciado=boolean;
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
  getFichas(){
    return this.fichas;
  }
  addFichas() {
    this.fichas=[];
    let posy = 0;
    if (this.fichas.length < this.tablero.getCantFichas()) {
      //setTimeOut(addFicha, 333);
     
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
    this.tablero.dibujarFlechas();
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

   
    let fichaArrastrada = null;
 
    this.canvas.addEventListener('mousedown', (event) => {
      if(this.getjuegoIniciado()){
      const rect = this.canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

           for (let i = this.getFichas().length - 1; i >= 0; i--) {
        const ficha = this.getFichas()[i];
     console.log(this.getFichas().length);
        if (!ficha.colocada && ficha.isPointedInside(x, y) && ficha.getJugador() == this.jugadorActual ) {
         
          fichaArrastrada = ficha;
     
         if ( this.temporizador.getEncendido()) {
          this.temporizador.setEncendido(true);
          document.querySelector(".timer").classList.add('timerShow');
          this.temporizador.iniciarTemporizador();
          console.log("Iniciar temporizador");
          
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
    }});

    this.canvas.addEventListener('mousemove', (event) => {
      if(this.getjuegoIniciado()){
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

       if(fichaArrastrada.getJugador() != this.getJugadorActual()){
        fichaArrastrada=null;
       }
      
      }
    
      if(this.temporizador.getTiempo()<=0){
        fichaArrastrada=null;
        this.getTurno();
        this.temporizador.reiniciarTemporizador();
      }
  }});
    
    this.canvas.addEventListener('mouseup', (event) => {
      if(this.getjuegoIniciado()){
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
          this.temporizador.reiniciarTemporizador();
          fichaArrastrada = null;
   
         
          this.dibujarTablero();
          setTimeout(() => {
            this.controlGanador(fila, columna);
          }, 400);
          
         
        }
        else{
          fichaArrastrada=null;
        }
      }
        this.dibujarTablero();
        if(this.temporizador.getTiempo()==0){
          fichaArrastrada=null;
          this.getTurno();
          this.temporizador.reiniciarTemporizador();
        }

        if(this.juegoTerminado){
this.temporizador.finalizarTemporizador();
        }
  }});
  
  }

dibujarCaida(ficha, x1, y1, x2, y2) {
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
  //console.log(ficha.getPosicionY());
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

    while (fila >= 0 && this.tablero.matriz[fila][columna].getFicha()) {
      console.log("entrooo");
      console.log(this.tablero.matriz[fila][columna].getFicha());
      fila--;
    }
 
    return fila;

  }




  getColumnaDeCaidaFicha(x) {
    return Math.floor((x - this.tablero.getEspacioBlancoX()) / this.tablero.getAnchoCelda());
  }




  hayGanador(fila, columna) {
    const recorrido= (this.tablero.getCantLinea()-1);
const cantLinea = this.tablero.getCantLinea();
    let jugador = this.tablero.matriz[fila][columna].getFicha().getJugador();
    let contador = 0;
    for (let i = Math.max(0, columna - recorrido); i <= Math.min(this.tablero.getColumnas() - 1, columna + recorrido); i++) {
    //  console.log("la i:");
     // console.log(i);
      if (this.tablero.matriz[fila][i].getFicha() != null && this.tablero.matriz[fila][i].getFicha().getJugador() === jugador) {
        contador++;

        if (contador === cantLinea) {

          this.juegoTerminado = true; // Marca el juego como terminado
          return true;
        }
      } else {
        contador = 0;

      }
    }

    // Comprueba la línea vertical
    contador = 0;
    for (let i = Math.max(0, fila - recorrido); i <= Math.min(this.tablero.getFilas() - 1, fila + recorrido); i++) {
      if (this.tablero.matriz[i][columna].getFicha() != null && this.tablero.matriz[i][columna].getFicha().getJugador() === jugador) {
        contador++;
        if (contador === cantLinea) {
          console.log("gane");
          this.juegoTerminado = true;

          return true;
        }
      } else {
        contador = 0;
      }
    }

    // Verificar en línea diagonal descendente
    for (let fila = 0; fila < this.tablero.getFilas() -recorrido; fila++) {
      for (let columna = 0; columna < this.tablero.getColumnas() - recorrido; columna++) {
        let contador = 0;
        for (let i = 0; i < cantLinea; i++) {
          if (
            this.tablero.matriz[fila+i][columna+i].getFicha() !== null &&
            this.tablero.matriz[fila + i][columna + i].getFicha().getJugador() === jugador
          ) {
            contador++;
            if (contador === cantLinea) {
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
    for (let fila = recorrido; fila < this.tablero.getFilas(); fila++) {
      for (let columna = 0; columna < this.tablero.getColumnas() -recorrido; columna++) {
        let contador = 0;
        for (let i = 0; i < cantLinea; i++) {
          if (
            this.tablero.matriz[fila - i][columna + i].getFicha() !== null &&
            this.tablero.matriz[fila - i][columna + i].getFicha().getJugador() === jugador
          ) {
            contador++;
            if (contador === cantLinea) {

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
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const x = this.canvas.width / 2;
    const y = this.canvas.height * 3 / 5;

    // Dibuja el nombre del ganador debajo de la ficha
    ctx.fillStyle = 'rgba(255,255,255)';
    ctx.font = '100px Arial';
    ctx.textAlign = 'center';

    ctx.fillText("¡GANASTE!", x, y / 4 + fichaGanador.getRadio());
    const ficha = new Ficha(fichaGanador.getRadio() * 10, x, y, fichaGanador.getFill(), fichaGanador.getCtx(), fichaGanador.getJugador(), fichaGanador.getImagen());
    ficha.dibujar();
    this.temporizador.ocultar();
    this.temporizador.finalizarTemporizador();

  }

  mostrarEmpate(ultimaFicha) {

    ctx.fillStyle = 'rgba(128, 128, 128, 0.7)';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    const x = this.canvas.width / 2;
    const xJ1 = this.canvas.width * 1 / 3;
    const xJ2 = this.canvas.width * 2 / 3;
    const y = this.canvas.height * 3 / 5;

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



 
  


}




  














