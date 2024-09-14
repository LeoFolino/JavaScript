
// Convertir texto: Crea una función que reciba un string por parámetro y lo convierta a mayúsculas y minúsculas respectivamente. 
// La función deberá mostrar los resultados por consola. Para esto, averiguar qué hacen los métodos de Strings: toUpperCase() y toLowerCase()

function cambioTexto(texto){
    let mayus = texto.toUpperCase()
    let minus = texto.toLowerCase()
    console.log("Texto en mayúsculas:", mayus);
    console.log("Texto en minúsculas:", minus);
}

texto = "SpiderMan NeceSito Ayuda de DrStrange"
cambioTexto(texto)