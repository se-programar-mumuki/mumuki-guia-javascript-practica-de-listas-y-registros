describe("", function(){
  it("gananciaTotal4 debe sumar las ganancias de 4 balances", function() {
    assert.equal(gananciaTotal4([{ mes: "enero", ganancia: 2 }, { mes: "febrero", ganancia: 10 }, { mes: "marzo", ganancia: 20 }, { mes: "abril", ganancia: 2 }]), 34)
  })
  
  it("gananciaTotal4 debe funcionar con numeros negativos", function() {
    assert.equal(gananciaTotal4([{ mes: "enero", ganancia: 2 }, { mes: "febrero", ganancia: 10 }, { mes: "marzo", ganancia: -20 }, { mes: "abril", ganancia: 1 }]), -7)
  })
})
