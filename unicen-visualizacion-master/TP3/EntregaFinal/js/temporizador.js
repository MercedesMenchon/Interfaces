let elementoTiempo = document.querySelector('#timer');
class Temporizador{

constructor(tiempoMax,juego){
    this.tiempoMax=tiempoMax;
    this.tiempo=tiempoMax;
    this.juego=juego;
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
  elementoTiempo.classList.remove('timerOcultar');
  elementoTiempo.classList.add('timerShow');
   let interval = setInterval(() => {
   
      this.actualizarTiempoEnPantalla(); 
      let tiempo = this.getTiempo() - 1;
      this.setTiempo(tiempo);
      if(this.juego.getJuegoTerminado()==true){
        this.ocultar();
        this.juego.OcultarJugadorEnPantalla();
        clearInterval(interval);
      }
      if (this.getTiempo() == 0 && this.juego.getJuegoTerminado()==false) {
        this.ocultar();
        this.juego.mostrarEmpate();
            
      }
      
  }, 1000); // Se ejecuta cada segundo
}

finalizarTemporizador(){
  console.log("finalizar temporizador");
 this.setTiempo(0);
}




actualizarTiempoEnPantalla() {
    //console.log(`Actualizando tiempo en pantalla: ${this.tiempo}`);
    elementoTiempo.classList.add('timerMostrar');
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
  elementoTiempo.classList.add('timerOcultar');  
}
}