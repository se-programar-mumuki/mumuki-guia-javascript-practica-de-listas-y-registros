/*...solution[8]...*/

/*...solution[9]...*/

/*...solution[10]...*/

function minimo(numeros) /*<elipsis-for-student@*/ {
  return Math.min.apply(null, numeros)
} /*@elipsis-for-student>*/
// Retorna el menor valor dentro de una lista de números:
//
//  ム minimo([5, 7, 8, 9, 3]) 
//  => 3

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