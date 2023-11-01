"Use strict";

    class Casillero {
      constructor(x, y, ancho, alto, radioAgujero) {
        this.x = x; 
        this.y = y; 
        this.ancho = ancho; 
        this.alto = alto; 
        this.radioAgujero = radioAgujero; // Radio del agujero circular en el centro
        this.ocupado = false;
        this.duenio = null;
      }
    
      dibujar(ctx) {
        //  casillero rectangular
        ctx.fillStyle = "rgb(0,85,164)";
        ctx.fillRect(this.x, this.y, this.ancho, this.alto);
            // Dibujamos el agujero del casillero
        const centroX = this.x + this.ancho / 2;
        const centroY = this.y + this.alto / 2;
        ctx.beginPath();
        ctx.arc(centroX, centroY, this.radioAgujero, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.closePath();
      }
    }


  