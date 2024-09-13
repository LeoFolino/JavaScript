// Evaluador de Rango de Edad: Escribe una función que determine en qué categoría de edad 
// se encuentra una persona. Utiliza las estructuras que consideres necesarias para clasificar
//  a las personas en rangos como niño, adolescente, adulto joven, adulto, etc., según su edad.

function evaluarRangoEdad(edad) {
    if (edad >= 0 && edad <= 12) {
      return 'Niño';
    } else if (edad >= 13 && edad <= 17) {
      return 'Adolescente';
    } else if (edad >= 18 && edad <= 25) {
      return 'Adulto Joven';
    } else if (edad >= 26 && edad <= 64) {
      return 'Adulto';
    } else if (edad >= 65) {
      return 'Adulto Mayor';
    } else {
      return 'Edad no válida';
    }
  }
  
  // Ejemplos de uso:
  console.log(evaluarRangoEdad(10)); // Niño
  console.log(evaluarRangoEdad(16)); // Adolescente
  console.log(evaluarRangoEdad(22)); // Adulto Joven
  console.log(evaluarRangoEdad(45)); // Adulto
  console.log(evaluarRangoEdad(70)); // Adulto Mayor
  