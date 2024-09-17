// Funciones declaradas

function suma(num1, num2){ // puedo llamarla o invocada antes o despues sin inconvenientes
    return num1+num2
}
console.log(suma(10,5))

// Funciones expresadas

let resta = function(num1,num2){ // esta funcion no existe hasta que se recorra el codigo y llegue a este punto, se debe llamar si o si luego de que se define
    return num1-num2
}

console.log(resta(10,5))

// Funciones flecha (Arrow Functions) // al igual que funciones expresadas, no funciona hasta que se define en el codigo
let multiplicacion = (num1,num2) => {
    return num1 * num2
}

console.log(multiplicacion(2,3))

let objeto = {
    valor : 10,
    doble : function(){
        return this.valor * 2
    }
}

console.log(objeto.doble())