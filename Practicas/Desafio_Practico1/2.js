// Calculadora de Índice de Masa Corporal (IMC): Crea una función que calcule el IMC 
// utilizando los parámetros de peso y altura. Usa operadores aritméticos y condicionales 
// para evaluar diferentes rangos de IMC (bajo peso, peso normal, sobrepeso, etc.).


function IMC(peso, altura){
    let iemece = peso / (altura * altura)
    if (iemece < 18.5){
        console.log("Bajo peso")
    } else if(iemece >= 18.5 && iemece < 25){
        console.log("Peso normal")
    } else if(iemece >= 25){
        console.log("Sobrepeso")
    } else if(iemece >= 30){
        console.log("Obesidad")
    } else{
        console.log("No se pueden ingresar valores negativos")
    }
}

IMC(70, 1.75)