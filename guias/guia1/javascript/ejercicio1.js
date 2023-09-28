function calcular_suma_pares(numero) {
  let suma = 0;
  for (let i = 1; i * 2 <= numero; i++) {
    suma += i * 2;
  }
  return suma;
}

function main() {
  let check_input = false;
  let input;
  while (check_input === false) {
    input = prompt("Ingrese un número entero positivo.", "");
    input = Number(input);
    if (isNaN(input)) {
      alert("Debes de ingresar un número.");
    } else if (!Number.isInteger(input) || input <= 0) {
      alert("El número debe ser un entero positivo mayor a cero.");
    } else {
      check_input = true;
    }
  }
  alert(
    `La suma de los números pares hasta el número ${input} es: ${calcular_suma_pares(
      input,
    )}`,
  );
}

main();
