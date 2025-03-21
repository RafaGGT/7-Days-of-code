function eliminar(event) {
    let itemD = event.target.parentElement; // Obtenemos el p donde esta el boton de eliminar
    let nameP = itemD.querySelector("span").innerText; // Obtiene el nombre del producto
    let categoria = itemD.querySelectorAll("span")[1].innerText; // Obtiene la categoría
    // Elimina el elemento del DOM
    itemD.remove();

    let index;

    // Busca el índice del producto en el array correspondiente según la categoría
    switch (categoria) {
        case "Frutas":
            index = frutas.indexOf(nameP);
            break;
        case "Lacteos":
            index = lacteos.indexOf(nameP);
            break;
        case "Dulces":
            index = dulces.indexOf(nameP);
            break;
        case "Congelados":
            index = congelados.indexOf(nameP);
            break;
    }

    console.log(index);

    // También elimina el elemento del array correspondiente
    switch (categoria) {
        case "Frutas":
            frutas.splice(index, 1); // Elimina 1 elemento en la posición `index`
            console.log(`🍎Frutas: ${frutas}`);
            break;
        case "Lacteos":
            lacteos.splice(index, 1);
            console.log(`🥛Lácteos: ${lacteos}`);
            break;
        case "Dulces":
            dulces.splice(index, 1);
            console.log(`🍬Dulces: ${dulces}`);
            break;
        case "Congelados":
            congelados.splice(index, 1);
            console.log(`❄️Congelados: ${congelados}`);
            break;
    }
}

function crear() {
    let nameP = val.value.trim();
    let categoria = select.value;

    if (nameP == "" || categoria == "") {
        alert("Por favor, ingresa un producto válido.");
        return;
    }

    switch (categoria) {
        case "Frutas": frutas.push(nameP);
            console.log(`🍎Frutas: ${frutas}`);
            break;
        case "Lacteos": lacteos.push(nameP);
            console.log(` 🥛Lácteos: ${lacteos}`);
            break;
        case "Dulces": dulces.push(nameP);
            console.log(`🍬Dulces: ${dulces}`);
            break;
        case "Congelados": congelados.push(nameP);
            console.log(`❄️Congelados: ${congelados}`);
            break;
    }

    let item = document.createElement("p");
    item.innerHTML = `
    <span>${nameP}</span> - <span>${categoria}</span>
    <button class="btn btn-primary btn-danger mx-3" onclick="eliminar(event)">Borrar</button>
`;
    list.appendChild(item);

    // Resetea los valores al finalizar
    val.value = "";
    select.value = "";
}

let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];

let list = document.querySelector(".listContainer");
let val = document.getElementById("productoInput");
let select = document.getElementById("opciones");