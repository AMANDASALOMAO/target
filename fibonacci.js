function isFibonacciNumber(number) {
    let a = 0;
    let b = 1;
    let c;

    while (true) {
        if (a === number) {
            return true;
        } else if (a > number) {
            return false;
        }
        c = a + b;
        a = b;
        b = c;
    }
}
function generateFibonacciSequence(limit) {
    let sequence = [];
    let a = 0;
    let b = 1;

    while (a <= limit) {
        sequence.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }

    return sequence;
}
const numero = 21;
const sequencia = generateFibonacciSequence(numero);

if (isFibonacciNumber(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
