let numeroSecreto;
let intentos = 1;
let numerosSorteados = [];
let numeroMaximo = 10;
let intentosMaximos = 3;

function etiquetasHTML(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    let botonReiniciar = document.getElementById("reiniciar")
    let botonIntentar = document.getElementById("intentar")

    if (intentos == intentosMaximos) {
        etiquetasHTML("p","Número máximo de intentos alcanzado. Perdiste.")
        botonReiniciar.removeAttribute("disabled");;
        botonIntentar.setAttribute("disabled",true);
    } else {
        if(numeroSecreto === numeroUsuario) {
            intentos++
            etiquetasHTML("p",`Acertaste el número en ${intentos} ${(intentos == 1 ? "vez":"veces")}`);
            intentos++;
            botonReiniciar.removeAttribute("disabled");
            botonIntentar.setAttribute("disabled",true);
        } else if (numeroSecreto > numeroUsuario) {
            etiquetasHTML("p","El número secreto es mayor");
            intentos++;
            limpiarCaja()
        } else {
            etiquetasHTML("p","El número secreto es menor");
            intentos++;
            limpiarCaja()
        }
    }

    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(numerosSorteados);

   if (numerosSorteados.length == numeroMaximo) {
        etiquetasHTML("p","Utilizaste la cantidad máxima de números");
   } else{
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
   }   
}

function condicionesIniciales() {
    etiquetasHTML("h1","Juego del número secreto");
    etiquetasHTML("p",`Indica un número del 1 al ${numeroMaximo}: `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
}

function reiniciarJuego() {
    condicionesIniciales();
    limpiarCaja();
    document.getElementById("reiniciar").setAttribute("disabled",true);
    document.getElementById("intentar").removeAttribute("disabled");
}

condicionesIniciales();
