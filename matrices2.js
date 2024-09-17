let matriz = [
    [1, 2, 3] , 
    [4, 5, 6] , 
    [7, 8, 9]
]

// recorrer la totalidad de datos de la matriz

for(let i=0; i < matriz.length; i++) // for para recorrer las filas

    for(let j = 0 ; j < matriz.length ; j++){ // for para recorrer las columnas

        console.log(matriz[i][j])
    }

// FILTRAR SOLO LOS PARES

for(let i=0; i < matriz.length; i++){ // i = 0
    for(let j=0; j < matriz.length; j++){ // j = 0
        if(matriz[i][j] % 2 == 0){ // si divido el numero por 2 y el resto es igual a cero, el numero es par
            console.log(matriz[i][j])
        }
    }
}

let matriz2 = [
    [1, 2, 3] , 
    [4, 5, 6] , 
]

for(let i=0; i < matriz2.length; i++){ 
    for(let j=0; j < matriz2[i].length; j++){  // como la matriz no es cuadrada, necesito especificar que recorra x columnas este for
        if(matriz[i][j] % 2 == 0){ 
            console.log(matriz2[i][j])
        }
    }
}