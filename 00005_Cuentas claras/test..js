describe("", function() {
  it("cantidadDeBalancesPositivos([{ mes: noviembre, ganancia: 5 }]) es 1", function() {
    assert.deepEqual(cantidadDeBalancesPositivos([{ mes: "noviembre", ganancia: 5 }]), 1)
  })
  it("cantidadDeBalancesPositivos([{ mes: marzo, ganancia: 8 }, { mes: agosto, ganancia: 10 }]) es 2", function() {
    assert.deepEqual(cantidadDeBalancesPositivos([{ mes: "marzo", ganancia: 8 }, { mes: "agosto", ganancia: 10 }]), 2)
  })
  it("cantidadDeBalancesPositivos([]) es 0", function() {
    assert.deepEqual(cantidadDeBalancesPositivos([]), 0)
  })
  it("cantidadDeBalancesPositivos([[{ mes: marzo, ganancia: 0 }, { mes: agosto, ganancia: 0 }]]) es 0", function() {
    assert.deepEqual(cantidadDeBalancesPositivos([{ mes: "marzo", ganancia: 0 }, { mes: "agosto", ganancia: 0 }]), 0)
  })
  it("cantidadDeBalancesPositivos([{ mes: enero, ganancia: 10 }, { mes: febrero, ganancia: -10 }, { mes: marzo, ganancia: 2 }, { mes: abril, ganancia: 100 }]) es 3", function() {
    assert.deepEqual(cantidadDeBalancesPositivos([{ mes: "enero", ganancia: 10 }, { mes: "febrero", ganancia: -10 }, { mes: "marzo", ganancia: 2 }, { mes: "abril", ganancia: 100 }]), 3)
  })
  it("cantidadDeBalancesPositivos([{ mes: enero, ganancia: -1 }, { mes: febrero, ganancia: -2 }, { mes: marzo, ganancia: -3 }]) es 0", function() {
    assert.deepEqual(cantidadDeBalancesPositivos([{ mes: "enero", ganancia: -1 }, { mes: "febrero", ganancia: -2 }, { mes: "marzo", ganancia: -3 }]), 0)
  })
})