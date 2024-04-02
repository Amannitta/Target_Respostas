function inverterCaracteres(string) {
    let stringInvertida = "";
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}

const entrada = "Hello";
const stringInvertida = inverterCaracteres(entrada);
console.log("String original:", entrada);
console.log("String com caracteres invertidos:", stringInvertida);

