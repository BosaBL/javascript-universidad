addEventListener("submit", (e) => {
    e.preventDefault()
    const passform = document.getElementById("pass-gen-form");

    let formData = new FormData(passform);

    const lower  = "qwertyuiopasdfghjklzxcvbnmñ";
    const upper = "QWERTYUIOPASDFGHJKLZXCVBNMÑ";
    const numbers = "1234567890";
    const special = "!#$%&/()?¡¿,.-_;:";

    let chars = ""

    let passlen = formData.get("pass-length")
    let useUpper = formData.get("include-upp") === "on" ? true : false;
    let useLower = formData.get("include-low") === "on" ? true : false;
    let useNumbers = formData.get("include-num") === "on" ? true : false;
    let useSpec = formData.get("include-spec") === "on" ? true : false;

    if (!useUpper && !useLower && !useNumbers && !useSpec){
        alert("Debe seleccionar al menos una casilla");
        return false
    }

    if (useUpper){
        chars = chars.concat(upper);
    }
    if (useLower){
        chars = chars.concat(lower);
    }
    if (useNumbers){
        chars = chars.concat(numbers);
    }
    if (useSpec){
        chars = chars.concat(special);
    }


    let password = "";

    for (let i = 0; i < Number(passlen); i++) {
        password = password.concat(`${chars[Math.floor(Math.random()*chars.length)]}`);
    }

    let outputdiv = document.getElementById("outputdiv");
    outputdiv.innerHTML = `<strong>La contraseña generada es: ${password}<strong/>`;

    return true
})