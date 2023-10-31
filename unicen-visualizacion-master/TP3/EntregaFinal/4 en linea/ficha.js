"Use strict";

class Ficha {
    constructor(radio) {
      this.radio = radio;
      //COORDENADAS EN CANVAS
      this.x = 0; 
      this.y = 0; 
    }

  getRadio(){
    return this.radio;
  }
    dibujarFicha(ctx,x,y,anchoCelda) {
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.beginPath();
      ctx.arc(x, y, this.getRadio(), anchoCelda*this.getRadio(),0,2*Math.PI);
      ctx.fill();
      ctx.closePath();
    }

}
