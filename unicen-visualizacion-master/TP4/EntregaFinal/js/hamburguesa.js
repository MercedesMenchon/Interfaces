

document.addEventListener('DOMContentLoaded', function () {
    var hamburguesa = document.querySelector('.hamburguesa');

    hamburguesa.addEventListener('click', function () {
        this.classList.toggle('abierto');
        console.log("cambio");
    });
});