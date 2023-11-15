"use strict";

    class Casillero {
      constructor(x, y, ancho, alto, radioAgujero) {
        this.x = x; 
        this.y = y; 
        this.ancho = ancho; 
        this.alto = alto; 
        this.radioAgujero = radioAgujero; // Radio del agujero circular en el centro
        this.ficha=null;
        this.ocupado=false;
      }
     getOcupado(){
        return this.ocupado;
      }
      setOcupado(boolean){
        this.ocupado=boolean;
      }

 setFicha(Ficha){
      // if (ficha.getPosicionX()==this.getCentroX() && ficha.getPosicionY()==this.getCentroY()) {
      this.ficha=Ficha;
       
       }

    getAncho(){
      return this.ancho;
    }
        getFicha(){
          return this.ficha;
        }

      
      setX(x){
        this.x=x;
      }
      setY(y){
        this.y=y;
      }
      getX(){
        return this.x;
      }
      getY(){
        return this.y;
      }
    getCentroX(){
      return  this.x + this.ancho / 2;
    }
    getCentroY(){
      return this.y + this.alto / 2;
    }
      dibujar(ctx) {
        // Dibujar el fondo del casillero (cuadrado azul)
        ctx.fillStyle = "rgb(0, 85, 164)";
        ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    
        //destination-out borra los pixeles
        ctx.globalCompositeOperation = "destination-out"; 
        ctx.beginPath();
        ctx.arc(this.getCentroX(), this.getCentroY(), this.radioAgujero, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        //reestablecemos para que se saque el "borrador"
        ctx.globalCompositeOperation = "source-over"; 
        ctx.closePath();
      
      }
reiniciar(){
  this.setOcupado(false);
}
    }


  