"use stict";
/*Menu*/

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
    document.querySelector(".btn_menu").addEventListener("click", mostrarNav);
   
    function mostrarNav(){
        document.querySelector(".navegacion").classList.toggle("show");
    }
}

/*CARDS AGREGAR FAVORITO*/ 
 
 let cards = document.querySelectorAll(".card");
 let botonesCarritos =[];
 let botonesAddCarrito = document.querySelectorAll("#btn-addCarrito");
 let botonesDropCarrito = document.querySelectorAll("#btn-dropCarrito");





 for(let i =0;i<cards.length;i++){
    cards[i].addEventListener("mouseover", hacerHoverfav);
 }
console.log(cards);

function hacerHoverfav(){
    
    let botonlike =  this.querySelector("#btn-addLike");
    botonlike.classList.toggle("likeShow"); 
   this.querySelector("#btn-addLike").addEventListener("click",addLike);
 this.addEventListener("mouseout", hacerHoverfav);

function addLike(){
    botonlike.classList.toggle("likeShowFijo");
}
}

/*CARDS AGREGAR AL CARRITO*/ 

let payCards =document.querySelectorAll(".payCard");

for(let i=0; i< payCards.length; i++){
    payCards[i].addEventListener("mouseover", hacerHoverCarrito);
    payCards[i].addEventListener("mouseout", hacerHoverCarrito);
    payCards[i].querySelector("#btn-addCarrito").addEventListener("click", modificarCarrito);
    payCards[i].querySelector("#btn-dropCarrito").addEventListener("click", modificarCarrito);
 }

   function hacerHoverCarrito(){
        this.querySelector("#btn-addCarrito").classList.toggle("carritoCompraShow");

}

function modificarCarrito(){
    this.parentNode.querySelector("#btn-dropCarrito").classList.toggle("carritoCompraShow");
 }


/*CARDS FREE*/
let freeCards =document.querySelectorAll(".freeCard");

for(let i=0; i< freeCards.length; i++){
    freeCards[i].addEventListener("mouseover", hacerHoverPlay);
    freeCards[i].addEventListener("mouseout", hacerHoverPlay);

}

function hacerHoverPlay(){
   this.querySelector("#btn-play").classList.toggle("play");
 }

