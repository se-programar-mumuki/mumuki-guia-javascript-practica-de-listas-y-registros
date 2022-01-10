describe("", function(){
  it("gananciaPromedio([{ mes: marzo, ganancia: 30 }, { mes: agosto, ganancia: 10 }]) es 20", function() {
    assert.equal(gananciaPromedio([{ mes: "marzo", ganancia: 30 }, { mes: "agosto", ganancia: 10 }]), 20)
  })
  it("gananciaPromedio([{ mes: marzo, ganancia: 10 }, { mes: agosto, ganancia: 2 }, { mes: septiembre, ganancia: 9 }]) es 7", function() {
    assert.equal(gananciaPromedio([{ mes: "marzo", ganancia: 10 }, { mes: "agosto", ganancia: 2 }, { mes: "septiembre", ganancia: 9 }]), 7)
  })
})
