// alert("Hola Mundo");

/* console.log("¡Hola Mundo!");
console.info("Mensaje informativo");
console.error("Esto es un error"); */

// TIPOS DE DEFINICIÓN DE DATOS

// var: Declara , Redeclara, Asigna y Reasigna 
var numero;
numero = 10;
var numero = 20;
console.log(numero);

// let: Declara, Asigna y Reasigna
let nombre;
nombre = "Andres";
nombre = "Nazly";
console.log(nombre);

// const: Declara y asigna al mismo tiempo
const PI = 3.141516;
console.log(PI);

// TIPOS DE DATOS PRIMITIVOS

let apellido = "Satoba";
console.log(typeof apellido); // tipo dato string
let edad = 35;
console.log(typeof edad); // tipo dato number
let estudiante = true;
console.log(typeof estudiante); // tipo dato boolean
let nulo = null;
if (nulo === null) {
    console.log('Es una variable null') // tipo dato null
}
let cantidad;
console.log(typeof cantidad); // tipo dato undefined

let id = Symbol("usuario"); // tipo dato Symbol
console.log(typeof id);

console.log("-".repeat(30));

// PROMPT: Pide ingresar datos por pantalla
const primerNumero = prompt("Ingrese el primer número: "); 
const segundoNumero = prompt("Ingrese el segundo número: ");

const resultado = Number(primerNumero) + Number(segundoNumero); // Number: combierte los datos a Número
alert(`El resultado es: ${resultado}`);

// Variables de utilizando el let - Puede variar en el tiempo
// Variables de utilizando el const - No puede variar en el tiempo

/* Diferentes tipos de datos */
// String - Cadenas de texto
// Number - Números
// Boolean - 1/0 - True/False
// Null - Cuando una variable o constante es declarada como null.
// Undefined - Cuando una variable se declara, pero no se le asigna un valor