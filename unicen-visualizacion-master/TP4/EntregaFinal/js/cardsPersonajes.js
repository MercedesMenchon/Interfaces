document.addEventListener("DOMContentLoaded", function () {
    var columnasPersonajes = document.querySelectorAll(".columnaPersonajes");

    function handleVisibility() {
      columnasPersonajes.forEach(function (columna) {
        if (isElementInViewport(columna)) {
          columna.classList.add("visible");
        } else {
          columna.classList.remove("visible");
        }
      });
    }

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;

      var upperThreshold = windowHeight * 0.5;
      var lowerThreshold = windowHeight * 0.5;

      return (
        rect.top >= -lowerThreshold &&
        rect.bottom <= (windowHeight + upperThreshold)
      );
    }

    window.addEventListener("scroll", handleVisibility);
    window.addEventListener("resize", handleVisibility);

    // Verificar la visibilidad inicial al cargar la página
    handleVisibility();
  });