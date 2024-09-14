
// Objetos anidados: Agrega una nueva propiedad al objeto creado en el ejercicio anterior llamada 
// ‘ubicacion’, donde deberás guardar un objeto interno con las propiedades: codigoPostal, ciudad, calle y número. 
// Luego, crea una función que reciba dicho objeto por parámetro y le permita al usuario eliminar solo una de las propiedades del objeto.

let persona = {
    nombre : "Peter",
    edad : 18,
    ocupacion : "SpiderMan",
    ubicacion : {
        codigoPostal: "10001",
        ciudad: "New York",
        calle: "Queens Blvd",
        numero: 20
    }
}

function datosPersona(objeto){
    console.log(objeto.nombre)
    console.log(objeto.edad)
    console.log(objeto.ocupacion)
    if (objeto.habilidad){
        console.log(objeto.habilidad)
    }
    console.log(objeto.ubicacion)
}

datosPersona(persona)