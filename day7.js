function suma(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}
function resta(num1, num2) {
    let resultado = num1 - num2;
    return resultado;
}

function multiplicacion(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}

function division(num1, num2) {
    let resultado
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        resultado = "No se puede dividir por 0";
    }
    return resultado;
}


function calcular(modo) {
    const inp1 = document.getElementById("input1");
    const inp2 = document.getElementById("input2");
    const resId = document.getElementById("resultado");

    let num1 = parseFloat(inp1.value);
    let num2 = parseFloat(inp2.value);
    let res;

    switch (modo) {
        case '+':
            res = suma(num1, num2);
            break;
        case '-':
            res = resta(num1, num2);
            break;
        case '*':
            res = multiplicacion(num1, num2);
            break;
        case '/':
            res = division(num1, num2);
            break;
    }

    resId.innerText = `${res}`;
};