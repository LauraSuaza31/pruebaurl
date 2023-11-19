const division = require("./division");

test("No puede divir 0", () => {
    const err = "El divisor debe de ser mayor a 0";
    const result = division(5, 0);
    expect(result).toBe(err);
  });

test("El cociente debe ser entero", () => {
    const err = "El cociente es decimal";
    const result = division(5, 2);
    expect(result).toBe(err);
  });

  test("El resultado debe ser par", () => {
    const result = division(6, 3);
    expect(result).toBe(true);
  });





