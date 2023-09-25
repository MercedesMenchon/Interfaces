"use strict";

/*MENU MOBILE*/
document.addEventListener("DOMContentLoaded", iniciarPagina);

const BASE_API = "https://62c047e9c134cf51cecc4487.mockapi.io/api/horasdeestudio/solicitudes"
function iniciarPagina() {
    document.querySelector(".btn_menu").addEventListener("click", mostrarNav);

    function mostrarNav () {
    document.querySelector(".navegacion").classList.toggle("show");
    }

    let botonAdd = document.querySelector("#btn_agregar");
    botonAdd.addEventListener("click", agregar);
  
    
    let botonprecio = document.querySelector("#btn_precio");
    botonprecio.addEventListener("click", calcular_precio); 
    
    let formEdit = document.querySelector("#formEdit");
    //Costo de la hora de clase:
    const valor=500;
    
    // Determino un arreglo donde voy a guardar las solicitudes
    
    let solicitudes = [];
    
    // Agregar manualmente las horas que se solicitan

    async function agregar(event){
     
      // Armar el FormData
      let nuevotema = document.querySelector("#tema").value; 
      let nuevonumero = document.querySelector("#horas").value; 
      let datos = {
        tema: nuevotema,
        numero: nuevonumero,
      }
      // Hacer el PUT
      let response = null;
      // Que el fieldset no se pueda modificar mientra espero la respuesta
      try{
       response = await fetch(BASE_API , {
        method:"POST",
        headers: { 
          "Content-Type": "application/json"
        },
        //Envio los datos que quiero modifiar
        body: JSON.stringify(datos)
      })
      } catch(ex) {
        console.log(ex)
        let aviso = document.querySelector("#aviso")
        aviso.innerHTML="No se ha podido agregar lo ingresado";
      }
      if (response == null ){
        let aviso = document.querySelector("#aviso")
        aviso.innerHTML="No se ha podido modificar lo ingresado";
        //Para cortar la ejecucion
        return;
      }
      let bodyTable = document.querySelector('tbody');
      bodyTable.innerHTML='';
      await mostrarTabla();

    }

    

    
    
    
    let ENCABEZADO_TABLA = `<thead>
        <td>Tema</td>
        <td>Cantidad de horas</td>
        </thead>`
    
    

    
    //Calculo el precio de las horas solicitadas
    function calcular_precio(){
        let suma=0;
        for(let fila of solicitudes){
            suma+= parseInt(fila.numero);
        }
        let precio = suma*valor;
        document.querySelector("#costo").innerHTML= "El precio es de: $" + precio;
    }
    let bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML='';
    mostrarTabla();

    
    
    //CAPTCHA
    
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
    
    
    
    // Determino una funcion que sea para editar
    function editarsolicitud(event){
        formEdit.classList.remove("oculto")
        const idSeleccionado = this.dataset.id;
        let solicitudSeleccionada = solicitudes.find(
          function(solicitud) {
            return solicitud.id == idSeleccionado
          })
        inputEditId.value = solicitudSeleccionada.id
        inputEditTema.value = solicitudSeleccionada.tema
        inputEditNumero.value = solicitudSeleccionada.numero
      }
    
   
    //Una función asincronica para mostrar la tabla con los contenidos de la API
  
    async function mostrarTabla(){
        let tabla = document.querySelector("#tabla");
        let esperatabla= document.querySelector("#espera");
        esperatabla.innerHTML= `<img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif?20090907150129"/>`
      
      //Obtengo los datos de la API
        let respuesta = await fetch(BASE_API);
      
      // Convierto los datos en json
        solicitudes = await respuesta.json()
      
    esperatabla.innerHTML =''
      //Recorro la tabla agregando los datos obtenidos en la API
      //A cada fila le agrego un boton editar que vaya con cada id 
      let bodyTable = document.querySelector('tbody');
        for(let solicitud of solicitudes){
          
            bodyTable.innerHTML += `  
            <tr>
              <td>${solicitud.tema}</td>
              <td>${solicitud.numero}</td>
              <td>
              <button class="btn-editar" data-id="${solicitud.id}">EDITAR</button>
              <button class="btn-eliminar" data-id="${solicitud.id}">ELIMINAR</button>
              
              </td>
            </tr>
            `;
          
        }
      Editarfilas()
      Eliminarfilas()
    }
/*     document.addEventListener("DOMContentLoaded", mostrarTabla); */
    
    
    function Editarfilas(){
        //Selecciono todos los botones de edicion.
       let botonesEditar = document.querySelectorAll(".btn-editar") 
       for(let btn of botonesEditar){
     
         btn.addEventListener("click", editarsolicitud)
       }  
      }
      


      function Eliminarfilas(){
        //Selecciono todos los botones de eliminacion.
       let botoneseliminar = document.querySelectorAll(".btn-eliminar") 
       for(let btn of botoneseliminar){
         btn.addEventListener("click", eliminarsolicitud);
       }  
      }




        // Determino una funcion que sea para eliminar
        async function eliminarsolicitud(event){
let id =event.currentTarget.dataset.id;
        // Hacer el delete
        let response = null;
        try{
         response = await fetch(BASE_API + "/" + id, {
          method:"DELETE",
          headers: { 
            "Content-Type": "application/json"
          }
        })
        } catch(ex) {
          console.log(ex)
          let aviso = document.querySelector("#aviso")
          aviso.innerHTML="No se ha podido eliminar lo ingresado";
        }
        if (response == null ){
          let aviso = document.querySelector("#aviso")
          aviso.innerHTML="No se ha podido eliminar lo ingresado";
          //Para cortar la ejecucion
          return;
        }
        
         // Actualizar la tabla
         let bodyTable = document.querySelector('tbody');
         bodyTable.innerHTML='';
        await mostrarTabla();

      }
      
      
    formEdit.addEventListener("submit", modificar); 
        
      async function modificar(event){
        event.preventDefault();
        // Armar el FormData
        let formData = new FormData(this)
        let datos = {
          tema: formData.get("tema"),
          numero: formData.get("numero"),
        }
        // Hacer el PUT
        let response = null;
        // Que el fieldset no se pueda modificar mientra espero la respuesta
        fieldsetEdit.disabled = true
        try{
         response = await fetch(BASE_API + "/" + formData.get("id"), {
          method:"PUT",
          headers: { 
            "Content-Type": "application/json"
          },
          //Envio los datos que quiero modifiar
          body: JSON.stringify(datos)
        })
        } catch(ex) {
          console.log(ex)
          let aviso = document.querySelector("#aviso")
          aviso.innerHTML="No se ha podido modificar lo ingresado";
        }
        if (response == null ){
          let aviso = document.querySelector("#aviso")
          aviso.innerHTML="No se ha podido modificar lo ingresado";
          //Para cortar la ejecucion
          return;
        }
        
        // Oculto el formulario
        formEdit.classList.add("oculto")
        formEdit.reset();
        fieldsetEdit.disabled = false
        // Actualizar la tabla
        let bodyTable = document.querySelector('tbody');
        bodyTable.innerHTML='';
        await mostrarTabla();

      }
    }
  
