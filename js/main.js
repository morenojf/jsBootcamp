// var userName = prompt('¡Gracias por usar nuestra Calculadora! , ¿Cuál es tu nombre?');
// alert(`¡Bienvenid@ ${userName} !`);

let valorScreen = 0;
let numeroA;
let numeroB;
let operation;

function button(hambg) {
    var auxiliar = document.getElementById("screen").value;
    document.getElementById("screen").value = auxiliar + hambg;


    valorScreen = document.getElementById("screen").value = auxiliar + hambg;
}


function btn_add(caracter) {
    numeroA = valorScreen;
    operation = "+";

    clear();
}

function btn_subtract(caracter) {
    numeroA = valorScreen;
    operation = "-";

    clear();
}

function btn_multiply(caracter) {
    numeroA = valorScreen;
    operation = "*";

    clear();
}

function btn_divide(caracter) {
    numeroA = valorScreen;
    operation = "/";

    clear();
}

function reset() {
    document.getElementById('screen').value = '';
    valorScreen = 0;
    operation = "";
}

function clear() {
    document.getElementById('screen').value = '';

}

function btn_result() {
    numeroB = valorScreen;
    calcular();
}

function calcular() {

    let total = null;
    switch (operation) {
        case "+":
            total = parseFloat(numeroA) + parseFloat(numeroB);
            break;
        case "-":
            total = parseFloat(numeroA) - parseFloat(numeroB);
            break;
        case "*":
            total = parseFloat(numeroA) * parseFloat(numeroB);
            break;
        case "/":
            total = parseFloat(numeroA) / parseFloat(numeroB);
            break;
    }
    reset();
    document.getElementById('screen').value = total;
    valorScreen = total;
}