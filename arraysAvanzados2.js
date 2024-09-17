// .map()

let numeros = [2,4,6]
let numerosMultiplicados = numeros.map(function(num){
    return num * 2
})

console.log(numerosMultiplicados)

// .filter()
let edades = [22,8,17,14,30]
let mayores = edades.filter(function(edad){
    return edad > 18
})

console.log(mayores)

// .reduce()
let nums = [5, 7, 16]
let suma = nums.reduce(function(acum,num){
    return acum + num
})

console.log(suma)

// .forEach()
let paises = ['Argentina', 'Colombia', 'Brasil']

paises.forEach(function(pais){
    console.log(pais)
})