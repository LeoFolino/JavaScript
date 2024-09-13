// Conversor de Monedas: Crea una función que convierta una cantidad de dinero de una
//  moneda a otra. Usa variables para almacenar tasas de cambio y condicionales para manejar diferentes tipos de monedas.

function convertirMoneda(cantidad, monedaOrigen, monedaDestino) {
    let tasaDeCambio;
  
    // Definir tasas de cambio usando condicionales
    if (monedaOrigen === "USD" && monedaDestino === "EUR") {
      tasaDeCambio = 0.93;
    } else if (monedaOrigen === "USD" && monedaDestino === "GBP") {
      tasaDeCambio = 0.81;
    } else if (monedaOrigen === "EUR" && monedaDestino === "USD") {
      tasaDeCambio = 1.08;
    } else if (monedaOrigen === "EUR" && monedaDestino === "GBP") {
      tasaDeCambio = 0.87;
    } else if (monedaOrigen === "GBP" && monedaDestino === "USD") {
      tasaDeCambio = 1.24;
    } else if (monedaOrigen === "GBP" && monedaDestino === "EUR") {
      tasaDeCambio = 1.15;
    } else {
      return 'Conversión no disponible';
    }
  
    // Convertir la cantidad
    const cantidadConvertida = cantidad * tasaDeCambio;
    return `${cantidad} ${monedaOrigen} equivalen a ${cantidadConvertida.toFixed(2)} ${monedaDestino}`;
  }
  
  // Ejemplos de uso:
  console.log(convertirMoneda(100, 'USD', 'EUR')); // 100 USD a EUR
  console.log(convertirMoneda(200, 'GBP', 'USD')); // 200 GBP a USD
  console.log(convertirMoneda(150, 'EUR', 'GBP')); // 150 EUR a GBP
  