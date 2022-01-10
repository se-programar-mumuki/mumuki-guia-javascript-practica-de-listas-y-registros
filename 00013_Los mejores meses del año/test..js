describe("", function(){
  it("meses devuelve los meses de los balances de un trimestre", function() {
    assert.deepEqual(meses([{ mes: "enero", ganancia: 10 }, { mes: "febrero", ganancia: 2 }, { mes: "marzo", ganancia: 5 }]), ["enero", "febrero", "marzo"])
  })
  it("meses devuelve los meses de los balances de un semestre", function() {
    assert.deepEqual(meses([{ mes: "enero", ganancia: 10 }, { mes: "febrero", ganancia: 2 }, { mes: "marzo", ganancia: 5 }, { mes: "abril", ganancia: 8 }, { mes: "mayo", ganancia: 12 }, { mes: "junio", ganancia: 25 }]), ["enero", "febrero", "marzo", "abril", "mayo", "junio"])
  })
  it("afortunados devuelve los balances cuya ganancia es mayor a 1000", function() {
    assert.deepEqual(afortunados([{ mes: "enero", ganancia: 1000 }, { mes: "febrero", ganancia: 2000 }, { mes: "marzo", ganancia: 2500 }, { mes: "abril", ganancia: 1001 }, { mes: "mayo", ganancia: 0 }, { mes: "junio", ganancia: -25 }]), [{ mes: "febrero", ganancia: 2000 }, { mes: "marzo", ganancia: 2500 }, { mes: "abril", ganancia: 1001 }])
  })
  it("afortunados devuelve una lista vacía si ningún balance tiene ganancia mayor a 1000", function() {
    assert.deepEqual(afortunados([{ mes: "enero", ganancia: 1000 }, { mes: "febrero", ganancia: 0 }, { mes: "marzo", ganancia: 200 }, { mes: "abril", ganancia: -30 }]), [])
  })
  it("mesesAfortunados devuelve los meses cuyos balances son mayores a 1000", function() {
    assert.deepEqual(mesesAfortunados([{ mes: "enero", ganancia: 1001 }, { mes: "febrero", ganancia: -10 }, { mes: "marzo", ganancia: 2300 }, { mes: "abril", ganancia: 800 }]), ["enero", "marzo"])
  })
})