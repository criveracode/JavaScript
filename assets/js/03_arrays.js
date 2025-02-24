/**
 * Arrays
 * 
 * Un array (o matriz) es una estructura de datos que permite almacenar 
 * una colección de elementos, que pueden ser de cualquier tipo de datos, 
 * como números, cadenas, objetos, e incluso otros arrays. Los elementos 
 * de un array están ordenados y se accede a ellos mediante índices 
 * numéricos, comenzando desde el índice 0.
 */


// Creación de un array con la clase Array
const canasta = new Array('manzana', 'platano', 'frutilla');
console.log(canasta);

// Creación de un array con la notación de corchetes
const colores = ['rojo', 'verde', 'azul'];
console.log(colores);

// Creación de un array vacío
const emptyArray = [];
console.log(emptyArray);

// Creación de un array con elementos de diferentes tipos de datos
const mixedArray = [
    1,
    'hola',
    true,
    { nombre: 'Juan' },
    console.log(),
    () => { },
    ['manzana', 'pera', 'naranja', [
        'nuez', 'almendra'
    ]]
];
console.log(mixedArray[6][3][1]);


/**
 * Propiedades y metodos de un arrays
 */

// Largo de un array
console.log('Longitud Array: ', colores.length);

// Primer elemento de un array
console.log('Primer elemento: ', colores[0]);

// Ultimo elemento de un array
console.log('Ultimo elemento: ', colores[colores.length - 1]);

// Recorriendo y mostrando un array
colores.forEach((elemento, indice, array) => {
    console.log({ elemento, indice, array });

});

// Agregando un elemento al final de un array
let finalElement = colores.push('naranjo');
console.log(colores, 'Nueva longitud:', finalElement);

// Agregando un elemento al principio de un array
let firstElement = colores.unshift('morado');
console.log(colores, 'Nueva longitud: ', firstElement);

// Eliminar ultimo elemento del array
let deleteElement = colores.pop();
console.log(colores, 'Color eliminado: ', deleteElement);

// Eliminar varios elementos de un array
let deleteElements = colores.splice(1, 2);
console.log(colores, deleteElements);
console.log(colores);

// Buscar un elemento dentro del array, casesensitive.
let findElement = colores.indexOf('azul');
console.log(colores[findElement]);
