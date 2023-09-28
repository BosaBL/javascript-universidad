var oracion = prompt("Ingresa una oración");

oracion = oracion.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ");

var palabras = oracion.split(" ").filter(function (palabras) {
  return palabras !== "";
});

var num_palabras = palabras.length;

alert("La cadena consta de " + num_palabras + " palabras.");
