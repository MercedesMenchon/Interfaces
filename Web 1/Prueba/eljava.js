"use strict"
// Determino un arreglo donde voy a guardar las solicitudes

let solicitudes = [];


//Determino una constante para tener mi API

const BASE_API = "https://62c047e9c134cf51cecc4487.mockapi.io/api/horasdeestudio/solicitudes"

//Una función asincronicapara mostrar la tabla con los contenidos de la API

async function mostrarTabla(){
  let tabla = document.querySelector('#contenidotabla');

  tabla.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif?20090907150129"/>`
  
//Obtengo los datos de la API
  let respuesta = await fetch(BASE_API);

// Convierto los datos en json
  solicitudes = await respuesta.json()

//Hago que la tabla se vea vacia
  tabla.innerHTML = ""

  //Recorro la tabla agregando los datos obtenidos en la API
  //A cada fila le agrego un boton editar que vaya con cada id 
  for(let solicitud of solicitudes){
    tabla.innerHTML += `  
    <tr>
      <td>${solicitudes.tema}</td>
      <td>${solicitudes.numero}</td>
      <td><button class="btn-editar" data-id="${solicitudes.id}">EDITAR</button></td>
    </tr>
    `;
  }
  Editarfilas()
}


function Editarfilas(){
  //Selecciono todos los botones de edicion.
 let botonesEditar = document.querySelectorAll(".btn-editar") 
 for(let btn of botonesEditar){
   btn.addEventListener("click", editarsolicitud)
 }  
}

document.addEventListener('DOMContentLoaded', mostrarTabla)

formEdit.addEventListener("submit", modificar)

async function modificar(event){
  event.preventDefault();
  // Armar el FormData
  let formData = new FormData(this)
  let datos = {
    name: formData.get("name"),
    type: formData.get("type"),
  }
  // Hacer el PUT
  let response = null;
  fieldsetEdit.disabled = true
  try{
   response = await fetch(BASE_API + "/" + formData.get("id"), {
    method:"PUT",
    headers: { 
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos)
  })
  } catch(ex) {
    console.log(ex)
  }
  if (response == null ){
    // Muestro mensaje de error
    return;
  }
  
  console.log(response.ok)
  // Oculto el formulario
  formEdit.classList.add("oculto")
  formEdit.reset();
  fieldsetEdit.disabled = false
  // Actualizar la tabla
  await mostrarTabla();
}

// Determino una funcion que sea para editar
function editarsolicitud(event){
  formEdit.classList.remove("oculto")
  const idSeleccionado = this.dataset.id;
  let solicitudSeleccionada = solicitud.find(
    function(solicitud) {
      return solicitud.id == idSeleccionado
    })
  inputEditId.value = solicitudSeleccionada.id
  inputEditName.value = solicitudSeleccionada.name
  inputEditType.value = solicitudSeleccionada.type

}
