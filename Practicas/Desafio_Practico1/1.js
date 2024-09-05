// Validador de contraseña: Crea una variable llamada ‘contraseña’ donde guardes un valor específico. 
// Luego, crea una función que reciba por parámetro un dato y utilizando operadores lógicos y condicionales, 
// verifica si dicho parámetro coincide con la variable llamada ‘contraseña’. La función deberá mostrar por consola 
// si la contraseña recibida es válida o no.

let contraseña = "6s8f3s5f765s"

function dato(pass){
    if (pass == contraseña){
        console.log("Bienvenido al programa")
    } else {
        console.log("Contraseña inválida")
    }
}

dato("6s8f3s5f765s")