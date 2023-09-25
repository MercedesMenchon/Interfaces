"use strict";

/*MENU MOVILE*/
document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {
    document.querySelector(".btn_menu").addEventListener("click", mostrarNav);

    function mostrarNav () {
    document.querySelector(".navegacion").classList.toggle("show");
    }

}


let botonAdd = document.querySelector("#btn_agregar");
botonAdd.addEventListener("click", agregar);

let table = [{
    tema:"Números naturales",
    hora:1,
}
];

function agregar() {
    console.log("Funcion Agregar");
    let tema = document.querySelector('#tema').value;
    let hora = parseInt(document.querySelector('#horas').value);
    let fila = {
        "tema":tema,
        "hora":hora
    }
    table.push(fila);
    let inputstabla = document.querySelector(".tabladinamica").querySelectorAll(".inputs");
    for(let singleInput of inputstabla) {
        singleInput.value = "";
    }
    mostrar();
}

let botonagregar3 = document.querySelector("#btn_cargar3");
botonagregar3.addEventListener("click", agregar3);

function agregar3(){
    let contenidos=[{
        tema:"Ecuacion",
        hora:1,
    },
    {
        tema:"Trigonometría",
        hora:2,
    },
    {
        tema:"Logaritmo",
        hora:1,
    }
    ]
    for (let item of contenidos){
        table.push(item);
    }
    mostrar();
} 

let botonremove = document.querySelector("#btn_eliminar");
botonremove.addEventListener("click", eliminar_ultimo);

function eliminar_ultimo() {
    table.pop();
    mostrar();
}

let botonvaciar = document.querySelector("#btn_vaciar");
botonvaciar.addEventListener("click", vaciar);

function vaciar (){
    table=[];
    let contenido = document.querySelector("#tabla"); 
    contenido.innerHTML = ENCABEZADO_TABLA; 
    for (let fila of table) {
        contenido.innerHTML = "<thead>" + "<td>" + "Tema" + "</td>" + "<td>" + "Cantidad de horas" +"</td>" +"</thead>";
    }
    document.querySelector("#costo").innerHTML= "";  
}

let ENCABEZADO_TABLA = `<thead>
    <td>Tema</td>
    <td>Cantidad de horas</td>
    </thead>`

function mostrar() {

    let contenido = document.querySelector("#tabla"); 
    contenido.innerHTML = ENCABEZADO_TABLA; 
    for (let fila of table) {
        contenido.innerHTML += "<tr>" + "<td>"+fila.tema+"</td>"+"<td>"+fila.hora+"</td>"+"</tr>"
    }
}

let botonprecio = document.querySelector("#btn_precio");
botonprecio.addEventListener("click", calcular_precio); 

const valor=500;

function calcular_precio(){
    let suma=0;
    for(let fila of table){
        suma+= fila.hora;
    }
    let precio = suma*valor;
    document.querySelector("#costo").innerHTML= "El precio es de: $" + precio;
}
mostrar();

let captcha = {
    "n1":0,
    "n2":0
}

obtener_operacion();

function obtener_operacion(){
    captcha.n1= Math.floor((Math.random() * 9) + 1);
    captcha.n2= Math.floor((Math.random() * 9) + 1);
    document.querySelector("#numero1").innerHTML=captcha.n1;
    document.querySelector("#numero2").innerHTML=captcha.n2;
}

let validar = document.querySelector("#btn-validar");
validar.addEventListener("click",validacion);
function validacion(){
    let solucion = captcha.n1+captcha.n2;
    let suma = parseInt(document.querySelector(".captcha").value);
        if (suma === solucion){
            document.querySelector("#resultado").innerHTML= "Correcto"; 
            document.querySelector("#btn-enviar").classList.remove("oculto");
         }
         else{
            document.querySelector("#resultado").innerHTML= "Respuesta incorrecta es: " + solucion;
            document.querySelector("#refrescar").classList.remove("oculto");
         }
    }

let btn_refrescar = document.querySelector("#refrescar");
btn_refrescar.addEventListener("click", refrescar);

function refrescar(){
    obtener_operacion();
    document.querySelector("#resultado").innerHTML= "";
    document.querySelector("#refrescar").classList.add("oculto");
    document.querySelector(".captcha").value=""
}

let form = document.querySelector("#form");
form.addEventListener("submit",solicitarturno);

function solicitarturno(){
    e.preventDefault();
    let formData = new FormData (form);
    let nombre = formData.get('nombre');
    let email = formData.get('mail');
    let celular = formData.get('celular');
    let edad = formData.get('edad');
}