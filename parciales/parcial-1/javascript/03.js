function check_valid(nickname) {

    let nick_errors = [];
    let lower_case_regex =  /[a-z]/;
    let upper_case_regex = /[A-Z]/;
    let all_regex = /[A-z]/;
    let digit_reg = /[0-9]/;


    if (nickname.length<9){
        nick_errors.push("Su nombre debe de tener al menos 9 caracteres.");
    }

    if (!lower_case_regex.test(nickname) || !upper_case_regex.test(nickname)){
        nick_errors.push("Su nombre debe tener al menos una letra minúscula y una mayuscula.");
    }

    if (!digit_reg.test(nickname[0])){
        nick_errors.push("Su nombre debe comenzar con un número");
    }
    if (!all_regex.test(nickname[nickname.length-1])){
        nick_errors.push("Su nombre debe terminar con una letra.");
    }
    
    if (nick_errors.length === 0){
        return true;
    }

    return nick_errors;

}

let input = check_valid(prompt("Ingrese su nombre de usuario."));

if (input === true){
    alert("El nombre de usuario es válido. \n\n");
} else {
    alert(`El nombre de usuario no cumple con los requisitos: \n\n${input.join("\n")}`);
}