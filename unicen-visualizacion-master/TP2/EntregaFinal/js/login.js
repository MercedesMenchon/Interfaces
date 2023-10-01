"use stict";
 /*LOGIN*/
 document.querySelector('#btn-loginIniciarSesion').addEventListener("click",MostrarFormLogin);
 document.querySelector('#btn-loginRegistrarme').addEventListener("click",MostrarFormLogin);

 function MostrarFormLogin(){
    let formularios = document.querySelectorAll(".mostrarFormulario");
    for(let i=0; i<formularios.length;i++){
        formularios[i].classList.toggle("ocultarFormulario");
    } 
 }