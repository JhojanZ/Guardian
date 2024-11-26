// regex.js
function validarWawa(texto) {
  // emoji | inicia con [<:@#] | tiene un caracter [wa] mas simbolos | 
  const regex = /^(?:\p{Emoji}*|^[<:@#]\w+$|[wa\sáàäâãåąæā+\\\|"'.:;,\-_¡!¿?]+|\B:[^\s]+(?=\s|$))*$/iu; 
  return regex.test(texto);
}

module.exports = { validarWawa };

