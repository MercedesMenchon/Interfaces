"use stict";

document.querySelector(".formRegistrarme").classList.add("ocultarFormulario");
document.querySelector("#btn-loginIniciarSesion").classList.add("click");

 /*LOGIN*/
 document.querySelector('#btn-loginIniciarSesion').addEventListener("click",MostrarFormIniciarSesion);
 document.querySelector('#btn-loginRegistrarme').addEventListener("click",MostrarFormRegistrarme);

 function MostrarFormIniciarSesion(){
    
     document.querySelector(".formIniciarSesion").classList.remove("ocultarFormulario");
     document.querySelector(".formRegistrarme").classList.add("ocultarFormulario");
     document.querySelector("#btn-loginIniciarSesion").classList.add("click");
     document.querySelector("#btn-loginRegistrarme").classList.remove("click");
}
function MostrarFormRegistrarme(){
         document.querySelector(".formIniciarSesion").classList.add("ocultarFormulario");
     document.querySelector(".formRegistrarme").classList.remove("ocultarFormulario");
     document.querySelector("#btn-loginIniciarSesion").classList.remove("click");
     document.querySelector("#btn-loginRegistrarme").classList.add("click");
}
