"Use strict";

class Ficha {
    constructor(radio, xCanvas, yCanvas, fill, contexto) {
        this.radio = radio;
        this.xCanvas = xCanvas;
        this.yCanvas = yCanvas;
        this.fill = fill;
        this.resaltado = false;
        this.ctx = contexto;
        this.resaltadoEstilo = 'red';//hacer otra cosa
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
       this.ctx.fillStyle = this.fill;
        if (this.resaltado === true) {
            ctx.strokeStille() = this.resaltadoEstilo;
            ctx.lineWidht = 4;
            this.ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(this.xCanvas, this.yCanvas, this.getRadio(), 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }


setResaltado(resaltado) {
    this.resaltado = resaltado;
}

//indicamos si el mousse esta dentro de la figura
isPointInside(xCanvas, yCanvas) {
    let NuevoX = this.getPosicionX() - xCanvas;
    let NuevoY = this.getPosicionY() - yCanvas;
    return Math.sqrt(NuevoX * NuevoX + NuevoY * NuevoY) < this.getRadio();
}
/*
    dibujarFicha(ctx) {
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.beginPath();
        ctx.arc(this.xCanvas, this.yCanvas, this.getRadio(), 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }*/

}


