_Ahora que sabemos la función que necesitamos (`gananciaTotal`), razonemos cómo hacerla..._

Vamos de a poquito :hand:: si la lista no tuviera elementos, ¿cuánto debería ser la sumatoria? ¡0!

```javascript
function gananciaTotal0(balancesDeUnPeriodo) {
  let sumatoria = 0;
  return sumatoria;
}
```

¿Y si tuviera exactamente 1 elemento? Sería... 0.... ¿más ese elemento? ¡Exacto! :sunglasses:

```javascript
function gananciaTotal1(balancesDeUnPeriodo) {
  let sumatoria = 0;
  sumatoria = sumatoria + balancesDeUnPeriodo[0].ganancia;
  return sumatoria;
}
```

¿Y si tuviera 2 elementos? :thought_balloon:

```javascript
function gananciaTotal2(balancesDeUnPeriodo) {
  let sumatoria = 0;
  sumatoria = sumatoria + balancesDeUnPeriodo[0].ganancia;
  sumatoria = sumatoria + balancesDeUnPeriodo[1].ganancia;
  return sumatoria;
}
```

¿Y si tuviera 3 elementos? :thought_balloon:

```javascript
function gananciaTotal3(balancesDeUnPeriodo) {
  let sumatoria = 0;
  sumatoria = sumatoria + balancesDeUnPeriodo[0].ganancia;
  sumatoria = sumatoria + balancesDeUnPeriodo[1].ganancia;
  sumatoria = sumatoria + balancesDeUnPeriodo[2].ganancia;
  return sumatoria;
}
```

> ¿Empezás a ver un patrón? Tratá de escribir `gananciaTotal4` que funcione para 4 elementos.
