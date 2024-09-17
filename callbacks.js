function procesarArray(array,callback){
    for(let i = 0; i < array.length ; i++){
        callback(array[i])
    }
}

function mostrarElemento(elemento){
    console.log(elemento)
}

let miarray = [1,2,3,4,5]

procesarArray(miarray,mostrarElemento)

function multiplicarX2(elemento){
    console.log(elemento*2)
}


procesarArray(miarray,multiplicarX2)