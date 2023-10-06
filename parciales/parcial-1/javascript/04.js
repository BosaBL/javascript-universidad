function calcular_iva(precioSinIva, porcentaje = 19.5) {
    return (precioSinIva*porcentaje)/100;
}

let valorSinIva;
let porcentajeIva;

while (true) {
    valorSinIva = prompt("Ingrese el valor sin el IVA aplicado.");

    if (valorSinIva == ""){
        alert("Es necesario que ingrese un valor.");
        continue;
    }
    valorSinIva = Number(valorSinIva);
    if (isNaN(valorSinIva)){
        alert("El valor debe ser un número válido.");
        continue;
    }
    if (valorSinIva < 0){
        alert("El valor debe ser un número positivo.");
        continue;
    }
    break;
}

while(true){
    porcentajeIva = prompt("Ingrese el porcentaje de IVA.");
    if (porcentajeIva == ""){
        alert(`El valor con IVA estándar (19.5) de su factura es de: $${calcular_iva(valorSinIva)}`);
        break;
    }
    porcentajeIva = Number(porcentajeIva);
    if (isNaN(porcentajeIva)){
        alert("El valor debe ser un número válido.");
        continue;
    }
    if (porcentajeIva < 0 || porcentajeIva>100){
        alert("El valor debe ser un porcentaje válido (entre 0 y 100)");
        continue;
    }

    alert(`El valor total de la factura, con un IVA de ${porcentajeIva}% es de: $${calcular_iva(valorSinIva,porcentajeIva)}`);
    break;
}