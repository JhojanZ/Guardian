// regex.test.js
const { validarWawa } = require('./regex');

// Pruebas de formato básico "wawa"
test('Detecta la palabra "wawa"', () => {
  expect(validarWawa("wawa")).toBe(true);
});

test('Detecta la palabra con espacios "wa wa"', () => {
  expect(validarWawa("wa wa")).toBe(true);
});

test('Detecta la palabra con múltiples espacios "wa   wa"', () => {
  expect(validarWawa("wa   wa")).toBe(true);
});

// Pruebas de formato "WAA" o combinaciones
test('Detecta mayúsculas repetidas "WAAAA"', () => {
  expect(validarWawa("WAAAA")).toBe(true);
});

test('Detecta combinación de mayúsculas y minúsculas "WAAaaaW WAWA"', () => {
  expect(validarWawa("WAAaaaW WAWA")).toBe(true);
});

test('Detecta combinación variada "Wa  AWA awwww wa"', () => {
  expect(validarWawa("Wa  AWA awwww wa")).toBe(true);
});

test('Detecta caracteres especiales con "waáàäâã"', () => {
  expect(validarWawa("waáàäâã")).toBe(true);
});

// Pruebas con puntuación
test('Detecta "wawa!!!!!"', () => {
  expect(validarWawa("wawa!!!!!")).toBe(true);
});

test('Detecta "wawa?!?!', () => {
  expect(validarWawa("wawa?!?!")).toBe(true);
});

test('Detecta "¿Wa?" con signos de interrogación', () => {
  expect(validarWawa("¿Wa?")).toBe(true);
});

test('Detecta "wawa:wawa" : correcto', () => {
  expect(validarWawa("wa:waw")).toBe(true);
});

test('Detecta "wawa..." con puntos suspensivos', () => {
  expect(validarWawa("wawa...")).toBe(true);
});

test('Detecta comillas con "wawa"', () => {
  expect(validarWawa("\"wawa\"...")).toBe(true);
});

// Pruebas de formato ":texto:"
test('Detecta emoji ":Guardian_infobox_image:"', () => {
  expect(validarWawa(":Guardian_infobox_image:")).toBe(true);
});

test('Detecta mezcla de texto y emoji ":cienpies:"', () => {
  expect(validarWawa("waaaaaaaawa :cienpies:")).toBe(true);
});

test('Detecta formato corecta de TAG', () => {
  expect(validarWawa("@FELIPE")).toBe(true);
});

test('Detecta formato corecta de TAG numerico', () => {
  expect(validarWawa("@FELIPE123")).toBe(true);
});

test('Detecta formato corecta de TAG espaciado', () => {
  expect(validarWawa("@__hola__")).toBe(true);
});

test('Detecta formato corecta de canal', () => {
  expect(validarWawa("#FELIPE")).toBe(true);
});

test('Detecta formato corecta de canal numerico', () => {
  expect(validarWawa("#FELIPE123")).toBe(true);
});

test('Detecta formato corecta de canal espaciado', () => {
  expect(validarWawa("#__hola__")).toBe(true);
});


test('Detecta formato incompleto ":test"', () => {
  expect(validarWawa(":test")).toBe(true);
});

test('Detecta nombre de emoji ":emoji_3:"', () => {
  expect(validarWawa(":emoji_3:")).toBe(true);
});

test('Detecta nombre largo ":saint_cricko:"', () => {
  expect(validarWawa(":saint_cricko:")).toBe(true);
});

test('Detecta nombre corto ":speardance:"', () => {
  expect(validarWawa(":speardance:")).toBe(true);
});

test('Detecta mezcla de letras y emoji ":monkeyes:"', () => {
  expect(validarWawa("WAAAAAAA :monkeyes:")).toBe(true);
});

test('Detecta "wawa :monkbigeyes:"', () => {
  expect(validarWawa("wawa :monkbigeyes:")).toBe(true);
});

test('Detecta "wawawa :hunterdudoso:"', () => {
  expect(validarWawa("wawawa :hunterdudoso:")).toBe(true);
});

// Pruebas con emojis
test('Detecta emoji "🌋"', () => {
  expect(validarWawa("🌋")).toBe(true);
});

test('Detecta emoji "🧪"', () => {
  expect(validarWawa("🧪")).toBe(true);
});

test('Detecta combinación "wa wa 🧪"', () => {
  expect(validarWawa("wa wa 🧪")).toBe(true);
});

test('Detecta oracion con emoji "wa wa 🌋 waaaa"', () => {
  expect(validarWawa("wa wa 🌋 waaaa")).toBe(true);
});

// Pruebas que deben ser falsas
test('Rechaza números "123"', () => { //kill me
  expect(validarWawa("123")).toBe(true);
});

test('Rechaza palabra incorrecta "WAI"', () => {
  expect(validarWawa("WAI")).toBe(false);
});

test('Rechaza texto inválido "TONOTO"', () => {
  expect(validarWawa("TONOTO")).toBe(false);
});

test('Rechaza mezcla incorrecta "WAwa waaw colombia wa"', () => {
  expect(validarWawa("WAwa waaw colombia wa")).toBe(false);
});

test('Rechaza palabra no válida "wtfa"', () => {
  expect(validarWawa("wtfa")).toBe(false);
});

test('Rechaza mezcla inválida con emoji "waaaa :waaw i"', () => {
  expect(validarWawa("waaaa :waaw i")).toBe(false);
});

test('Rechaza mezcla con números "waa123aa :waaw "', () => { //kill me
  expect(validarWawa("waa123aa :waaw ")).toBe(true  );
});

test('Rechaza formato incorrecto "hola:mundo"', () => {
  expect(validarWawa("hola:mundo")).toBe(false);
});

test('Rechaza formato te TAG', () => {
  expect(validarWawa("hola@mundo")).toBe(false);
});

test('Detecta oracion invalida con emoji', () => {
  expect(validarWawa("wa wa 🌋 hola")).toBe(false);
});

test('Detecta oracion invalida con emoji', () => {
  expect(validarWawa("casa 🌋 waaw")).toBe(false);
});

test('Detecta oracion invalida con emoji', () => {
  expect(validarWawa("casa 🌋 hola")).toBe(false);
});

test('Detecta oracion invalida con emoji', () => {
  expect(validarWawa("waaw🌋 hola")).toBe(false);
});

test('Detecta oracion invalida con emoji', () => {
  expect(validarWawa("wawa 🌋hola")).toBe(false);
});