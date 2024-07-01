let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;
console.log(intentos);

function asignarTextoElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
    let numeroDeUsuario=parseInt(document.getElementById("valorUsuario").value);
    //console.log(numeroDeUsuario===numeroSecreto);//El triple igual (===) en JavaScript se utiliza para realizar una comparación estricta entre dos valores. Esto significa que no solo compara el valor de los operandos, sino también su tipo de dato.

    console.log(intentos);
    if(numeroDeUsuario==numeroSecreto){
        asignarTextoElemento("p",`¡Felicidades,acertaste el numero secreto en ${intentos} ${(intentos===1) ? "intento":"intentos"}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        //El usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");
        }else{
            asignarTextoElemento("p","El numero secreto es Mayor")
        }
    }
    intentos++;
    limpiarCaja();
return;
}
//limpiamos para que el usuario vuelva a colocar el dato
function limpiarCaja(){
    
    //let valorCaja= 
    document.querySelector("#valorUsuario").value="";
    //se utiliza para limpiar o vaciar el valor que se encuentra en un campo de entrada (input) en el HTML.
    //valorCaja.value="";
}
function generarNumeroSecreto() {   
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado ya esta en la lista, realizamos una operacion 
    console.log(generarNumeroSecreto);
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento(`p`,`Ya se sortearon todos los numeros`)
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto ");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}!`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio
    condicionesIniciales();
    //generar numero aleatorio nuevamente
    //inicializar nuevamente en numero de intentos
    //deshabilitar boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true"); //Set nos pedira dos parametros

}
condicionesIniciales();
