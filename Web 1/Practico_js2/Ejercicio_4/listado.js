"use strict"

let compra=[];

let listado = document.querySelector('#agregar').addEventListener('click',enlistar)


let list= "";
function enlistar(){
    
        let ingreso = document.querySelector('#producto').value; 
        if(compra.length<10){
            if(list.foreach!=ingreso){
        compra.push(ingreso);
       
        list = document.querySelector('#lista').innerHTML=list + "<li>" + ingreso + "</li>";
        }}
        else{
            document.querySelector('#limite').innerHTML="NO SE PUEDEN AGREGAR MAS"
        }
}

