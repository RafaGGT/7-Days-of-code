function fullStack() {
    let selectS = prompt('¿Te gustaria especializarte en tu area escogida o desarrollarte para convertirte en Fullstack? \n1) Especializarme \n2) Convertirme en FullStack')
    if (selectS == 1) {
        alert("Excelente, te deseo mucha suerte especilizandote");
    } else if (selectS == 2) {
        alert("Excelente, ya vas por la mitad de tu camino para ser FullStack");
    } else {
        alert("Ingresa un numero valido");
    }

    let selectO = prompt("¿Hay alguna otra tecnología que te gustaría aprender? escribe 'ok' en caso de si.");
    if (selectO !== "ok") {
        alert(`juego terminado`);
    } else {
        while (selectO == "ok") {
            let newTec = prompt("¿Como cual tecnologia?");
            alert(`Mucha suerte aprendiendo ${newTec}, se que lo conseguiras.`);
        }
    }
}

function frontEnd() {
    let selectF = prompt('Felicidades haz escogido el area de Front-End, ahora deberas escoger entre aprender \n1) React \n2) Vue');
    if (selectF == 1) {
        alert("¡Felicidades! Has escogido React, una librería poderosa para crear interfaces dinámicas y escalables.")
    } else if (selectF == 2) {
        alert("¡Felicidades! Has optado por un framework versátil y fácil de aprender, perfecto para desarrollo ágil.")
    } else {
        alert("Ingresa un numero valido");
        frontEnd();
    };
}

function backEnd() {
    let selectB = prompt('Felicidades haz escogido el area de Back-End, ahora deberas escoger entre aprender \n1) C# \n2) Java')
    if (selectB == '1') {
        alert("¡Felicidades! Has escogido Java, un lenguaje robusto y multiplataforma, ideal para aplicaciones empresariales y escalables.");
    } else if (selectB == '2') {
        alert("¡Felicidades! Has optado por C#, un lenguaje potente y versátil, perfecto para desarrollo en .NET, videojuegos y aplicaciones empresariales.");
    }
    else {
        alert("Ingresa un numero valido");
        backEnd();
    };
}

let select = prompt('Bienvenido al mundo de la programacion \nEscoge un area a la cual quieras especializarte \n1) Front-End \n2) Back-End.');

switch (select) {
    case "1": frontEnd();
        fullStack();
        break;
    case "2": backEnd();
        fullStack();
        break;
    default: alert("opcion no valida");
}