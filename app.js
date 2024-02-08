// Primer Codigo Generado
/*let titulo = document.querySelector("h1");
titulo.innerHTML = " Juego del Número Secreto";
parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10";

function intentoDeusuario() {

}
*/

// Codigo Mejorado

//console.log(numeroSecreto);

let intentos = 0;
let numeroSecreto = 0;


function asignarTextoElemento (elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function generarNumeroSecreto() {
    return Math.floor((Math.random()*10)+1);    
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroDeUsuario == numeroSecreto);
    if(numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el numero en  ${intentos} ${(intentos===1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        // El Usuario no Acerto
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El Numero Secreto es menor");
        }
        else {
            asignarTextoElemento("p","El Numero Secreto es mayor");
        }
        intentos++;
        limpiarCaja();  
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del Numero Secreto");
    asignarTextoElemento("p","Indica un Numero del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar Caja
    limpiarCaja();
    // Reiniciar Mensaje de Inicio
    // Generar el Número Aleatorio
    // Inicializar intentos
    condicionesIniciales();    
    // Deshabilitar el Boton
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();

/*




function intentoDeUsuario() {
    alert("Click desde el Boton");
}
*/