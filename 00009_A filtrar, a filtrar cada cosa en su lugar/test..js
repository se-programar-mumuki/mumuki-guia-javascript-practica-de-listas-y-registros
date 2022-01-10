describe("balancesPositivos", function() {
  function safeCall(f) {
    try { 
      return f();
    } catch(e) { 
      return null;
    }
  }

  it("no debe devolver una lista de numeros", function() { let returnType = safeCall(() => 
      typeof(balancesPositivos([{ "mes": "marzo", "ganancia": 10 }])[0]))
  
    assert(returnType !== "number"); 
  })
  
	it("devuelve todos los balances si todos tienen ganancia mayor a cero", function() {
		assert.deepEqual(balancesPositivos([{ "mes": "marzo", "ganancia": 10 }, { "mes": "agosto", "ganancia": 2 }, { "mes": "septiembre", "ganancia": 8 }]), [{ "mes": "marzo", "ganancia": 10 }, { "mes": "agosto", "ganancia": 2 }, { "mes": "septiembre", "ganancia": 8 }])
	})

	it("excluye a los balances con ganancia cero", function() {
		assert.deepEqual(balancesPositivos([{ "mes": "marzo", "ganancia": 10 }, { "mes": "agosto", "ganancia": 2 }, { "mes": "septiembre", "ganancia": 0 }]), [{ "mes": "marzo", "ganancia": 10 }, { "mes": "agosto", "ganancia": 2 }])
	})

	it("excluye a los balances con ganancia negativa", function() {
		assert.deepEqual(balancesPositivos([{ "mes": "julio", "ganancia": 12 }, { "mes": "agosto", "ganancia": -2 }]), [{ "mes": "julio", "ganancia": 12 }])
	})

	it("devuelve la lista vacia si todos los balances tienen ganancia de cero o menos", function() {
		assert.deepEqual(balancesPositivos([{ "mes": "agosto", "ganancia": -12 }, { "mes": "septiembre", "ganancia": 0 }]), [])
	})
})

