describe("", function(){
  it("maximaGanancia devuelve la ganancia mas alta", function() {
  	assert.equal(maximaGanancia([{ mes: "enero", ganancia: -40 }, { mes: "febrero", ganancia: 42 }, { mes: "marzo", ganancia: 19}, { mes: "abril", ganancia:  -5}]), 42)
  })

  it("maximaGanancia devuelve la ganancia mas alta aun si son todas negativas", function() {
  	assert.equal(maximaGanancia([{ mes: "enero", ganancia: -40 }, { mes: "febrero", ganancia: -13 }, { mes: "marzo", ganancia: -19}, { mes: "abril", ganancia:  -5}]), -5)
  })

  it("maximaGanancia devuelve cero si el resto de las ganancias son negativas", function() {
  	assert.equal(maximaGanancia([{ mes: "enero", ganancia: 0 }, { mes: "febrero", ganancia: -13 }, { mes: "marzo", ganancia: -19}, { mes: "abril", ganancia:  -5}]), 0)
  })
})    