// let contador = 0

// while(contador <= 10){
//     console.log(contador)
//     contador++
// }
const prompt = require('prompt-sync')();

let control = "si"
console.log("Bienvenido al registro de notas")
let nota
let sumaNotas = 0
let cant = 0

while(control == "si"){
    console.log("Ingrese una nota a sumar: ")
    nota = parseInt(prompt("Nota alumno: ")) // si el usuario carga ej 8

    // 0            0     +   8
    sumaNotas = sumaNotas + nota

    cant++

    control = prompt("Ingrese 'si' si desea agregar mas notas, o 'no' si no desea agregar mas")
}

let promedio = sumaNotas / cant
console.log("El promedio es " + promedio)