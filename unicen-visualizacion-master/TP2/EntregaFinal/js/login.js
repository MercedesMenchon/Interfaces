"use stict";

document.querySelector(".formRegistrarme").classList.add("hidden");
document.querySelector("#btn-loginIniciarSesion").classList.add("click");
document.querySelector('#registrarme').addEventListener("click", verificacionFormularioRegistrarme);
document.querySelector("#IniciarSesion").addEventListener("click",verificacionFormularioIniciarSesion)

/*LOGIN*/
document.querySelector('#btn-loginIniciarSesion').addEventListener("click", MostrarFormIniciarSesion);
document.querySelector('#btn-loginRegistrarme').addEventListener("click", MostrarFormRegistrarme);

function MostrarFormIniciarSesion() {

    document.querySelector(".formIniciarSesion").classList.remove("hidden");
    document.querySelector(".formRegistrarme").classList.add("hidden");
    document.querySelector("#btn-loginIniciarSesion").classList.add("click");
    document.querySelector("#btn-loginRegistrarme").classList.remove("click");
}
function MostrarFormRegistrarme() {
    document.querySelector(".formIniciarSesion").classList.add("hidden");
    document.querySelector(".formRegistrarme").classList.remove("hidden");
    document.querySelector("#btn-loginIniciarSesion").classList.remove("click");
    document.querySelector("#btn-loginRegistrarme").classList.add("click");
}


function inicioLoading() {
    document.querySelector(".espera").classList.toggle("show");
    var barra = document.querySelector(".progress-bar");
    var width = 0;
    var id = setInterval(frame, 50);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            barra.style.width = width + '%';
            document.querySelector(".text-porcentaje").innerHTML = width + '%';
        }
        setTimeout(irAInicio, 5500);
    }
}
    function irAInicio() {
        location.href = 'index.html';
    }

let ingresarAutomatico = document.querySelectorAll(".loading");
for (let i=0; i<ingresarAutomatico.length;i++){
    ingresarAutomatico[i].addEventListener("click",inicioLoading);
}
document.querySelector("#verificarContraseña").addEventListener("click",verificarContraseña);
    
function verificarContraseña(){
        let password = document.querySelector("#password").value;
        let password2 = document.querySelector("#password2").value;
        let respuesta = "";
       let validacion;
document.querySelector(".avisodecontraseña").innerHTML=respuesta;
        if(password!='' && password2!=''){  
                if(password==password2){
            respuesta= "<p>Las contraseñas fueron ingresadas correctamente</p>";
               validacion=true; 
        }
                else{respuesta=" <p>Las contraseñas no coinciden</p>";
                validacion=false; 
            }
        }
                else{
            respuesta="<p>Se deben completar los campos</p>"
                validacion=false;
        }
        document.querySelector(".avisodecontraseña").innerHTML=respuesta;
return validacion;
    }

function verificacionFormularioRegistrarme(){
    
    document.querySelector(".avisoNombre").innerHTML="";
    document.querySelector(".avisoNickName").innerHTML="";
    document.querySelector(".avisoEdad").innerHTML="";
    document.querySelector(".avisoCorreoElectronico").innerHTML="";
    document.querySelector(".avisodeCaptcha").innerHTML="";
    let nombreApellido = document.querySelector("#nombreApellido").value;
    let nickName = document.querySelector("#nickName").value;
    let edad = document.querySelector("#inputEdad").value;
    let correoElectronico = document.querySelector("#correoElectronico").value;
    let captcha = document.querySelector("#captcha").checked;
if(nombreApellido==''){
    document.querySelector(".avisoNombre").innerHTML="Se debe completar el campo";
}
if(nickName==''){
    document.querySelector(".avisoNickName").innerHTML="Se debe completar el campo";
}
if(edad==''){
    document.querySelector(".avisoEdad").innerHTML="Se debe completar el campo";
}
if(correoElectronico ==''){
    document.querySelector(".avisoCorreoElectronico").innerHTML="Se debe completar el campo";
}
if(verificarContraseña()==false){
    document.querySelector(".avisodecontraseña").innerHTML="<p>Se deben validar las contraseñas</p>"
}
if(captcha==false){
    document.querySelector(".avisodeCaptcha").innerHTML="<p>Se deben validar el captcha</p>"
}
if(nombreApellido!='' &&   nickName!='' &&  edad!='' && correoElectronico!='' &&  verificarContraseña()){
    console.log("Entre");
    inicioLoading();
}
}

function verificacionFormularioIniciarSesion(){
    let correo = document.querySelector("#correoElectronico1").value;
    let contrasenia = document.querySelector("#contrasenia").value;
    let avisoDeCorreo = document.querySelector(".avisoDeCorreo");
    let avisoDeContrasenia = document.querySelector(".avisoDeContrasenia");
    avisoDeCorreo.innerHTML="";
    avisoDeContrasenia.innerHTML="";
if(correo == ''){
    avisoDeCorreo.innerHTML="Se debe completar el campo";
}
if(contrasenia == ''){
    avisoDeContrasenia.innerHTML="Se debe completar el campo";
}
if(correo !='' && contrasenia!= ''){
    inicioLoading();
}

}

