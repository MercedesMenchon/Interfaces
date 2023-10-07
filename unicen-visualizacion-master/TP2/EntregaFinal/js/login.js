"use stict";

document.querySelector(".formRegistrarme").classList.add("hidden");
document.querySelector("#btn-loginIniciarSesion").classList.add("click");

 /*LOGIN*/
 document.querySelector('#btn-loginIniciarSesion').addEventListener("click",MostrarFormIniciarSesion);
 document.querySelector('#btn-loginRegistrarme').addEventListener("click",MostrarFormRegistrarme);

 function MostrarFormIniciarSesion(){
    
     document.querySelector(".formIniciarSesion").classList.remove("hidden");
     document.querySelector(".formRegistrarme").classList.add("hidden");
     document.querySelector("#btn-loginIniciarSesion").classList.add("click");
     document.querySelector("#btn-loginRegistrarme").classList.remove("click");
}
function MostrarFormRegistrarme(){
         document.querySelector(".formIniciarSesion").classList.add("hidden");
     document.querySelector(".formRegistrarme").classList.remove("hidden");
     document.querySelector("#btn-loginIniciarSesion").classList.remove("click");
     document.querySelector("#btn-loginRegistrarme").classList.add("click");
}
