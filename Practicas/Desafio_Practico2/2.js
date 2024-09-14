// Eliminar primer elemento: Crea una función llamada ‘eliminarPrimerElemento’ que tome un array como parámetro 
// y elimine el primer elemento. La función debe devolver el elemento eliminado.

function eliminarPrimerElemento(array){
    return array.shift()
}

array = [1, 5, 6, 82]

arrayEliminado = eliminarPrimerElemento(array)
console.log(arrayEliminado)