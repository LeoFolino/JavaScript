// let edad = 25

// if(edad >= 18){
//     console.log("La persona es mayor de edad")
// }
// else{
//     console.log("La persona es menor de edad")
// }

// -----------CONDICIONALES ANIDADOS----------
// let clima = "soleado"
// let temp = 20
// let mensaje = ""

// if ( clima === "soleado" && temp >= 25){
//     console.log("El dia esta caluroso")
// } else {
//     console.log("El dia no esta caluroso")
// }

// let puntuacion = 80

// if(puntuacion >= 90){
//     console.log("Nota A")
// } 
// else if(puntuacion >= 80){
//     console.log("Nota B")
// }
// else if(puntuacion >= 70){
//     console.log("Nota C")
// }
// else{
//     console.log("Nota D")
// }


// let = nota = -78

// if (nota >= 0 && nota <=10){
//     if(nota >= 7 ){
//         console.log("Aprobaste la materia")
//     }
//     else{
//         console.log("Tenes que recursar pa")
//     }
// }
// else{
//     console.log("La nota enviada es erronea! Debe ser del 1 al 10")
// }

//-----------IF TERNARIO--------------

//tradicional vs ternario
let numero = -5

if (numero > 0){
    console.log("Es positivo") //if tradicional
}
else{
    console.log("Es negativo")
}

(numero > 0) ? console.log("Es positivo"):console.log("Es negativo")  // if ternario

// asignacion a variable
let edad = 30
// let msj = ""

if(edad >= 18){
    msj = "Es mayor"
}
else{
    msj = "Es menor"
}

msj = (edad >= 18) ? "Es mayor":"Es menor" // Asignacion a variable
console.log(msj)


// mas de una instruccion
let Edad = 20
let mensaje = ""
let categoria = ""

if(edad >= 18){  // if tradicional
    mensaje = "Es mayor de edad"
    categoria = "Adulto"
    console.log("Felicidades, eres mayor de edad")
}
else{
    mensaje = "Es menor de edad"
    categoria = "Menor"
    console.log("Felicidades, eres menor de edad")
}

(edad >= 18) ? (
    mensaje = "Es mayor de edad",
    categoria = "Adulto",
    console.log("Felicidades, eres mayor de edad")) : (
        mensaje = "Es menor de edad",
        categoria = "Menor",
        console.log("Felicidades, eres menor de edad"))