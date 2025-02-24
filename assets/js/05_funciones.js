/**
 * En JavaScript, una función es un bloque de código reutilizable 
 * que realiza una tarea específica. Las funciones pueden recibir 
 * valores de entrada (parámetros) y devolver un resultado.
 */


/**
 * Funciones declaradas (Function Declaration)
 * Se definen con la palabra clave function y pueden 
 * llamarse antes de su definición gracias al hoisting.
 */
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar("Juan")); // "Hola, Juan!"

/**
 * Funciones expresadas (Function Expression)
 * Se almacenan en una variable y no tienen hoisting.
 */
const sumar = function (a, b) {
    return a + b;
};

console.log(sumar(5, 3)); // 8

/**
 * Funciones flecha (Arrow Functions)
 * Son más compactas y no tienen su propio this.
 */
const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 2)); // 8

/**
 * Funciones anónimas
 * No tienen nombre y suelen usarse como argumentos en otras funciones.
 */
setTimeout(function () {
    console.log("Hola después de 3 segundos");
}, 3000);

/**
 * Funciones autoejecutables (IIFE)
 * Se ejecutan inmediatamente después de definirse.
 */

(function () {
    console.log("Ejecutado automáticamente");
})();

/**
 * Funciones dentro de objetos (Métodos)
 * Son funciones que pertenecen a un objeto.
 */

const persona = {
    nombre: "Carlos",
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
};

console.log(persona.saludar()); // "Hola, soy Carlos"

/**
 * Funciones con valores por defecto
 * Se pueden definir parámetros con valores predeterminados.
 */

function potencia(base, exponente = 2) {
    return base ** exponente;
}

console.log(potencia(3)); // 9 (3²)

/**
 * Funciones de orden superior
 * Son funciones que reciben o retornan otras funciones.
 */

function operar(a, b, operacion) {
    return operacion(a, b);
}

console.log(operar(10, 5, (x, y) => x - y)); // 5


// Funcion math

const numeroRandom = () => Math.random();
console.log('Numero random: ' + numeroRandom());
