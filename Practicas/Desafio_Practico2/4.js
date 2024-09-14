// Manipulación de objetos: Crea un objeto llamado ‘persona’ que contenga como propiedades: nombre, edad y ocupación. 
// Crea una función que muestre cada propiedad de dicho objeto por consola, e invocala para ver sus valores. Luego, modifica el valor de 
// ‘ocupación’ y agrega la propiedad ‘habilidad’. Llama nuevamente a la función creada para visualizar el cambio efectuado.

let persona = {
    nombre : "Peter",
    edad : 18,
    ocupacion : "SpiderMan"
}

function datosPersona(objeto){
    console.log(objeto.nombre)
    console.log(objeto.edad)
    console.log(objeto.ocupacion)
    if (objeto.habilidad){
        console.log(objeto.habilidad)
    }
}

datosPersona(persona)

persona.ocupacion = "Fotografo"
persona.habilidad = "Trepar paredes"
datosPersona(persona)