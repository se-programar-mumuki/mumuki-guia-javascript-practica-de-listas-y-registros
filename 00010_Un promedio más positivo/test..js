describe("", function(){
  it("gananciasDeBalancesPositivos devuelve todas las ganancias si todas son mayores a cero", function() {
    assert.deepEqual(gananciasDeBalancesPositivos([{ mes: "enero", ganancia: 10 }, { mes: "febrero", ganancia: 2 }, { mes: "marzo", ganancia: 5 }]), [10, 2, 5])
  })
  it("gananciasDeBalancesPositivos devuelve solo las ganancias que son mayores a cero", function() {
    assert.deepEqual(gananciasDeBalancesPositivos([{ mes: "enero", ganancia: 10 }, { mes: "febrero", ganancia: -2 }, { mes: "marzo", ganancia: 0 }]), [10])
  })
  it("gananciasDeBalancesPositivos devuelve una lista vacía si ninguna ganancia es mayor a 0", function() {
    assert.deepEqual(gananciasDeBalancesPositivos([{ mes: "enero", ganancia: -10 }, { mes: "febrero", ganancia: -2 }, { mes: "marzo", ganancia: 0 }]), [])
  })
  it("promedioDeBalancesPositivos devuelve el promedio de todas las ganancias que son mayores a cero", function() {
    assert.equal(promedioDeBalancesPositivos([{ mes: "enero", ganancia: 10 }, { mes: "febrero", ganancia: -10 }, { mes: "marzo", ganancia: 2 }, { mes: "abril", ganancia: 0 }]), 6)
  })
})