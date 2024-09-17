// Crear una matriz
// opcion1
let matriz = [
    [1, 2, 3] , 
    [4, 5, 6] , 
    [7, 8, 9]]

// opcion2
/*let arrayMatriz = []

let fila1 = ["x0", "x1", "x2"]
let fila2 = ["y0", "y1", "y2"]

arrayMatriz[0] = fila1
arrayMatriz[1] = fila2*/

// Visualizar una matriz
console.table(matriz)
 // console.table(arrayMatriz)

// Acceder a un elemento especifico
console.log(matriz[1][1]) // [fila][columna]
console.log(matriz[0][2])
console.log(matriz[2][1])

// Modificar un elemento especifico
matriz[0][1] = 15
console.table(matriz)

// Recorrer una columna especifica
for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i][0])
}

// Recorrer una fila especifica
for(let i = 0; i < matriz.length; i++){
    console.log(matriz[0][i])
}
