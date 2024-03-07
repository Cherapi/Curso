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
    sectionAtaque.style.display = 'flex'

    let spanMascotaJugador = document.getElementById('mascota-jugador');
    
    let tiburon = document.getElementById('tiburon');
    let topo = document.getElementById('topo');
    let fenix = document.getElementById('fenix');
    let tortuga = document.getElementById('tortuga');
    let leon = document.getElementById('leon');
    let tarjetaJugador = document.getElementById('tarjeta-jugador')
    let resultadoJ= document.createElement('p');
    resultadoJ.id = "ataque-jugador";
    
    
    if(tiburon.checked){
        spanMascotaJugador.innerHTML = "tiburon";
        let imagenJugador = document.createElement('img');
        imagenJugador.className = "imag";
        imagenJugador.src = "./assets/tiburon.png";
        imagenJugador.alt = "tiburon";
        tarjetaJugador.appendChild(imagenJugador);
        tarjetaJugador.appendChild(resultadoJ);
    } else if (topo.checked){
        spanMascotaJugador.innerHTML = "topo";
        let imagenJugador = document.createElement('img');
        imagenJugador.className = "imag";
        imagenJugador.src = "./assets/topo.png";
        imagenJugador.alt = "topo";
        tarjetaJugador.appendChild(imagenJugador);
        tarjetaJugador.appendChild(resultadoJ);
    } else if (fenix.checked){
        spanMascotaJugador.innerHTML = "fenix";
        let imagenJugador = document.createElement('img');
        imagenJugador.className = "imag";
        imagenJugador.src = "./assets/fenix.png";
        imagenJugador.alt = "fenix";
        tarjetaJugador.appendChild(imagenJugador);
        tarjetaJugador.appendChild(resultadoJ);
    } else if (tortuga.checked){
        spanMascotaJugador.innerHTML = "tortuga"
        let imagenJugador = document.createElement('img');
        imagenJugador.className = "imag";
        imagenJugador.src = "./assets/tortuga.png";
        imagenJugador.alt = "tortuga";
        tarjetaJugador.appendChild(imagenJugador);
        tarjetaJugador.appendChild(resultadoJ);
    } else if (leon.checked){
        spanMascotaJugador.innerHTML = "leon"
        let imagenJugador = document.createElement('img');
        imagenJugador.className = "imag";
        imagenJugador.src = "./assets/leon.png";
        imagenJugador.alt = "leon";
        tarjetaJugador.appendChild(imagenJugador);
        tarjetaJugador.appendChild(resultadoJ);
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
    let tarjetaPC = document.getElementById('tarjeta-pc');
    let resultadoPc= document.createElement('p');
    resultadoPc.id = "ataque-pc";


    if(mascotaPc == 1){
        spanMascotaPc.innerHTML = "tiburon";
        let imagenPc = document.createElement('img');
        imagenPc.className = "imag";
        imagenPc.src = "./assets/tiburon.png";
        imagenPc.alt = "tiburon";
        tarjetaPC.appendChild(imagenPc);
        tarjetaPC.appendChild(resultadoPc);
    } else if (mascotaPc == 2){
        spanMascotaPc.innerHTML = "topo";
        let imagenPc = document.createElement('img');
        imagenPc.className = "imag";
        imagenPc.src = "./assets/topo.png";
        imagenPc.alt = "topo";
        tarjetaPC.appendChild(imagenPc);
        tarjetaPC.appendChild(resultadoPc);
    } else if (mascotaPc == 3){
        spanMascotaPc.innerHTML = "fenix";
        let imagenPc = document.createElement('img');
        imagenPc.className = "imag";
        imagenPc.src = "./assets/fenix.png";
        imagenPc.alt = "fenix";
        tarjetaPC.appendChild(imagenPc);
        tarjetaPC.appendChild(resultadoPc);
    } else if (mascotaPc == 4){
        spanMascotaPc.innerHTML = "tortuga"
        let imagenPc = document.createElement('img');
        imagenPc.className = "imag";
        imagenPc.src = "./assets/tortuga.png";
        imagenPc.alt = "tortuga";
        tarjetaPC.appendChild(imagenPc);
        tarjetaPC.appendChild(resultadoPc);
    } else if (mascotaPc == 5){
        spanMascotaPc.innerHTML = "leon"
        let imagenPc = document.createElement('img');
        imagenPc.className = "imag";
        imagenPc.src = "./assets/leon.png";
        imagenPc.alt = "leon";
        tarjetaPC.appendChild(imagenPc);
        tarjetaPC.appendChild(resultadoPc);
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

    let sectionMensajes = document.getElementById('resultado')
    let ataqueDeJugador = document.getElementById('ataque-jugador')
    let ataqueDePc= document.getElementById('ataque-pc')

    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaquePc = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaquePc.innerHTML = ataqueEnemigo

    ataqueDeJugador.appendChild(nuevoAtaqueJugador)
    ataqueDePc.appendChild(nuevoAtaquePc)

    if(vidaPc == 0){
        mensajeFinal("¡QUE GRAN VICTORIA!");
    } else if (vidaJugador == 0){
        mensajeFinal("DERROTA");
    }
}
function mensajeFinal(resultadofinal){
    let sectionMensaje = document.getElementById('reiniciar')
    let r_final = document.createElement('h1')
    r_final.innerHTML = resultadofinal
    sectionMensaje.appendChild(r_final)

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'flex'

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

window.addEventListener('load', iniciarJuego)