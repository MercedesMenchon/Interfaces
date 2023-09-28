"use stict";
/*Menu*/

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
    document.querySelector(".btn_menu").addEventListener("click", mostrarNav);

    function mostrarNav(){
        document.querySelector(".navegacion").classList.toggle("show");
    }
}



/* CARD */

document.querySelector('#btn-addLike').addEventListener("click", darLike());


function darLike(){
    document.querySelector("#btn-addLike").classList.toggle(".likeShow");
    
}