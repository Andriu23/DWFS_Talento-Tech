const prompt = require('prompt-sync')();


let numero;

do {
    numero = Number(prompt("Ingrese un número mayor a 0: "));

    if (numero > 0) {
        console.log(`Tabla de multiplicar del ${numero}`);

        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} * ${i} = ${numero * i}`);
        }
    } else {
        console.log("Error: ingrese un número mayor a 0.");
    }

} while (numero <= 0 || Number.isNaN(numero));