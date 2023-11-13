class Temporizador{

constructor(tiempoMax){
    this.tiempoMax=tiempoMax;
    this.tiempo=tiempoMax;
}
setTiempo(tiempoMax){
    this.tiempo=tiempoMax;
}
getTiempo(){
    return this.tiempo;
}

getTiempoMax(){
    return this.tiempoMax;
}

iniciarTemporizador() {
    console.log("Iniciando temporizador");
       
   setInterval(() => {
      
      this.actualizarTiempoEnPantalla(); 
      let tiempo = this.getTiempo() -1;
        this.setTiempo(tiempo);
 
    }, 1000); // Se ejecuta cada segundo
  }


  reiniciarTemporizador() {
   
    this.setTiempo(this.getTiempoMax());
    this.actualizarTiempoEnPantalla();
   
}

 




tiempoFinalizado(ficha,xViejo,yViejo){
ficha.setX(xViejo);
ficha.setY(yViejo);
ficha.dibujar();


}





actualizarTiempoEnPantalla() {
    const elementoTiempo = document.querySelector('.timer');
    elementoTiempo.innerHTML =  "<p> Tiempo: "+ this.getTiempo() +" segundos </p>";
  
    console.log(`Actualizando tiempo en pantalla: ${this.tiempo}`);
  
    if (this.tiempo <= 3) {
      elementoTiempo.classList.add("red");
    } 
    else {
      elementoTiempo.classList.remove("red");
    }
  }
}