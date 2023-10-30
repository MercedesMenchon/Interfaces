"Use strict";

class Ficha {
    constructor(jugador, radio) {
      this.jugador = jugador;
      this.radio = radio;
      //COORDENADAS EN CANVAS
      this.x = 0; 
      this.y = 0; 
    }

  getRadio(){
    return this.radio;
  }
    dibujarFicha(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
      ctx.fillStyle = this.jugador.color;
      ctx.fill();
      ctx.closePath();
    }

}