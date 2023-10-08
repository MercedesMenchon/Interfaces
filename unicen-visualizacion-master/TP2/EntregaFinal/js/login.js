"use stict";

document.querySelector(".formRegistrarme").classList.add("hidden");
document.querySelector("#btn-loginIniciarSesion").classList.add("click");

/*LOGIN*/
document.querySelector('#btn-loginIniciarSesion').addEventListener("click", MostrarFormIniciarSesion);
document.querySelector('#btn-loginRegistrarme').addEventListener("click", MostrarFormRegistrarme);

function MostrarFormIniciarSesion() {

    document.querySelector(".formIniciarSesion").classList.remove("hidden");
    document.querySelector(".formRegistrarme").classList.add("hidden");
    document.querySelector("#btn-loginIniciarSesion").classList.add("click");
    document.querySelector("#btn-loginRegistrarme").classList.remove("click");
}
function MostrarFormRegistrarme() {
    document.querySelector(".formIniciarSesion").classList.add("hidden");
    document.querySelector(".formRegistrarme").classList.remove("hidden");
    document.querySelector("#btn-loginIniciarSesion").classList.remove("click");
    document.querySelector("#btn-loginRegistrarme").classList.add("click");
}

let loading = document.querySelectorAll(".loading");
for(let i=0; i< loading.length;i++){
 loading[i].addEventListener("click", inicioLoading);
}
function inicioLoading() {
    document.querySelector(".espera").classList.toggle("show");
    var barra = document.querySelector(".progress-bar");
    var width = 0;
    var id = setInterval(frame, 50);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            barra.style.width = width + '%';
            document.querySelector(".text-porcentaje").innerHTML = width + '%';
        }
        setTimeout(irAInicio, 5500);
    }
}
    function irAInicio() {
        location.href = 'index.html';
    }

 