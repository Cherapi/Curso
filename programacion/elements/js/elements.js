//funciones
function iniciarJuego(){
    let b_mascota = document.getElementById('b-mascota')
    b_mascota.addEventListener('click', seleccionarMascotaJugador)

}

function seleccionarMascotaJugador(){

    let tiburon = document.getElementById('tiburon')
    let topo = document.getElementById('topo')
    let fenix = document.getElementById('fenix')
    let tortuga = document.getElementById('tortuga')
    let leon = document.getElementById('leon')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
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
    }

    seleccionarMascotaPc()
}

function seleccionarMascotaPc(){

    let listaMascotas = ["tiburon", "topo", "fenix", "tortuga", "leon"]
    let mascotaPc = Math.floor(Math.random() * listaMascotas.length)
    let mascotaPcSeleccionada = listaMascotas[mascotaPc]
    let spanMascotaPc = document.getElementById('mascota-pc')


    if(mascotaPcSeleccionada == "tiburon"){
        spanMascotaPc.innerHTML = "tiburon"
    } else if (mascotaPcSeleccionada == "topo"){
        spanMascotaPc.innerHTML = "topo"
    } else if (mascotaPcSeleccionada == "fenix"){
        spanMascotaPc.innerHTML = "fenix"
    } else if (mascotaPcSeleccionada == "tortuga"){
        spanMascotaPc.innerHTML = "tortuga"
    } else if (mascotaPcSeleccionada == "leon"){
        spanMascotaPc.innerHTML = "leon"
    } 
}

window.addEventListener('load', iniciarJuego)