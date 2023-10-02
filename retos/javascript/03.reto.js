// NOTA PARA EL PROFESOR
// omití la verificación de valores en javascript, pues con las etiquetas adecuadas en html, esta verificación se hace automáticamente al enviar el formulario, antes de pasar por el javascript.
const form = document.getElementById("propina-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let form_data = new FormData(form);
    let precio = Number(form_data.get("precio-input"));
    let porcentaje = Number(form_data.get("propina-select"));

    let propina = (precio * porcentaje) / 100;
    let total = propina + precio;

    const propina_output = document.getElementById("propina-output");
    const total_output = document.getElementById("total-output");

    propina_output.innerHTML = `$${propina} CLP`;
    total_output.innerHTML = `$${total} CLP`;
});
