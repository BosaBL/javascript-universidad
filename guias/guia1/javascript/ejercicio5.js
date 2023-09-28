function imc(altura, peso) {
  return peso / altura ** 2;
}

function main() {
  trigger = false;
  let peso;
  let altura;
  while (trigger === false) {
    peso = parseFloat(prompt("Ingrese su peso: "));
    if (isNaN(peso)) {
      alert("El peso debe ser un número entero o decimal.");
      continue;
    } else if (peso <= 0) {
      alert("El peso debe ser un número mayor a 0.");
      continue;
    }

    altura = parseFloat(prompt("Ingrese su altura: "));
    if (isNaN(altura)) {
      alert("La altura debe ser un número entero o decimal.");
      continue;
    } else if (altura <= 0) {
      alert("La altura debe ser un número mayor a 0.");
      continue;
    }

    let val_imc = imc(altura, peso);
    let message = `Su IMC es de ${val_imc}, diagnóstico: `;
    switch (true) {
      case val_imc < 18.5:
        message = message + "BAJO DE PESO";
        break;
      case val_imc >= 18.5 && val_imc <= 24.9:
        message = message + "PESO NORMAL";
        break;
      case val_imc > 24.9:
        message = message + "SOBRE PESO";
        break;
    }
    alert(message);
    break;
  }
}
main();
