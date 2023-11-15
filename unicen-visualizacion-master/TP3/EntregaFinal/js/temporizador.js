let elementoTiempo = document.querySelector('.timer');
class Temporizador{

constructor(tiempoMax){
    this.tiempoMax=tiempoMax;
    this.tiempo=tiempoMax;
    this.encendido=false;
}
setTiempo(tiempoMax){
    this.tiempo=tiempoMax;
}
getTiempo(){
    return this.tiempo;
}
getEncendido(){
  return this.encendido;
}
setEncendido(boolean){
  this.encendido=boolean;
}
getTiempoMax(){
    return this.tiempoMax;
}

iniciarTemporizador() {
  console.log("Iniciando temporizador");
  
   let interval = setInterval(() => {
      this.actualizarTiempoEnPantalla(); 
      let tiempo = this.getTiempo() - 1;
      this.setTiempo(tiempo);

      
  }, 1000); // Se ejecuta cada segundo
}

finalizarTemporizador(){
  console.log("finalizar temporizador");
 this.setTiempo(0);
}


  reiniciarTemporizador() {
    this.setTiempo(this.getTiempoMax());
    this.actualizarTiempoEnPantalla();
   
  }
 
renovarTemporizador(){
  this.setEncendido(false);
  this.finalizarTemporizador();
  this.setTiempo(this.tiempoMax);
}

actualizarTiempoEnPantalla() {
  
   
    elementoTiempo.classList.add('timerShow');
  
    //console.log(`Actualizando tiempo en pantalla: ${this.tiempo}`);
  
    if (this.tiempo <= 3) {
      elementoTiempo.classList.add("red");
      elementoTiempo.innerHTML =  "<p> Tiempo: "+ this.getTiempo() +" segundos </p>";
    } 
    if(this.tiempo>3) {
      elementoTiempo.classList.remove("red");
      elementoTiempo.innerHTML =  "<p> Tiempo: "+ this.getTiempo() +" segundos </p>";
    }
    if(this.tiempo<0){
      elementoTiempo.innerHTML =  "<p> Tu turno ha finalizado</p>";
    }
  }

ocultar(){
  elementoTiempo.classList.remove('timerShow');
}

}