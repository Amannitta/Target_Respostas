function fibonacciSequence(n) {
    let fibSequence = [0, 1];
    while (fibSequence[fibSequence.length - 1] < n) {
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    }
    return fibSequence;
}

function pertenceSequenciaFibonacci(numero) {
    const fibSequence = fibonacciSequence(numero);
    return fibSequence.includes(numero);
}

const numero = parseInt(prompt("Informe um número para verificar se pertence à sequência de Fibonacci: "));

if (pertenceSequenciaFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
