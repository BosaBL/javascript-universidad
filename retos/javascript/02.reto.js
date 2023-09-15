function notaInput(ponderacion) {
    input = parseFloat(
        prompt(`Ingresa la nota (${ponderacion * 100}% de la nota).`),
    );
    if (isNaN(input)) {
        alert("No es un número!");
    } else if (input < 1 || input > 7) {
        alert("La nota tiene que estar entre 1 y 7");
    } else {
        return input * ponderacion;
    }
    return notaInput(ponderacion);
}

nota_1 = notaInput(0.4);
nota_2 = notaInput(0.3);
nota_3 = notaInput(0.3);

promedio = nota_1 + nota_2 + nota_3;
alert(promedio.toFixed(2));
