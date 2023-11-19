const resta = require("./resta");

test("80 - 60 should be 20", () => {
  // sujeto de prueba
  const result = resta(80, 60);
  // test
  expect(result).toBe(20);
});

test("los valores deben ser menores a 100", () => {
  const err = "supera el rango";
  const result = resta(101, 200);
  expect(result).toBe(err);
});

test("Los numeros dados deben ser positivos", ()=> {
    const err = "Los numeros no son positivos";
    const result = resta(-36, -58);
    expect(result).toBe(err);
})
