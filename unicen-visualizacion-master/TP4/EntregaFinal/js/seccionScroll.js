<<<<<<< Updated upstream
"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var opciones = document.querySelectorAll('.opcion');
    var ventana = document.querySelector('.ventana');
  
    ventana.addEventListener('scroll', function () {
      opciones.forEach(function (opcion) {
        var columnaIzquierda = opcion.querySelector('.columnaIzquierda');
       
        var rect = opcion.getBoundingClientRect();
  
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          columnaIzquierda.classList.remove('transparencia');
       
        } else {
          columnaIzquierda.classList.add('transparencia');
        
        }
      });
=======
"use strict"
document.addEventListener('DOMContentLoaded', function () {
    var opciones = document.querySelectorAll('.opcion');
    var ventana = document.querySelector('.ventana');

    ventana.addEventListener('scroll', function () {
        opciones.forEach(function (opcion) {
            var columnaIzquierda = opcion.querySelector('.columnaIzquierda');
            var columnaDerecha = opcion.querySelector('.columnaDerecha');

            var rect = opcion.getBoundingClientRect();

            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                columnaIzquierda.classList.remove('oculta');
            } else {
                columnaIzquierda.classList.add('oculta');
            }
        });
>>>>>>> Stashed changes
    });
  });