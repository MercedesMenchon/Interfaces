"use strict"

document.addEventListener("DOMContentLoaded", function () {
    var ventana = document.querySelector(".ventana");
 

    ventana.addEventListener("scroll", function () {
        var opciones = document.querySelectorAll(".opcion");

        opciones.forEach(function (opcion) {
            var rect = opcion.getBoundingClientRect();
            var isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);

            if (!isVisible) {
                opcion.classList.add("oculto");
            } else {
                opcion.classList.remove("oculto");
            }
        });
    });
});