"use strict"

document.querySelector('#btn-1').addEventListener('click',function(e){
    compra(1);
});
document.querySelector('#btn-2').addEventListener('click',function(e){
    compra(2);
}
)
document.querySelector('#btn-3').addEventListener('click',function(e){
    compra(3);
})

//Determino un arreglo de objetos
let listado =[
];




function compra( cantidadcomprada){
 //Producto sea lo que ingresó el usuario
 let nuevoproducto = document.querySelector('#producto').value;
//Dfino el uevo item
let item= {
    producto: nuevoproducto,
    cantidad: cantidadcomprada,
 }

//Agrego al listado el item
    listado.push(item);
    console.log(item);
//Actualizo el listado. LO borro y lo vuelvo a ejecutar
let listadoDom= document.querySelector('.listado')
    mostrarlistado();

}
 
function mostrarlistado(){
//Actualizo el listado. LO borro y lo vuelvo a ejecutar
let listadoDom= document.querySelector('.listado')
listadoDom.innerHTML= " ";
for (const item of listado){
    listadoDom.innerHTML +="<div>" + item.cantidad + " " + item.producto + "</div>";
}
}