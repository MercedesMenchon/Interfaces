"use stict";
/*Menu*/

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
    document.querySelector(".btn_menu").addEventListener("click", mostrarNav);
   
    function mostrarNav(){
        document.querySelector(".navegacion").classList.toggle("show");
    }
}


document.querySelector(".card").addEventListener("mouseover", hacerHoverCarrito);
document.querySelector(".card").addEventListener("mouseover", hacerHoverfav);


/* CARD */
var compraCard=false;

function hacerHoverCarrito(){
   if(!compraCard){
    document.querySelector("#btn-addCarrito").classList.toggle("carritoCompraShow");
    document.querySelector("#btn-addCarrito").addEventListener("click", modificarCarrito);
       }
   if(compraCard){
    document.querySelector("#btn-dropCarrito").addEventListener("click", modificarCarrito);
  }
   document.querySelector(".card").addEventListener("mouseout", hacerHoverCarrito);
}


function modificarCarrito(){
    compraCard=!compraCard;
    document.querySelector("#btn-addCarrito").classList.toggle("carritoCompraShow");
    document.querySelector("#btn-dropCarrito").classList.toggle("carritoCompraShow");
}



function hacerHoverfav(){
 
        document.querySelector("#btn-addLike").classList.toggle("likeShow"); 
        document.querySelector("#btn-addLike").addEventListener("click",addLike);
     document.querySelector(".card").addEventListener("mouseout", hacerHoverfav);
 }
 function addLike(){
       document.querySelector("#btn-addLike").classList.toggle("likeShowFijo");
}