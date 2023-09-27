function check_password(password) {
    let error_list = [];
    let reg_special_chars = /(?=.*[!@#$%^&*])/;
    let reg_number = /^[0-9]+$/;
    let reg_upper_case_letter = /[A-Z]/;

    if (!test(reg_special_chars)) {
        error_list.unshift("Falta algún caracter especial");
    } else if (!test(reg_number)) {
        error_list.unshift("Falta algún numero.");
    } else if (!test(reg_upper_case_letter)) {
        error_list.ushift("Falta alguna letra mayúscula");
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
            message = "Su cotraseña no es segura: \n" + pass_sec.join("\n");
        }
    }
}
