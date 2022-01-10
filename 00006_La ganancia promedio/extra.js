function longitud(unString) /*<elipsis-for-student@*/ {
  return unString.length;
} /*@elipsis-for-student>*/
// Retorna cuan largo es un string
//
// Por ejemplo:
//
//  ム longitud("hola")
//  4

function gananciaTotal(balancesDeUnPeriodo) {
  let sumatoria = 0;
  for (let balance of balancesDeUnPeriodo) {
    sumatoria = sumatoria + balance.ganancia;
  }
  return sumatoria;
}

