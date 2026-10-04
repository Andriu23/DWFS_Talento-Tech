const prompt = require('prompt-sync')();

let numero = Number(prompt("Ingrese un número: "));

let factorial = 1;

for (let i = 1; i <= numero; i++){
    factorial = factorial * i;
}

console.log(`El factorial ${numero} es: ${factorial}`);