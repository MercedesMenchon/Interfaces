document.addEventListener("DOMContentLoaded", function () {
    // Ajusta la velocidad del duende
    var velocidadDuende = 0.1;

    // Agrega un evento de scroll al documento
    window.addEventListener("scroll", function () {
        // Calcula la posición actual del scroll
        var scrollPos = window.scrollY;

        // Calcula la nueva posición del duende con un efecto de movimiento lento
        var nuevaPosicion = scrollPos * velocidadDuende;

        // Aplica la nueva posición al duende
        document.querySelector('.duendeVerde').style.left = nuevaPosicion + "px";
    });
    
});