
const prompt = require('prompt-sync')();

let estudiantes;
let notaTotal = 0;
let resultados = "";

while (true) {
    estudiantes = Number(prompt("Ingrese la cantidad de estudiantes: "));

    if (!isNaN(estudiantes) && Number.isInteger(estudiantes) && estudiantes > 0) {
        break;
    } else {
        console.log("Ingrese una cantidad válida de estudiantes.");
    }
}

for (let i = 1; i <= estudiantes; i++) {
    let nota;

    while (true) {
        nota = Number(prompt(`Ingrese la nota del estudiante ${i} (0 a 100): `));

        if (!isNaN(nota) && nota >= 0 && nota <= 100) {
            break;
        } else {
            console.log("La nota debe estar entre 0 y 100.");
        }
    }

    let clasificacion;

    switch (true) {
        case nota >= 90:
            clasificacion = "Excelente";
            break;
        case nota >= 75:
            clasificacion = "Bueno";
            break;
        case nota >= 60:
            clasificacion = "Regular";
            break;
        default:
            clasificacion = "Necesita Mejorar";
    }

    resultados += `Estudiante ${i} | Nota: ${nota} | Clasificación: ${clasificacion}\n`;
    notaTotal += nota;
}

let promedio = notaTotal / estudiantes;
let clasificacionPromedio;

switch (true) {
    case promedio >= 90:
        clasificacionPromedio = "Excelente";
        break;
    case promedio >= 75:
        clasificacionPromedio = "Bueno";
        break;
    case promedio >= 60:
        clasificacionPromedio = "Regular";
        break;
    default:
        clasificacionPromedio = "Necesita Mejorar";
}

console.log("\n--- RESULTADOS FINALES ---");
console.log(resultados);
console.log(`Promedio de la clase: ${promedio.toFixed(2)} | Clasificación: ${clasificacionPromedio}`);