// Paso 1: Solicitar datos
// Jugadas 1: Piedra 2: Papel 3: Tijeras
var jugador1 = parseInt(prompt("Ingresa un numero mayor a cero o igual a 3:"));
var jugador2 = parseInt(prompt("Ingresa otro numero mayor a cero y diferente al anterior:"));
var jugador3 = parseInt(prompt("Ingresa otro numero mayor a cero y diferente al anterior:"));
var maquina = Math.random(1, 3);

// Paso 2: operacion
 
if (
  (jugador === "1" && maquina === "3") ||
  (jugador === "2" && maquina === "1") ||
  (jugador === "3" && maquina === "1")
) {
    console.log("Ganaste");
} else {
    console.log("Pierdes");
}

// Paso 3: Mostrar resultado
for (var iteracion = 0; iteracion < jugada; iteracion++) {
    if (jugada[iteracion]) {
    // Si gana piedra
    console.log(
      `Jugada ${iteracion + 1}: gana jugador1, pierde maquina.`);
    } else {
    // Si gana papel
    console.log(
      `Jugada ${iteracion + 2}: pierde jugador2, gana maquina.`);
    } else {
    // Si gana tijera
    console.log(
      `Jugada ${iteracion + 3}: pierde jugador3, gana maquina.`);
    }
}

  
