/**
 * Funciones, parametros y argumentos.
 */

function saludar(nombre) { // "nombre" es un parámetro
    console.log(`Hola, ${nombre}!`);
}

saludar("Ana"); // "Ana" es un argumento
// Salida: Hola, Ana!


const crearPersona = (nombre, apellido) => ({ nombre, apellido })

const persona = crearPersona('Claudio', 'Rivera');
console.log(persona);


// Argumentos

function viewArguments() {
    console.log(arguments);
}

viewArguments('Hola Mundo', true, 33);

// Argumentos en funcion de flecha

const verArgumentos = (edad, nombre, ...args) => { console.log({ edad, nombre, args }) }; // ...rest convierte el objeto en un array

verArgumentos(14, 'Emilia', false);


// Rest 

function mostrarDatos(color, ...args) {
    // console.log({ color, args });
    return args;

}

