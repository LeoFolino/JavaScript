const prompt = require('prompt-sync')();
/*
let i = 1

while(i <= 10){

    console.log(i)

    i++

}*/
/*
let j = 1

do{
    console.log(j)

    j++

}while(j <= 10)*/

let nroaAdivinar = 4
let intento = 0
let numero

do{

    numero = parseInt(prompt("Ingrese un numero del 1 al 10: "))
    if (numero < nroaAdivinar){
        console.log("Muy bajo, ingrese nuevamente")
    } else if (numero > nroaAdivinar){
        console.log("Muy alto, intente nuevamente")
    } else{
        console.log("Bien! Adivinaste el numero")
    }

    intento++

}while(numero != nroaAdivinar)

console.log("Adivinaste el numero en " + intento + " intentos")