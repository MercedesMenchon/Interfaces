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
          // Dibujar el fondo del casillero (cuadrado azul)
          ctx.fillStyle = "rgb(0, 85, 164)";
          ctx.fillRect(this.x, this.y, this.ancho, this.alto);
      
          // Dibujar el agujero del casillero (círculo transparente)
          const centroX = this.x + this.ancho / 2;
          const centroY = this.y + this.alto / 2;
          //destination-out borra los pixeles
          ctx.globalCompositeOperation = "destination-out"; 
          ctx.beginPath();
          ctx.arc(centroX, centroY, this.radioAgujero, 0, Math.PI * 2);
          ctx.fill();
          //reestablecemos para que se saque el "borrador"
          ctx.globalCompositeOperation = "source-over"; 
          ctx.closePath();
        }
    }


  