/*...solution[8]...*/

function maximo(numeros) /*<elipsis-for-student@*/ {
  return Math.max.apply(null, numeros)
} /*@elipsis-for-student>*/
// Retorná el número más grande de una lista de números:
//
//  ム maximo([4, 8, 87, 3])
//  87

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
