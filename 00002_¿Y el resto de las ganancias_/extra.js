function gananciaTotal(balancesDePeriodo) {
  let sumatoria = 0;
  for (let balance of balancesDePeriodo) {
    sumatoria = sumatoria + balance.ganancia;
  }
  return sumatoria;
}
