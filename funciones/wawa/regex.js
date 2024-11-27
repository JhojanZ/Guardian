/*
Debe Aceptar:

- wa
- emojis
- emoji discord
- menciones, canales MIT

- rechazar todo lo demas
*/

const REGEX_WAWA = /^(?:([\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}]|<(a)?:\w+:\d+>)*|^[<:@#]\w+$|[WAÀÄÂÃÅĄĀªAÁÀÄÂÃÅĄĀª\s*+\\\|"'.:;,\-~^{}()°/_¡!¿?]+|\B:[^\s]+(?=\s|$))*$/iu;


function validarWawa(texto) {
  return REGEX_WAWA.test(texto);
}

module.exports = { validarWawa };

