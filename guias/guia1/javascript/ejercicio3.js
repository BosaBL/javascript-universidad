function check_password(password) {
  let error_list = [];

  // expresiones regulares para matchear al menos una aparicion de; caracteres especiales, numeros y letras mayúsculas
  let reg_special_chars = /(?=.*[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|])/;
  let reg_number = /[0-9]/;
  let reg_upper_case_letter = /[A-Z]/;

  if (!reg_special_chars.test(password)) {
    error_list.push("Falta algún caracter especial");
  }
  if (!reg_number.test(password)) {
    error_list.push("Falta algún numero.");
  }
  if (!reg_upper_case_letter.test(password)) {
    error_list.push("Falta alguna letra mayúscula");
  }
  if (password.length < 8) {
    error_list.push(
      "La contraseña debe tener al menos 8 caracteres de longitud.",
    );
  }

  if (error_list.length === 0) {
    return true;
  }
  return error_list;
}

function main() {
  let password_sec = false;
  let password;
  while (password_sec === false) {
    password = prompt("Ingrese su contraseña.");
    let pass_sec = check_password(password);
    if (pass_sec === true) {
      alert("Su contraseña es segura.");
      password_sec = true;
    } else {
      message = "Su cotraseña no es segura: \n\n\n" + pass_sec.join("\n");
      alert(message);
    }
  }
}
main();
