"use strict"

document.querySelector('#btn-agregar').addEventListener('click',enlistar);
document.querySelector('#btn-promedio').addEventListener('click', promediar);

let lista =[];
let listado= "";
function enlistar(){
    let calificacion = parseInt(document.querySelector("#nota").value);
    lista.push(calificacion);
    console.log(lista);
 
    listado = document.querySelector("#item").innerHTML= listado + "<li>" + calificacion + "</li>";

}

function promediar(){
    let suma=0;
    for(var i=0;i<lista.length;i++){
        suma= suma +lista[i];
        console.log(suma);
        let promedio= suma/(lista.length);
        document.querySelector("#promedio").innerHTML=promedio;
    }
}