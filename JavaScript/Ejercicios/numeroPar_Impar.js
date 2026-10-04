const prompt = require('prompt-sync')();

let numero;

do {
    numero = Number(prompt("Ingrese un número: "));

    if (numero === 0) {
        console.log(`El ${numero} es 0`);
        continue;
    }
    
    if (numero % 2 === 0) {
        console.log(`El ${numero} es Par`);
    } else if (numero % 2 === 1) {
        console.log(`El ${numero} es Impar`);
    }   
    
} while (numero === 0)