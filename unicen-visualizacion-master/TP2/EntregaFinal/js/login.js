"use stict";
document.addEventListener("DOMContentLoaded", iniciarPagina);
document.querySelector(".formRegistrarme").classList.add("ocultarFormulario");
document.querySelector("#btn-loginIniciarSesion").classList.add(".click");
function iniciarPagina(){
    document.querySelector(".btn_menu").addEventListener("click", mostrarNav);
   
    
    function mostrarNav(){
        document.querySelector(".navegacion").classList.toggle("show");
    }

    

}




 /*LOGIN*/
 document.querySelector('#btn-loginIniciarSesion').addEventListener("click",MostrarFormLogin);
 document.querySelector('#btn-loginRegistrarme').addEventListener("click",MostrarFormLogin2);
//HAYQ QUE AGREGAR QUE CAMBIE DE CLASE EL BOTON A CLICK
   // document.querySelector("#btn-loginIniciarSesion").classList.toggle(".click");
    //document.querySelector("#btn-loginRegistrarme").classList.toggle(".click");
 function MostrarFormLogin(){
    
     document.querySelector(".formIniciarSesion").classList.remove("ocultarFormulario");
     document.querySelector(".formRegistrarme").classList.add("ocultarFormulario");
   
}
function MostrarFormLogin2(){
         document.querySelector(".formIniciarSesion").classList.add("ocultarFormulario");
     document.querySelector(".formRegistrarme").classList.remove("ocultarFormulario");
   
}

