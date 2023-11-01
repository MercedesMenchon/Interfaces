"Use strict";
const canvas = document.getElementById('tablero');
const ctx = canvas.getContext('2d');
class Ficha {
  constructor( radio, xCanvas, yCanvas) {
      this.radio = radio;
      this.xCanvas = xCanvas;
      this.yCanvas = yCanvas;
      }

  getRadio() {
      return this.radio;
  }

  dibujarFicha(ctx) {
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.beginPath();
      ctx.arc(this.xCanvas, this.yCanvas, this.getRadio(), 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
  }
}
module.exports =Ficha;


const ficha = new Ficha(20,45, 45);
ficha.dibujarFicha(ctx);

