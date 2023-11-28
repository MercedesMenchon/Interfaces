document.addEventListener("DOMContentLoaded", function () {
    const poder1 = document.querySelector('.poder1');
    const poder2 = document.querySelector('.poder2');
    const poder3 = document.querySelector('.poder3');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
   
        // rango donde se produce el efecto en la pantalla
        const startAnimation = 4500;
        const endAnimation = 5404;

        if (scrollPosition >= startAnimation && scrollPosition <= endAnimation) {
            // Agrega la clase para activar los keyframes
            poder1.classList.add('animate');
            poder2.classList.add('animate');
            poder3.classList.add('animate');
        } else {
            // Si está fuera del rango, quita la clase
            poder1.classList.remove('animate');
            poder2.classList.remove('animate');
            poder3.classList.remove('animate');
        }
    });
});