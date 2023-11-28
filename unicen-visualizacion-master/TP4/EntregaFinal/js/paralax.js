"use strict"
document.addEventListener("DOMContentLoaded", function() {
    var parallaxElements = document.querySelectorAll('.portada');

    var prevScrollPosition = window.scrollY;

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;
        var scrollDirection = scrollPosition > prevScrollPosition ? 'down' : 'up';

        parallaxElements.forEach(function(element) {
            var speed = parseFloat(element.getAttribute('data-speed')) || 0;
            var translateY = -scrollPosition * speed;
            var translateX = scrollPosition * speed; // Desplazamiento diagonal en el eje X

            // Ajusta la dirección del movimiento según el scroll
            if (scrollDirection === 'down') {
                translateY = Math.max(translateY, -window.innerHeight);
            } else {
                translateY = Math.min(translateY, 0); // Ajusta este valor según sea necesario
            }

            // Aplica la rotación solo a la capa con la clase 'sogaIzq'
            if (element.classList.contains('sogaIzq')) {
                element.style.transform = 'translateY(' + translateY + 'px) rotate(65.403deg)';
            } else if (element.classList.contains('sogaDer')) {
                // Mueve la soga derecha en diagonal lejos del personaje rojo
                element.style.transform = 'translateX(' + translateX + 'px) translateY(' + translateY + 'px) rotate(114.6deg)';
            } else if (element.classList.contains('personajeBlanco')) {
                // Mueve el personaje blanco en diagonal lejos del personaje rojo
                element.style.transform = 'translateX(-' + translateX + 'px) translateY(' + translateY + 'px)';
            } else if (element.classList.contains('personajeNegro')) {
                // Mueve el personaje negro en diagonal lejos del personaje rojo
                element.style.transform = 'translateX(' + translateX + 'px) translateY(' + translateY + 'px)';
            } else {
                element.style.transform = 'translateY(' + translateY + 'px)';
            }
        });

        prevScrollPosition = scrollPosition;
    });

    // Animar la entrada de los elementos
    var fadeInElements = document.querySelectorAll('.portada:not(.fondo)');

    fadeInElements.forEach(function(element) {
        element.style.opacity = 0;
        element.style.transition = 'opacity 1s ease-in-out';

        var elementTop = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
            element.style.opacity = 1;
        }
    });
});