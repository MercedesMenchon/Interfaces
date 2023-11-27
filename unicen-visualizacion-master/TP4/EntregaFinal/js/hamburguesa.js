document.addEventListener('DOMContentLoaded', function () {
    var hamburguesa = document.querySelector('.hamburguesa');
    var menuItems = document.querySelectorAll('.menu');

    hamburguesa.addEventListener('click', function () {
        this.classList.toggle('abierto');

        // Oculta todos los elementos
        menuItems.forEach(function (elemento) {
            elemento.classList.remove('desplegado');
        });

        // Muestra el primer elemento
        if (this.classList.contains('abierto')) {
            menuItems[0].classList.add('desplegado');
            var index = 1;

            // Función para mostrar los elementos de a uno con un intervalo de tiempo
            function mostrarSiguiente() {
                if (index < menuItems.length) {
                    menuItems[index].classList.add('desplegado');
                    index++;
                    console.log("menu apareciendo");
                    setTimeout(mostrarSiguiente, 400); // 400 ms de intervalo entre elementos
                }
            }

            // Inicia la función de mostrarSiguiente después de un breve tiempo
            setTimeout(mostrarSiguiente, 100);
        }
    });
});