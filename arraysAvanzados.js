// .slice()
// let newArray = arrayOriginal.slice(inicio,fin)

let frutas = ['Manzana', 'Naranja', 'Banana', 'Fresa', 'Kiwi']
let primerasTres = frutas.slice(0,3)
console.log(primerasTres)

let desdeNaranja = frutas.slice(1)
console.log(desdeNaranja)

let ultimosDos = frutas.slice(-2)
console.log(ultimosDos)

let entreDosIndices = frutas.slice(-3,4)
console.log(entreDosIndices)

// .splice()
// arrayOriginal.splice(inicio, cantidadAEliminar, elemento1, elemento2, etc...)

let meses = ['Enero','Febrero','Marzo','Abril','Mayo']

meses.splice(1,2,'NuevoMes1', 'NuevoMes2')
console.log(meses)

meses.splice(2,0,"Nuevomes3")
console.log(meses)

// .sort()
let numeros = [5,4,8,1,6,9]

numeros.sort()
console.log(numeros)

palabras = ['perro', 'gato', 'auto', 'zorro']
palabras.sort()
console.log(palabras)

// .find()
// let resultado = arrayOriginal.find(funciondePrueba(elemento))

let edades = [25,18,30,15,22]
let mayorDeEdad = edades.find(edad => edad >= 18)
console.log(mayorDeEdad)

let primeraEdadMayor = edades.find(edad => edad > 30)
console.log(primeraEdadMayor)

