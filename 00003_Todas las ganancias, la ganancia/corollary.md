¡Bien hecho! :clap:

¿Y si la lista tuviera _cualquier_ cantidad de elementos? Si seguimos repitiendo este patrón, veremos que una sumatoria de una lista siempre arranca igual, con `let sumatoria = 0`, y termina igual, devolviendo la variable local sumatoria (`return sumatoria`).

```javascript
function gananciaTotalN(unPeriodo) {
  let sumatoria = 0; // esto siempre está
  //... etc
  return sumatoria; //esto siempre está
}
```

Lo que cambia son las acumulaciones (`sumatoria = sumatoria + ...`); necesitamos una por cada elemento de la lista. Dicho de otra forma, tenemos que _visitar_ cada elemento del mismo, sin importar cuántos tenga. Pero, ¿cómo hacerlo? ¿No te suena conocida esta idea de _repetir algo muchas veces_? :thought_balloon:
