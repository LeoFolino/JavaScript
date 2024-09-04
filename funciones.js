// definicion o declaracion de una funcion

// function saludar(){
//     console.log("Hola!!!")
// }

// // llamado a la funcion
// saludar()
// saludar()
// saludar()
// saludar()

//------------PARAMETROS-------------

// declaramos la funcion
// function suma(num1, num2){
//     let resultado = num1 + num2
//     console.log("El resultado es: " + resultado)
// }

// // llamar la funcion
// suma(10, 5)
// suma(20, 3)
// suma(-100, 8)

//-----------SCOPE Y RETORNOS----------
function suma(nota1,nota2,nota3){
    let resultado = nota1+nota2+nota3
    return resultado // return hace que el valor de resultado, va a suplantar al valor suma(7,9,8)
}

let rdoSuma = suma(7,9,8)
console.log(rdoSuma)

function promedio(){
    let rdoSuma = suma(7,9,8)
    let rdoPromedio = rdoSuma / 3
    return rdoPromedio
}

let promedioObtenido = promedio()
console.log("El promedio de sus notas es: " + promedioObtenido)