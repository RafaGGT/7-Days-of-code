//Funcion del juego en curso
function chance() {
    // Validamos si el input está vacío
    if (playerInput.value == "") {
        result.textContent = `Por favor, ingresa un número del 0 al 10`;
        return; // Sale de la función si el input está vacío
    }

    //Pasamos el string a number y validamos si corresponde a lo que buscamos
    playerNumber = Number(playerInput.value);
    if (playerNumber >= 0 && playerNumber <= 10) {
        //Control de flujo ganar-perder-jugar
        if (numero == playerNumber) {
            result.textContent = `Acertaste, el numero efectivamente es: ${numero}`;
            button.textContent = `Volver a jugar`;
            fun = false;
        } else if (opportunity == 1) {
            result.textContent = `Perdiste, el numero era: ${numero}`;
            button.textContent = `Volver a jugar`;
            fun = false;
        } else {
            opportunity--
            result.textContent = `Intentos: ${opportunity}`;
        };
    } else {
        result.textContent = `Ingresa un numero valido`;
    };

    //Limpiamos el imput
    playerInput.value = "";
};

//Funcion de reseteo del juego 
function reset() {
    opportunity = 3;
    result.textContent = `Intentos: ${opportunity}`;
    button.textContent = `Jugar`;
    fun = true;
    numero = Math.floor(Math.random() * 11); //Cambia el numero a uno aleatoreo 
    console.log(numero); //Solo para temas de programacion y prueba
};

//Funcion que sirve tanto para jugar como para resetear
function play() {
    fun ? chance() : reset();
};

let numero = 0; //Numero fijo inicial
let opportunity = 3; //Cantidad de veces que se puede jugar por partida
const playerInput = document.querySelector(".player");
let playerNumber = playerInput.value;
const result = document.querySelector(".result");
const button = document.querySelector(".button");
let fun = true; //Indica el inicio(true) y final(false) de la partida 
result.textContent = `Intentos: ${opportunity}`; //Desde el comienzo sabemos ya el numero de intentos
console.log(numero); //Solo para temas de programacion y prueba