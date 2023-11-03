const form = document.getElementById("imc-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let form_data = new FormData(form);

  let nombre = form_data.get("name-input");
  let peso = Number(form_data.get("peso-input"));
  let altura = Number(form_data.get("altura-input"));
  let edad = Number(form_data.get("edad-input"));
  let genero = form_data.get("select-genero");
  let act_fisica = Number(form_data.get("select-act-fisica"));

  let situacion;
  let gec;
  let estado_nutricional;

  let imc = (peso / (altura / 100) ** 2).toFixed(2);

  if (imc < 18.5) {
    situacion = "Bajo de peso.";
    estado_nutricional = "Necesita atención especializada.";
  } else if (imc >= 15.5 && imc < 25) {
    situacion = "Peso Normal.";
    estado_nutricional = "No necesita atención.";
  } else if (imc >= 25 && imc < 30) {
    situacion = "Sobrepeso.";
    estado_nutricional = "Necesita atención especializada.";
  } else {
    situacion = "obesidad.";
    estado_nutricional = "Necesita atención especializada.";
  }

  // https://www.tuasaude.com/es/calculadora/gasto-energetico/ tabla GED

  if (genero == "F") {
    if (edad <= 3) {
      gec = 58.31 * peso - 31.1;
    } else if (edad >= 4 && edad <= 10) {
      gec = 20.315 * peso + 485.9;
    } else if (edad >= 11 && edad <= 18) {
      gec = 13.384 * peso + 692.6;
    } else if (edad >= 19 && edad <= 30) {
      gec = 14.818 * peso + 486.6;
    } else if (edad >= 31 && edad <= 60) {
      gec = 8.126 * peso + 845.6;
    } else {
      gec = 9.082 * peso + 658.5;
    }
  } else {
    if (edad <= 3) {
      gec = 59.512 * peso - 30.4;
    } else if (edad >= 4 && edad <= 10) {
      gec = 22.706 * peso + 504.6;
    } else if (edad >= 11 && edad <= 18) {
      gec = 17.686 * peso + 658.2;
    } else if (edad >= 19 && edad <= 30) {
      gec = 15.057 * peso + 692.2;
    } else if (edad >= 31 && edad <= 60) {
      gec = 11.472 * peso + 873.1;
    } else {
      gec = 11.711 * peso + 587.7;
    }
  }
  gec *= act_fisica;
  gec = gec.toFixed(3);

  document.getElementById(
    "result-div",
  ).innerHTML = `<h1> Resultados para ${nombre}</h1>\n<div> IMC: ${imc} </div>\n<div> Clasificación: ${situacion} </div>\n<div> GEC: ${gec} kcal. </div>\n<div> Estado Nutricional: ${estado_nutricional} </div>`;
});
