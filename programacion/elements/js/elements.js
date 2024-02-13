//variables globales

let vidaJugador = 3;
let vidaPc = 3;
let ataqueJugador = ""
let ataqueEnemigo = ""
let resultado = ""


//funciones
function iniciarJuego(){

    let sectionAtaque = document.getElementById('seleccionar-ataque')
    sectionAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let b_mascota = document.getElementById('b-mascota');
    b_mascota.addEventListener('click', seleccionarMascotaJugador);
    let b_reiniciar = document.getElementById('boton-reiniciar')
    b_reiniciar.addEventListener('click', reiniciar)
}
function aleatorio (min,max) {
    return Math.floor(Math.random()* (max - min + 1) + min)   
}
// SELECCION DE MASCOTAS DEL PC Y DEL JUGADOR
function seleccionarMascotaJugador(){

    
    let sectionMascotas = document.getElementById('seleccionar-mascota')
    sectionMascotas.style.display = 'none'

    let sectionAtaque = document.getElementById('seleccionar-ataque')
    sectionAtaque.style.display = 'block'

    let spanMascotaJugador = document.getElementById('mascota-jugador');
    
    let tiburon = document.getElementById('tiburon');
    let topo = document.getElementById('topo');
    let fenix = document.getElementById('fenix');
    let tortuga = document.getElementById('tortuga');
    let leon = document.getElementById('leon');
    
    
    if(tiburon.checked){
        spanMascotaJugador.innerHTML = "tiburon"
    } else if (topo.checked){
        spanMascotaJugador.innerHTML = "topo"
    } else if (fenix.checked){
        spanMascotaJugador.innerHTML = "fenix"
    } else if (tortuga.checked){
        spanMascotaJugador.innerHTML = "tortuga"
    } else if (leon.checked){
        spanMascotaJugador.innerHTML = "leon"
    } else {
        alert("no has seleccionado aún")
        reiniciar()
    }
    
    seleccionarMascotaPc();

    let b_fuego = document.getElementById('b-fuego');
    b_fuego.addEventListener('click', ataqueFuego);

    let b_agua = document.getElementById('b-agua');
    b_agua.addEventListener('click', ataqueAgua);
    
    let b_tierra = document.getElementById ('b-tierra');
    b_tierra.addEventListener('click', ataqueTierra);
    let b_mascota = document.getElementById('b-mascota');
    b_mascota.disabled = true;
}

function seleccionarMascotaPc(){

    let mascotaPc = aleatorio(1,5)
    let spanMascotaPc = document.getElementById('mascota-pc');


    if(mascotaPc == 1){
        spanMascotaPc.innerHTML = "tiburon"
    } else if (mascotaPc == 2){
        spanMascotaPc.innerHTML = "topo"
    } else if (mascotaPc == 3){
        spanMascotaPc.innerHTML = "fenix"
    } else if (mascotaPc == 4){
        spanMascotaPc.innerHTML = "tortuga"
    } else if (mascotaPc == 5){
        spanMascotaPc.innerHTML = "leon"
    } 
    
}

// ATAQUES DEL JUGADOR Y DEL PC

function ataqueFuego() {
    ataqueJugador = "Fuego"
    ataquePc()
} 
function ataqueAgua(){
    ataqueJugador = "Agua" 
    ataquePc()
}
function ataqueTierra(){    
    ataqueJugador = "Tierra"
    ataquePc()
}

function ataquePc(){

    let eleccionPC = aleatorio(1,3) 

        if(eleccionPC == 1){
            ataqueEnemigo = "Fuego"
        } else if(eleccionPC == 2){
            ataqueEnemigo = "Agua"
        } else if(eleccionPC == 3){
            ataqueEnemigo = "Tierra"
        }
    marcador()
    crearMensaje()
}
//RESULTADOS 

function crearMensaje(){

    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con '+ ataqueJugador +', la mascota del enemigo atacó con '+ ataqueEnemigo+' tu ' + resultado +'.'
    sectionMensajes.appendChild(parrafo)

    if(vidaPc == 0){
        mensajeFinal("¡QUE GRAN VICTORIA!")
    } else if (vidaJugador == 0){
        mensajeFinal("PERDISTE")
    }
}
function mensajeFinal(resultadofinal){
    let sectionMensajes = document.getElementById('mensajes')
    let r_final = document.createElement('h1')
    r_final.innerHTML = resultadofinal
    sectionMensajes.appendChild(r_final)

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

    let b_fuego = document.getElementById('b-fuego');
    b_fuego.disabled = true;

    let b_agua = document.getElementById('b-agua');
    b_agua.disabled = true;
    
    let b_tierra = document.getElementById ('b-tierra');
    b_tierra.disabled = true;
}
function marcador(){
    if(ataqueJugador == ataqueEnemigo){
        resultado = "EMPATE";
    } else if((ataqueJugador == "Fuego"  && ataqueEnemigo == "Tierra") || (ataqueJugador == "Agua"  && ataqueEnemigo == "Fuego") || (ataqueJugador == "Tierra"  && ataqueEnemigo == "Agua")){
        resultado = "GANASTE";
        vidaPc --;  
    } else {
        resultado = "PERDISTE";
        vidaJugador --;
    }
    let spanVidaPc = document.getElementById('vida-pc');
    spanVidaPc.innerHTML = vidaPc
    let spanVidaJugador = document.getElementById('vida-jugador');
    spanVidaJugador.innerHTML = vidaJugador

}
function reiniciar(){
    location.reload()
}

//limite del juego





window.addEventListener('load', iniciarJuego)