"use strict" 

class FichaJugador2 extends Ficha {
    constructor(radio, xCanvas, yCanvas, contexto) {
        super(radio, xCanvas, yCanvas,'green', contexto,"jugador2",null);
        this.imagen = null;  // Definir images como propiedad de la instancia
        this.cargarImagen(); // Llamar al método para cargar las imágenes
    }
    getFill() {
        return this.fill;
    }
    cargarImagen() {
        const img = new Image();
        img.onload = () => {
            this.imagen = img; // Establece la imagen cuando se haya cargado
            this.dibujar(); // Dibuja la imagen después de que se haya cargado
        };
        img.src = "Images\\4 en linea\\sapo.png"; // Usa barras inclinadas hacia adelante para la ruta
    }
    getImagen(){
        return this.imagen.src;
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

        if (this.imagen ) { // Acceder a images usando "this"
            const img = this.imagen;
            const xImagen = this.xCanvas - this.radio;
            const yImagen = this.yCanvas - this.radio;
            const anchoImagen = this.radio * 2 * 0.95;
            const altoImagen = this.radio * 2 * 0.95;

            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.arc(this.xCanvas, this.yCanvas, this.radio, 0, 2 * Math.PI);
            this.ctx.clip();
            this.ctx.drawImage(img, xImagen, yImagen, anchoImagen, altoImagen);
            this.ctx.closePath();
            this.ctx.restore();
        }
    }
}