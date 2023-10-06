function contarLetras(frase, letra) {
    let contador_letras = 0;
    
    for (let i = 0; i < frase.length; i++) {
        if (frase[i]==letra){
            contador_letras++;
        }
    }
    return contador_letras;
}

let frase = prompt("Ingrese una frase. (se diferencian mayúsculas de minúsculas)");
let letra = prompt("Ingrese una letra. (se diferencian mayúsculas de minúsculas)");

alert(`La cantidad de ${letra}\'s en la frase ${frase} es de: ${contarLetras(frase,letra)}`);