let form = document.getElementById("formulario");
form.addEventListener("submit",function(event){
    event.preventDefault();
    limpiarErrores();
    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    let resultado = validar(nombre, asunto, mensaje );
    if(resultado == true){
        exito();
    }
});

function limpiarErrores(){
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}

function exito(){
    document.querySelector(".resultado").innerHTML = "Formulario validado con exito";
}

function validar(nombre, asunto, mensaje){
    let pasamosLaValidacion = true;
    let validaciontexto = /[a-zA-Z]/gim;

    if(validaciontexto.test(nombre) == false){
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre valido";
        pasamosLaValidacion = false;
    }

    if(validaciontexto.test(asunto) == false){
        document.querySelector(".errorAsunto").innerHTML = "Ingrese un nombre valido";
        pasamosLaValidacion = false;
    }

    if(validaciontexto.test(mensaje) == false){
        document.querySelector(".errorMensaje").innerHTML = "Ingrese un nombre valido";
        pasamosLaValidacion = false;
    }
    
    return pasamosLaValidacion;
}

