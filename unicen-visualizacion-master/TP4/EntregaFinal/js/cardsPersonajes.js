"use strict"
function handleScroll() {
  const personajesSection = document.querySelector('.personajes');
  const columnasPersonajes = document.querySelectorAll('.columnaPersonajes');

  const sectionTop = personajesSection.getBoundingClientRect().top;
  const sectionBottom = personajesSection.getBoundingClientRect().bottom;

  // Verifica si la sección está al menos parcialmente visible en la ventana
  if (sectionTop < window.innerHeight && sectionBottom > 0) {
      columnasPersonajes.forEach((columna, index) => {
          setTimeout(() => {
              columna.classList.add('visible');
          }, index * 100); // Añade un pequeño retraso entre cada columna para un efecto secuencial
      });
  } else {
      // Si la sección no está visible, quita la clase 'visible' para permitir futuras animaciones
      columnasPersonajes.forEach(columna => {
          columna.classList.remove('visible');
      });
  }
}

// Agregar el evento de desplazamiento
window.addEventListener('scroll', handleScroll);