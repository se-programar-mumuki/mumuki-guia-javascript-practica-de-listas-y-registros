describe("", function(){
  it("minimaGananciaPositiva devuelve la ganancia mas baja de todas las positivas si hay negativas", function() {
  	assert.equal(minimaGananciaPositiva([
      { mes: "enero", ganancia: -40 }, 
      { mes: "febrero", ganancia: 42 }, 
      { mes: "marzo", ganancia: 8}, 
      { mes: "abril", ganancia:  -5}
  ]), 8)
  })
  
  it("minimaGananciaPositiva devuelve la unica ganancia positiva en caso de que todo el resto sean negativas", function() {
  	assert.equal(minimaGananciaPositiva([
      { mes: "enero", ganancia: -40 }, 
      { mes: "febrero", ganancia: 42 }, 
      { mes: "marzo", ganancia: -8}, 
      { mes: "abril", ganancia:  -5}
  ]), 42)
  })

  it("minimaGananciaPositiva devuelve la ganancia mas baja de todas si son todas positivas", function() {
  	assert.equal(minimaGananciaPositiva([
      { mes: "enero", ganancia: 40 }, 
      { mes: "febrero", ganancia: 42 }, 
      { mes: "marzo", ganancia: 8}, 
      { mes: "abril", ganancia:  5}
  ]), 5)
  })
}) 