"use strict";


let btn1 = document.querySelector("#btn-1");
btn1.addEventListener("click", function(e){compra(1)});

let btn2 = document.querySelector("#btn-2");
btn2.addEventListener("click", function(e){compra(2)});

let btn3 = document.querySelector("#btn-3");
btn3.addEventListener("click",function(e){compra(3)});
let listado = [];

function compra (int) {
let productoNuevo= document.querySelector("#producto").value;
    let itemNuevo = {
        "producto": productoNuevo,
        "cantidad":int
    };

    listado.push(itemNuevo);
    
   mostrar();
}

function mostrar(){
    let listadoDom = document.querySelector("#listados");
listadoDom.innerHTML=" ";
for(let i =0; i<listado.length; i++){
    
        listadoDom.innerHTML+= "<li>"+ listado[i].producto+ "    " + listado[i].cantidad + "</li>";
    
}
console.log(listado);
}