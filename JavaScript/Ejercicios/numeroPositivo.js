const prompt = require('prompt-sync')();

let numero;

while (numero === "" || isNaN(numero)) {
    numero = prompt("ingrese un número: ");

    if (numero === "" || isNaN(numero) ) {
        console.log('Debe ingresar un número');
        continue;
    }

    if (numero > 0) {
        console.log(`El ${numero} es Positivo`);
    } else if (numero < 0) {
        console.log(`El ${numero} es Negativo`);
    } else {
        console.log(`El ${numero} es 0`);
    }
}