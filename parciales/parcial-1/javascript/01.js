function calcular_dinero(valor) {
    return valor*250000;
}

while (true){

let input = prompt("Ingrese su calificación.").replace(",",".");

if (input == ""){
    alert("Tienes que ingresar un valor!");
}

let numero = Number(input)

if (isNaN(numero)){
    alert("El valor ingresado debe ser un número de los siguientes (0.0, 0.2, 0.4, 0.6, 0.8)");
} else if (numero == 0 || numero == 0.2) {
    if (numero==0.2){
        alert(`Su nivel de rendimiento es de "insuficiente", por lo cual recibirá $${calcular_dinero(numero)}`);
    } else {
        alert(`Su nivel de rendimiento es de "insuficiente", con una puntuación de ${numero}, por lo cual no recibirá dinero.`);
    }
    break;
} else if (numero == 0.4) {
    alert(`Su nivel de rendimiento es de "aceptable", por lo cual recibirá $${calcular_dinero(numero)}`);
    break;
} else if (numero == 0.6) {
    alert(`Su nivel de rendimiento es de "meritorio", por lo cual recibirá $${calcular_dinero(numero)}`);
    break;
} else if (numero == 0.8) {
    alert(`Su nivel de rendimiento es de "excelente", por lo cual recibirá $${calcular_dinero(numero)}`);
    break;
} else {
    alert("El valor ingresado debe ser un número de los siguientes (0.0, 0.2, 0.4, 0.6, 0.8)");
}
}
