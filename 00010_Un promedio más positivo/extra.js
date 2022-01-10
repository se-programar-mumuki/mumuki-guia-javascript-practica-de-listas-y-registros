/*...solution[8]...*/

/*...solution[9]...*/

function promedio(listaDeNumeros) {
	return sumatoria(listaDeNumeros) / longitud(listaDeNumeros);
}

function sumatoria(listaDeNumeros) {
  let sumatoria = 0;
  for (let numero of listaDeNumeros) {
    sumatoria = sumatoria + numero;
  }
  return sumatoria;
}

function agregar(unaLista, unElemento) /*<elipsis-for-student@*/ {
  unaLista.push(unElemento);
} /*@elipsis-for-student>*/
// Inserta unElemento al final de unaLista.
// Este es un procedimiento que no retorna nada pero modifica a unaLista:
//
//  ム let cancionesFavoritas = ["La colina de la vida", "Zamba por vos"]
//  ム agregar(cancionesFavoritas, "Seminare")
//  ム cancionesFavoritas
//  ["La colina de la vida", "Zamba por vos", "Seminare"]

function longitud(unStringOLista) /*<elipsis-for-student@*/ {
  return unStringOLista.length;
} /*@elipsis-for-student>*/
// Retorna el largo de un string o una lista
//
// Por ejemplo:
//
//  ム longitud("hola")
//  4
//  ム longitud([5, 6, 3])
//  3