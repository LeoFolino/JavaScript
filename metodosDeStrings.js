// Strings y accesos unicos
/*
let saludo = "Hola!"
console.log(saludo[0])  //trae la H
console.log(saludo[3])  // trae la a
*/
// .length retorna la cantidad total de caracteres en el string
let miserie = "Lucifer"
console.log(miserie.length)

let arraysNombres = ["Bart", "Lisa", 'Moe']
console.log(arraysNombres.length) // devuelve 3 porque son 3 elementos los que estan en el array
console.log(arraysNombres[0].length) // devuelve 4, porque es la cantidad de caracteres que tiene el elemento 0 del array

// .indexOf()
let saludo = "Hola! Estamos Programando"
console.log(saludo.indexOf("o")) // idnica en que indice esta posicionada la o en el string (1)
console.log(saludo.indexOf("Estamos")) // lo mismo con la palabra, va a devolver el valor 6 porque en ese indice inicia esta palabra
console.log(saludo.indexOf("z")) // devuelve -1 porque no esta z dentro del string

// .slice()
let frase = "Hola! ¿Como estas?"
/* OPCION1 */
console.log(frase.slice(6,11)) // muestra esto "¿Como" porque es el corte desde el indice 6 al 11 del string
/* OPCION2 */
console.log(frase.slice(6)) // muestra desde la posicion 6 en adelante
/* OPCION3 */
console.log(frase.slice(-10)) // va hacia atras, el -1 es el ? y asi sucesivamente hasta llegar al -10 que es "omo estas?"

// .trim()
let nombreCompleto = "    Homero Simpson   "
console.log(nombreCompleto.trim()) // Elimina los espacios antes y despues del string, no los que estan en el medio

// .split()
let saludos = "Hola, ¿Como estas?"
console.log(saludos.split(" "))   // lo que yo defina dentro del parametro split, lo va a usar para separar las palabras y meterlas en un array

let arrayNuevo = saludos.split(", ")
console.log(arrayNuevo)

// replace
let frasee = "Me encanta Java"

let fraseNueva = frasee.replace("Java", "Python")
console.log(fraseNueva)