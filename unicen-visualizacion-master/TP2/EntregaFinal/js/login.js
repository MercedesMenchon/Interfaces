"use stict";
document.addEventListener("DOMContentLoaded", iniciarPagina);
document.querySelector(".formRegistrarme").classList.add("ocultarFormulario");
document.querySelector("#btn-loginIniciarSesion").classList.add("click");
function iniciarPagina(){
    document.querySelector(".btn_menu").addEventListener("click", mostrarNav);
   
    
    function mostrarNav(){
        document.querySelector(".navegacion").classList.toggle("show");
    }

    

}




 /*LOGIN*/
 document.querySelector('#btn-loginIniciarSesion').addEventListener("click",MostrarFormIniciarSesion);
 document.querySelector('#btn-loginRegistrarme').addEventListener("click",MostrarFormRegistrarme);

 function MostrarFormIniciarSesion(){
    
     document.querySelector(".formIniciarSesion").classList.remove("ocultarFormulario");
     document.querySelector(".formRegistrarme").classList.add("ocultarFormulario");
     CambiarBotonesLogin();
}
function MostrarFormRegistrarme(){
         document.querySelector(".formIniciarSesion").classList.add("ocultarFormulario");
     document.querySelector(".formRegistrarme").classList.remove("ocultarFormulario");
     CambiarBotonesLogin();
}
 function CambiarBotonesLogin(){
 document.querySelector("#btn-loginIniciarSesion").classList.toggle("click");
document.querySelector("#btn-loginRegistrarme").classList.toggle("click");
 }
