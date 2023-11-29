"use strict"


document.addEventListener("DOMContentLoaded", function () {
    var elementosAnimados = document.querySelectorAll(".testJuego1, .testJuego2, .testJuego3");
  
    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  
    function moveOnScroll() {
      elementosAnimados.forEach(function (elemento) {
        if (isInViewport(elemento)) {
          elemento.classList.add("moveUp");
        } else {
          elemento.classList.remove("moveUp");
        }
      });
    }
  
    window.addEventListener("scroll", moveOnScroll);
    //RESIZE ES CUANDO SE REDIMENSIONA LA VENTANA
    window.addEventListener("resize", moveOnScroll);

    moveOnScroll();
  });