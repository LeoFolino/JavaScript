// .push() añade elementos a un array
/*
let colores = ["Rojo", "Naranja", "Azul"]

colores.push("Verde")
console.log(colores)

colores.push("Gris", "Dorado")
console.log(colores)
*/

// .pop() elimina siempre el ultimo elemento de un array
/*
let colores = ["Rojo", "Naranja", "Azul"]
let colorEliminado = colores.pop()

console.log(colores)
console.log(colorEliminado)
*/

// .shift elimina siempre el primer elemento de un array
/*
let nombres = ["Sandra", "Lautaro", "Ezequiel"]
let nombreEliminado = nombres.shift()
console.log(nombres)
console.log(nombreEliminado)
*/

// .unshift agrega al principio elementos a un array
/*
let marcas = ["Audi"]
marcas.unshift("Ford")
console.log(marcas)
marcas.unshift("Ferrari, BMW")
console.log(marcas)
*/

// .join() separa por comas, o si se define en parametro, con lo que se defina en el parametro
/*
let dias = ["Lunes", "Martes", "Miercoles"]
let separadosPorComa = dias.join()
console.log(separadosPorComa)

let separadosPorGuion = dias.join(" - ")
console.log(separadosPorGuion)
*/

// .indexOf te devuelve el indice donde esta posicionado en el array el elemento
/*
let frutas = ["Manzana", "Banana", "Frutilla"]

let indiceEncontrado = frutas.indexOf("Banana")
console.log(indiceEncontrado)
*/

// .lastIndexOf devuelve el indice donde esta posicionado en el array el elemento, pero empezando de derecha a izquierda
/*
let clubes = ["Racing", "Boca", "Lanus", "Boca"]

let posicionEncontrada = clubes.lastIndexOf("Boca")
console.log(posicionEncontrada)
*/

// .includes() devuelve un true o false si el elemento esta en el array
/*
let frutas = ["Banana", "Manzana", "Pera"]

console.log(frutas.includes("Anana"))
console.log(frutas.includes("Manzana"))
*/