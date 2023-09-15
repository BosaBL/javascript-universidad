function esPar(numero) {
    if (isNaN(parseInt(numero))) return parseInt(numero);

    if (numero % 2 === 0) {
        return true;
    }

    return false;
}

input = prompt("Ingrese un número");

if (esPar(input) == true) {
    alert("Es par!");
} else if (esPar(input) == false) {
    alert("Es impar!");
} else {
    alert("Error: no es un número.");
}
