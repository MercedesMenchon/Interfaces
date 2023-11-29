function handleScroll() {
  const personajesSection = document.querySelector('.personajes');
  const columnasPersonajes = document.querySelectorAll('.columnaPersonajes');

  const sectionTop = personajesSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight * 0.75) {
      columnasPersonajes.forEach((columna, index) => {
          setTimeout(() => {
              columna.classList.add('visible');
          }, index * 100); // Añade un pequeño retraso entre cada columna para un efecto secuencial
      });
      window.removeEventListener('scroll', handleScroll); // Desactiva el evento después de animar las columnas
  }
}

// Agregar el evento de desplazamiento
window.addEventListener('scroll', handleScroll);

// Llamar a la función una vez para verificar al cargar la página
handleScroll();