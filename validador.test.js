const {validatePassword} = require("./validador");
//contraseña 
test("Validar contraseña", () => {
    expect(validatePassword("12345678")).toBe(false);
});
//no  pasa porque no llega hasta 8
test("Validar contraseña", () => {
    expect(validatePassword("1234567")).toBe(false);
});
//contraseña 2
test("Validar contraseña", () => {
    expect(validatePassword("Luis50")).toBe(false);
});
//no pasa porque no tiene una mayuscula
test("Validar contraseña", () => {
    expect(validatePassword("luis50")).toBe(false);
});
//contraseña 3
test("Validar contraseña", () => {
    expect(validatePassword("MEMAMI")).toBe(false);
});
//no pasa porque esta la ultima en minuscula
test("Validar contraseña", () => {
    expect(validatePassword("MEMAMi")).toBe(false);
});
//contraseña 4
test("Validar contraseña", () => {
    expect(validatePassword("Lopo15")).toBe(false);
})
//no tiene numeros
test("Validar contraseña", () => {    
    expect(validatePassword("Lopo")).toBe(false);
});
//contraseña 5
test("Validar contraseña", () => {
    expect(validatePassword("Luis50**")).toBe(true);
});
//no tiene numeros
test("Validar contraseña", () => {
    expect(validatePassword("Luis50")).toBe(false);
});