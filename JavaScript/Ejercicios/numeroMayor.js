const prompt = require('prompt-sync')();

let num1;
let num2;

do {
    num1 = Number(prompt("Ingrese el primer número: "));
    num2 = Number(prompt("Ingrese el segundo número: "));

    if (num1 > num2) {
        console.log(`El número mayor es: ${num1}`);
    } else if (num2 > num1) {
        console.log(`El número mayor es: ${num2}`);
    } else {
        console.log("Ambos números son iguales");
        
    }
} while (num1 === num2);