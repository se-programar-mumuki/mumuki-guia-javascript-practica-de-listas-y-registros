describe("", function(){
  it("ganancias de los balances de un trimestre  retorna una lista con 3 ganancias", function() {
    assert.deepEqual(ganancias([{ mes: "marzo", ganancia: 10 }, { mes: "agosto", ganancia: -2 }, { mes: "septiembre", ganancia:0 }]), [10, -2, 0])
  })
  
  it("ganancias de los balances de un cuatrimestre  retorna una lista con 4 ganancias", function() {
    assert.deepEqual(ganancias([{ mes: "marzo", ganancia: 8 }, { mes: "junio", ganancia: 3 }, { mes: "agosto", ganancia: 10 }, { mes: "noviembre", ganancia:5 }]), [8, 3, 10, 5])
  })
})