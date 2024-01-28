//funciones 
function aleatorio(min,max){
   return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "piedra 🪨"
    } else if(jugada == 2){
        resultado = "papel 📄"
    } else if(jugada == 3){
        resultado = "tijeras ✂️"
    } else {
        resultado = "una respuesta que está fuera del juego"
    }
    return resultado
}
// JUGADORES Y RESULTADOS
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3){
    
    //CONDICIONES DE JUEGO
    pc = aleatorio(1,3) 
    jugador = prompt("Elige: 1 = piedra, 2 = papel, 3 = tijeras.")                
    alert("PC elige: " + eleccion(pc))
    alert("Tú eliges: " + eleccion(jugador))

    //COMBATE
    if(pc == jugador){
        alert("empate")
    } else if ((pc == 1 && jugador == 2) || (pc == 2 && jugador == 3) || (pc == 3 && jugador == 1)){
        alert("ganaste")
        triunfos = triunfos + 1
    } else {
        alert("perdiste")
        perdidas = perdidas + 1
    }
}

alert("ganaste " + triunfos + " veces y perdiste " + perdidas + " veces")
