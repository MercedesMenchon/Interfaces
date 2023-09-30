"use stict";
/*Menu*/

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
    document.querySelector(".btn_menu").addEventListener("click", mostrarNav);
   
    function mostrarNav(){
        document.querySelector(".navegacion").classList.toggle("show");
    }
}


 //document.querySelectorAll(".Card").addEventListener("mouseover", hacerHoverCarrito);
 
 //DEFINOE EL JSON


//CARGO EL JSON
 let cards = document.querySelectorAll(".card");
 let payCards =document.querySelectorAll(".payCard");
 let cardEstadoCarrito=[];
 for(let i =0;i<payCards.length;i++){

    let nuevoPayCard ={
        card: payCards[i],
        compraCard: false
    }
cardEstadoCarrito.push(nuevoPayCard);
console.table(cardEstadoCarrito);
cardEstadoCarrito[i].card.addEventListener("mouseover", hacerHoverCarrito);
 }


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

//document.querySelector(".freeCard").addEventListener("mouseover", hacerHoverfav);
//document.querySelector(".freeCard").addEventListener("mouseover", playJuego);




function hacerHoverCarrito(){

   if(!this.compraCard){
    this.querySelector("#btn-addCarrito").classList.toggle("carritoCompraShow");
   this.querySelector("#btn-addCarrito").addEventListener("click", modificarCarrito);
       }
   if(this.compraCard){
    this.querySelector("#btn-dropCarrito").addEventListener("click", modificarCarrito);
       
}
   this.addEventListener("mouseout", hacerHoverCarrito);
}
//ARREGLAR
function modificarCarrito(){
    //this.compraCard=!this.compraCard;
    this.querySelector("#btn-addCarrito").classList.toggle("carritoCompraShow");
this.querySelector("#btn-dropCarrito").classList.toggle("carritoCompraShow");
} 






//function playJuego(){
  //  document.querySelector("#btn-play").classList.toggle("likeShow"); 
    //document.querySelector("#btn-play").addEventListener("click",addLike);
 //document.querySelector(".btn-play").addEventListener("mouseout", hacerHoverfav);
//}
