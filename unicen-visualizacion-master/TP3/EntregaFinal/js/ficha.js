"Use strict";

class Ficha {
    constructor(radio, xCanvas, yCanvas, fill, contexto, imagen) {
        this.radio = radio;
        this.xCanvas = xCanvas;
        this.yCanvas = yCanvas;
        this.fill = fill;
        this.resaltado = false;
        this.ctx = contexto;
        this.imagen=imagen;
        this.arrastrandose=false;
        
    }

    setFill(fill) {
        this.fill = fill;
    }

    setPosicion(x, y) {
        this.xCanvas = x;
        this.yCanvas = y;
    }


    getPosicion() {
        return { x: this.getPosicion, y: this.getPosicion };
    }
    getPosicionX() {
        return this.xCanvas;
    }

    getPosicionY() {
        return this.yCanvas;
    }

    getFill() {
        return this.fill;
    }
    getRadio() {
        return this.radio;
    }


    dibujar() {
        this.ctx.fillStyle = this.getFill();
        this.ctx.strokeStyle = 'black'; 
        this.ctx.lineWidth = 2; 
        this.ctx.beginPath();
        this.ctx.arc(this.xCanvas, this.yCanvas, this.radio, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke(); // Dibujar el borde
        this.ctx.closePath();
    
        if (this.imagen) {
           //Asi hago que el texto sea imagen
            const img = new Image();
            img.src = this.imagen;
            img.onload = () => {
               //tengo que ver como cargo la imagen y me quede centrada y de tamaño justo
                const xImagen = this.xCanvas - this.radio;
                const yImagen = this.yCanvas - this.radio;
                const anchoImagen = this.radio * 2*0.95;
                const altoImagen = this.radio * 2*0.95;
                
                // armar la imagen
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.arc(this.xCanvas, this.yCanvas, this.radio, 0, 2 * Math.PI);
                this.ctx.clip();
                this.ctx.drawImage(img, xImagen, yImagen, anchoImagen, altoImagen);
                this.ctx.closePath();
                this.ctx.restore(); 
            };
        }
        
        if (this.resaltado) {
            // Dibuja un borde resaltado alrededor de la ficha
            this.ctx.strokeStyle = "red";
            this.ctx.lineWidth = 4; // Ancho del borde resaltado
            this.ctx.stroke();
          }
   }


setResaltado(resaltado) {
    this.resaltado = resaltado;
}

//indicamos si el mousse esta dentro de la figura
isPointedInside(xCanvas, yCanvas) {
    let NuevoX = this.getPosicionX() - xCanvas;
    let NuevoY = this.getPosicionY() - yCanvas;
    return Math.sqrt(NuevoX * NuevoX + NuevoY * NuevoY) < this.getRadio();
}
//detecto si la ficha se esta arrastrando
setArrastrandose(arrastrandose) {
    this.arrastrandose = arrastrandose;
  }
  
  isArrastrandose() {
    return this.arrastrandose;
  }
}


