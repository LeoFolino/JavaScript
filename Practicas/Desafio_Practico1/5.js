// Generador de Mensajes Personalizados: Crea una función que genere un mensaje personalizado
// para un usuario según su nombre y el momento del día (solo tendremos en consideración si es de mañana,
// o es de tarde). Utiliza concatenación e interpolación para construir el mensaje, y condicionales (if ternario) 
// para incluir diferentes saludos.

function generarMensajePersonalizado(nombre, esManana) {
    const saludo = esManana ? 'Buenos días' : 'Buenas tardes';
    return saludo + ', ' + nombre + '. ¡Que tengas un buen día!';
  }
  
  // Ejemplos de uso:
  console.log(generarMensajePersonalizado('Juan', true)); // Buenos días, Juan. ¡Que tengas un buen día!
  console.log(generarMensajePersonalizado('María', false)); // Buenas tardes, María. ¡Que tengas un buen día!
  