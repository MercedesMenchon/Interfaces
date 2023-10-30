"Use strict";

class Juego {
    constructor(medidaX, medidaY) {
      this.tablero = new Tablero(medidaX, medidaY);
      this.jugador1 = new Jugador('Jugador 1', 'red');
      this.jugador2 = new Jugador('Jugador 2', 'yellow');
      this.fichaActual = null; // Ficha que se está moviendo actualmente
    }
}