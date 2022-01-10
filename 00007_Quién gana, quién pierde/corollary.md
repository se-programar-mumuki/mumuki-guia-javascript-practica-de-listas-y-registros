Como podés ver todos los promedios se basan en el mismo principio :eyes:. Sumar una cantidad determinada elementos y dividir el resultado por esa cantidad. Si quisiéramos realizar una función `promedio` genérica sería algo así:

```javascript
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
```
¡Pero nosotros no tenemos una lista de números sino de registros! :fearful: ¿Y entonces? :thought_balloon:
