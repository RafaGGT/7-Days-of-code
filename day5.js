function list(eleccion, producto) {
    eleccion.push(producto);
}

let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];

do {
    let init = prompt("¿Deseas agregar un producto a la lista de compras? \n1) Si \n2) No ");
    if (init == "1") {
        let producto = prompt("nombre del producto a ingresar: ");
        let categoria = prompt("A que categoria pertenece: \n1) frutas  \n2) lacteos  \n3) dulces  \n4) congelados");

        switch (categoria) {
            case "1":
                list(frutas, producto);
                break;
            case "2":
                list(lacteos, producto);
                break;
            case "3":
                list(dulces, producto);
                break;
            case "4":
                list(congelados, producto);
                break;
            default:
                alert("Esa categoria no está predefinida.");
        }
        alert(`Lista de compras:\n  🍎Frutas: ${frutas}\n  🥛Lácteos: ${lacteos}\n  🍬Dulces: ${dulces}\n  ❄️Congelados: ${congelados}`);
    } else if (init == "2") {
        alert("Saliendo del sistema...");
        break;
    } else {
        alert("Ingresa un numero valido");
    };
} while (true);
