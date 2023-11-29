document.addEventListener("DOMContentLoaded", function () {
    var barraLoading = document.querySelector(".barraLoading");
    var arania = document.querySelector(".arania");
    var porcentaje = document.querySelector(".porcentaje");

    setTimeout(function () {
        barraLoading.style.width = "100%";
        arania.style.left = (800 - barraLoading.offsetWidth + arania.offsetWidth) + "px";
        porcentaje.innerText = "100%";
    
    }, 1000); // Inicia la carga después de 1 segundo

    setTimeout(function () {
        var porcentajeValue = 0;
        var interval = setInterval(function () {
            porcentajeValue += 1;
            porcentaje.innerText = porcentajeValue + "%";

            if (porcentajeValue >= 100) {
                clearInterval(interval);
               window.location.href = 'index.html';
            }
            
        }, 80); // Ajusta la velocidad de aumento del porcentaje
        
    }, 1000); // Inicia la carga después de 1 segundo
});