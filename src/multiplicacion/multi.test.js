const multi = require("./multi");

test("50 * 25 should be 1250", () => {

    const result = multi(50, 25);

    expect(result).toBe(1250);
  });

test("El resultado no puede ser igual a 0", () => {
    const err = "datos invalidos";
    const result = multi(0, 10);
    expect(result).toBe(err);
  });

test("El resultado debe ser impar", () => {
    const err = "datos incorrectos";
    const result = multi(3, 5);
    expect(result).toBe(err);
  });
