function inverterCaracteres(string) {
    let stringInvertida = "";
    // Percorre a string de trás para frente e concatena cada caractere à string invertida
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}

// Exemplo de uso
const entrada = "Hello";
const stringInvertida = inverterCaracteres(entrada);
console.log("String original:", entrada);
console.log("String com caracteres invertidos:", stringInvertida);

