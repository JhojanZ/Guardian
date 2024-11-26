// regex.js
function validarWawa(texto) {

  //const regex = /^(?:<(?:.*?)>|::(?:.*?)::|[wa\sáàäâãåąæā+\\\|"'.:;,\-_¡!¿?]+)*$/;
  const REGEX_WAWA = /^(?:([\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}]|<(a)?:\w+:\d+>)*|^[<:@#]\w+$|[wa\sáàäâãåąæā+\\\|"'.:;,\-_¡!¿?]+|\B:[^\s]+(?=\s|$))*$/iu;


  return REGEX_WAWA.test(texto);
  








  // Dividir la oración en palabras, eliminando espacios y puntuación
//const palabras = texto.match(/\b\w+\b/g);  // \b: límites de palabra, \w+: caracteres alfanuméricos

// Expresión regular: solo letras (sin números ni símbolos)
//const regex = /^[<a:@#{Emoji}*]\w*|[wa\sáàäâãåąæā+\\\|"'.:;,\-_¡!¿?{Emoji}*]+/iu;
//const regex = /^(?![@:#<])[\w*a\sáàäâãåąæā+\\\|"'.:;,\-_¡!¿?]*$/iu;



//palabras.forEach((palabra) => {
  //  if (!regex.test(palabra)) {
    //  return false;
    //}
//});



  // emoji | inicia con [<:@#] | tiene un caracter [wa] mas simbolos | 
  //const regex = /^(?:\p{Emoji}*|^[<a:@#]\w*|[wa\sáàäâãåąæā+\\\|"'.:;,\-_¡!¿?]+|\B:[^\s]+(?=\s|$))*$|^[<a:@#]\w*/iu; 
  //return regex.test(texto);
}

module.exports = { validarWawa };

