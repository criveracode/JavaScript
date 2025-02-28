/**
 * Parametros y argumentos.
 */

/*******************************************************************/

function saludar(nombre) { // "nombre" es un parámetro
    console.log(`Hola, ${nombre}!`);
}

saludar("Ana"); // "Ana" es un argumento
// Salida: Hola, Ana!

/*******************************************************************/


const crearPersona = (nombre, apellido) => ({ nombre, apellido })// Funcion 

const persona = crearPersona('Claudio', 'Rivera');
console.log(persona);


/*******************************************************************/

function viewArguments() {
    console.log(arguments);
}

viewArguments('Hola Mundo', true, 33);

/*******************************************************************/

// Argumentos en funcion de flecha

const verArgumentos = (edad, nombre, ...args) => { console.log({ edad, nombre, args }) }; // ...rest convierte el objeto en un array

verArgumentos(14, 'Emilia', false);

/*******************************************************************/

/**
 * 1. Spread (...)
 * 
 * Se usa para expandir los elementos de un array u objeto en otro lugar.
 */

const numeros = [1, 2, 3];
const nuevosNumeros = [...numeros, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
console.log(nuevosNumeros);

const usuario = { nombre: "Juan", edad: 30 };
const nuevoUsuario = { ...usuario, ciudad: "Madrid" };
console.log(nuevoUsuario); // { nombre: "Juan", edad: 30, ciudad: "Madrid" }

/*******************************************************************/

/**
 * 2. Rest (...)
 * 
 * Se usa para agrupar el resto de los elementos en un array u objeto.
 */

function suma(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}
console.log(suma(1, 2, 3, 4)); // 10


const [primero, segundo, ...resto] = [10, 20, 30, 40, 50];
console.log(primero); // 10
console.log(segundo); // 20
console.log(resto); // [30, 40, 50]


const persona2 = { nombre: "Ana", edad: 25, ciudad: "Lima" };
const { nombre, ...otrosDatos } = persona2;
console.log(nombre); // "Ana"
console.log(otrosDatos); // { edad: 25, ciudad: "Lima" }

function mostrarDatos(nombre, edad, ...hobbies) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);
}

mostrarDatos("Ana", 25, "Leer", "Viajar", "Correr");
// Nombre: Ana, Edad: 25
// Hobbies: Leer, Viajar, Correr

