/* Operadores */

// Operadores Aritmétricos
/* SUMA DE CARACTERES */
console.log(`La concatenación de 15 y 21 es: ${"15" + "21"}`); // Estamos concatenando tipos de datos string

let numero = 50;
let numero1 = 2;

/* SUMA */
console.log(`La suma de 50 + 2 es: ${numero + numero1}`);

/* RESTA */
console.log(`La resta de 50 - 2 es: ${numero - numero1}`);

/* Multiplicación */
console.log(`La multiplicación de 50 * 2 es: ${numero * numero1}`);

/* División */
console.log(`La división de 50 / 2 es: ${numero / numero1}`);

/* Módulo */
console.log(`El módulo de 50 % 2 es: ${numero % numero1}`);

/* Potencia */
console.log(`La potencia de 50 ** 2 es: ${numero ** numero1}`);


// INCREMENTO 
/* let incremento = 1;
incremento++;
console.log(incremento); */

// DECREMENTO
/* let decremento = 1;
decremento--;
console.log(decremento); */

/* OPERADORES LÓGICOS
AND - OR - NOT */

let verdadero = true;
let falso = false;
let otroVerdadero = true;
let otroFalso = false;

let resultadoOperadorAnd = verdadero && otroVerdadero; // Ambas condiciones deben ser true
console.log(`El resultado del operador AND es: ${resultadoOperadorAnd}`);

let resultadoOperadorOR = verdadero || falso; // Una de las dos debe ser true
console.log(`El resultado del operador OR es: ${resultadoOperadorOR}`);

let resultadoOperadorNOT = !otroFalso; // Niega la condicion de true a false y de false a true
console.log(`El resultadoOperador NOT es: ${resultadoOperadorNOT}`);

/* OPERADORES DE COMPARACIÓN 
=, ==, ===, !=, !==, >, >=, <, <=
*/

let mayorQue = 10 > 5;
console.log(mayorQue);
let MenorQue = 2 < 7;
console.log(MenorQue);
let igual = 20 == "20";
console.log(igual);
let estrictamenteIgual = 20 === "20";
console.log(estrictamenteIgual);
let diferente = 15 != "15";
console.log(diferente);
let estritamenteDiferente = 15 !== "15";
console.log(estritamenteDiferente);

/* CONCATENACIÓN */

let array = [1, 2, 3, 4, 5];
let adicionales = [6, 7, 8, 9, 0];

let concatenacion = array.concat(adicionales);
console.log(concatenacion);

/* OPERADORES TERNARIOS */

let edad = 17;
let acceso = (edad >= 18) ? "Acceso Concedido" : "Acceso Denegado";
console.log(acceso);
