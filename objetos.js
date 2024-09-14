// crear un objeto  --> propiedades: caracteristicas que comparten // metodos--> aquellas acciones que permitamos realizar

let persona = {
    nombre : "Ezequiel",
    apellido : "Diaz",
    edad : 30,
    coloresFavoritos : ["Azul" , "Amarillo"],
    saludar : function(){
        return "Hola, como estas? Soy " + this.nombre // this va a llamar el valor de ESTE objeto
    }
}

// acceder a las propiedades de un objeto

console.log(persona.coloresFavoritos)

// cargar una nueva propiedad
persona.deporteFavorito = "Futbol"
persona.edad = 31
console.log(persona.deporteFavorito)
console.log(persona.edad)

// eliminar una propiedad
//delete persona.deporteFavorito
//console.log(persona)

// acceder a un metodo de un objeto (funciones)

persona.nombre = 'Martin'

let saludoRecibido = persona.saludar()
console.log(saludoRecibido)

