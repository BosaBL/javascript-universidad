function get_greater_number(numbers) {
  // remover todos los espacios blancos de la lista.
  let lst = numbers.replaceAll(" ", "");
  lst = lst.split(",");
  //convertir todos los elementos de la lista a tipo Number, si se encuentra un string vacío ("") la funcion lo transforma a 0, no queremos esto, por eso se retorna NaN en este caso.
  let numbers_lst = lst.map((x) => {
    if (x === "") {
      return NaN;
    }
    return Number(x);
  });

  let biggest = -Infinity;

  // Recorrer cada elemento para encontrar el mayor
  numbers_lst.forEach((number) => {
    if (number >= biggest) {
      biggest = number;
    }
  });
  if (biggest !== -Infinity) {
    return biggest;
  }
  return null;
}

function main() {
  let numbers_sep_by_comma = prompt(
    "Ingresa un listado de números separados por comas.",
  );
  let response = get_greater_number(numbers_sep_by_comma);
  if (response !== null) {
    alert(`El número mas grande es: ${response}`);
  } else {
    alert(`Asegurate de ingresar al menos un número.`);
  }
}
main();
