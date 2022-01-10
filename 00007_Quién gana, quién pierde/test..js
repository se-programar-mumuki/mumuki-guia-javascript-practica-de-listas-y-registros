describe("", function(){
  it("promedioGananciasPositivas([{ mes: marzo, ganancia: 10 }, { mes: agosto, ganancia: 2 }, { mes: septiembre, ganancia: -9 }]) es 6", function() {
    assert.equal(promedioGananciasPositivas([{ mes: "marzo", ganancia: 10 }, { mes: "agosto", ganancia: 2 }, { mes: "septiembre", ganancia: -9 }]), 6)
  })
  it("gananciaPositiva([{ mes: marzo, ganancia: 10 }, { mes: agosto, ganancia: 1 }, { mes: septiembre, ganancia: -9 }]) es 11", function() {
    assert.equal(gananciaPositiva([{ mes: "marzo", ganancia: 10 }, { mes: "agosto", ganancia: 1 }, { mes: "septiembre", ganancia: -9 }]), 11)
  })
  it("gananciaPositiva([{ mes: marzo, ganancia: 0 }, { mes: agosto, ganancia: 2 }, { mes: septiembre, ganancia: -9 }]) es 2", function() {
    assert.equal(gananciaPositiva([{ "mes": "marzo", "ganancia": 0 }, { "mes": "agosto", "ganancia": 2 }, { "mes": "septiembre", "ganancia": -9 }]), 2)
  })
})
