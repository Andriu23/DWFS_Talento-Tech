/* BUCLES  */

// FOR (INICIADOR - CONDICION - INCREMENTO)

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let colores = ["amarillo", "rojo", "azul", "verde"];

for (let color of colores) {
    console.log(color);
    
}

let persona = {
    nombre: "Andrés",
    edad: 25,
    ciudad: "Bogotá"
};

for (let clave in persona) {
    console.log(persona[clave]);
}

/* WHILE */

let i = 0

while (i < 10) {
    console.log(i);
    i++;
}

/* DO WHILE */

const prompt = require('prompt-sync')();

let adivinar = 42;
let suerte;

do {
    suerte = Number(prompt("Adivina el número del 1 al 100:"));

    if (suerte > 0 && suerte <= 100 && Number.isInteger(suerte)) {
        if (suerte > adivinar) {
            console.log("Intenta con un número menor.");
        } else if (suerte < adivinar) {
            console.log("Intenta con un número mayor.");
        } else {
            console.log(`¡Felicidades! Adivinaste el número: ${suerte}`);
        }
    } else {
        console.log("Ingresa un número entero del 1 al 100.");
    }
} while (suerte !== adivinar);
