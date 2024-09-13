// Crear un array
/*let edades = [24, 37, 18, 59, 7]
let nombres = ["Juana", "Raul", "Alan"]
let booleanos = [true, false, false, true]
let combinados = [15, "Hola", true] // practica no del todo correcta
let numeros = [10, 20, 30, 40, 50]*/

// Acceder a un elemento especifico de un array
/*console.log(edades[0])
console.log(edades[3])
console.log(nombres[2])
console.log(nombres[0])*/

// Recorrer un array [.length cuenta la cantidad de elementos que tiene el array, en el caso de edades.length, devuelve el valor 5]
/*for(i = 0; i < edades.length ; i++ ){ // i = 0 representa la posicion donde va a arrancar a iterar sobre el array
    console.log(edades[i])
}*/
// Modificar cada uno de sus elementos a un array e imprimirlos
/*for(let i=0; i < numeros.length; i++){
    numeros[i] = i+1
}*/

// for(let i=0; i < numeros.length; i++){
//     console.log(numeros[i])
// }

// Agregar elementos a un array
/*let notas = [8,4,10,6]
notas[notas.length] = 7 // como .length va a devolver el numero 4 (porque devuelve la cantidad total de elementos, no como se posicionan en un array, quedaria notas[4]=7)

for(let i=0; i < notas.length; i++){
    console.log(notas[i])
}*/

// Extraer elementos de un array a una variable
/*let nombre=["Pedro", "Fabian", "Adriana"]
let nombreSeleccionado = nombre[1]
console.log(nombreSeleccionado)*/

// Extraer todos los elementos para algo especifico
/*
let numeros = [10, 20, 30, 40, 50]
let sumaNumeros = 0

for(let i=0; i < numeros.length ; i++){
    sumaNumeros = sumaNumeros + numeros[i]
}
let promedio = sumaNumeros / numeros.length
console.log(promedio)
*/

// Encontrar el mayor o menor
/*let numeros = [50, 48, 30, 52, 19]

let menor = numeros[0]

for(let i=0; i < numeros.length ; i++){
    if(numeros[i] < menor){
        menor = numeros[i]
    }
}

console.log(menor)*/