const { default: test } = require("node:test");
const validatePassword = require("./validador");

test("Validar contraseña", () => {
    expect(validatePassword("12345678")).toBe(true);
});