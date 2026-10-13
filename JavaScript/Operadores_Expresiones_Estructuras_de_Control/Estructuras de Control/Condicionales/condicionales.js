const prompt = require('prompt-sync')();

/* IF */

let edad = Number(prompt("Ingrese su edad: "));

/* if (edad >= 18) {
    console.log("Usted es mayor de edad en Colombia");
    let fecha = new Date();    
    let anioDeNacimiento = fecha.getFullYear() - edad;
    console.log("Su año de nacimiento es: ", anioDeNacimiento);
} */

/* IF ELSE */

let fecha = new Date();    
let anioDeNacimiento = fecha.getFullYear() - edad;

if (edad >= 18) {
    console.log("Usted es mayor de edad en Colombia");
    console.log("Su año de nacimiento es: ", anioDeNacimiento);
} else {
    console.log("Usted es menor de edad en Colombia");
    console.log("Su año de nacimiento es: ", anioDeNacimiento);
}

/* ELSE IF */

let continente = prompt("ingrese un continente: ");

continente = continente.charAt(0).toUpperCase() + continente.slice(1).toLowerCase();

if (continente === "America") {
    console.log(`Usted vive en el occidente: ${continente}`);
    
} else if (continente === "Europa") {
    console.log(`Usted vive en medio oriente: ${continente}`);
} else {
    console.log(`Usted vive en otro continente: ${continente}`);
}

/* SWITCH */

let dia = Number(prompt("Ingrese un día de la semana (1-7): "));

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Número inválido. Ingrese un número del 1 al 7.");
}
