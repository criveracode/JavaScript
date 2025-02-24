/**
 * En JavaScript, un objeto es una estructura de datos que permite almacenar propiedades 
 * (también llamadas atributos) y métodos (funciones asociadas al objeto).
 * Las propiedades son pares de clave-valor, donde la clave es un identificador 
 * único dentro del objeto y el valor puede ser cualquier tipo de dato (número, cadena, función, incluso otros objetos).
 */

const persona = {
    nombre: "Juan",
    edad: 30,
    frutas: [
        'manzana',
        'pera',
        'naranja',
        'sandia'
    ],
    saludar: function () {
        console.log("¡Hola, " + this.nombre + " tines " + this.edad + "!");
    },
};


/**
 * El objeto se llama persona.Tiene tres propiedades: nombre (con el valor "Juan"), 
 * edad (con el valor 30) y frutas con un arreglo. Tiene un método saludar, que es una función que 
 * imprime un saludo utilizando el valor de la propiedad nombre.
 */


// Para acceder a las propiedades, se puede usar la notación de punto (.) o la notación de corchetes ([])
console.log(persona.nombre);  // Accede a la propiedad nombre
console.log(persona["edad"]); // Accede a la propiedad edad
persona.saludar();           // Llama al método saludar
console.log('Nº de furtas: ' + persona.frutas.length); // Cuenta el numero de elementos dentro de una propiedad


// Eliminar una propiedad
delete persona.frutas;
console.log(persona);


// Mostrar elementos como un arrays
const entriesPares = Object.entries(persona);
console.log(entriesPares);


// Agregar una propiedad al objeto
persona.estadoCivil = 'soltero';
console.log(persona);


// Obtener solo las propiedades de un objeto
let propiedades = Object.getOwnPropertyNames(persona);
console.log(propiedades);


// Obtener los valores de las propiedades
let valores = Object.values(persona);
console.log(valores);
