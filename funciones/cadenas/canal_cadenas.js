const fs = require('fs');
let ultimoMensaje = ''; 

module.exports = async function canalCadenas(message) {
  if (message.content !== ultimoMensaje) {
    try {
      // minutos * segundos * ms
      await message.member.timeout(1 * 5 * 1000, 'El mensaje no coincide con el anterior');
      await message.author.send('rompiste la cadena, ahora afrontad las consecuencias');

      const logMessage = `[${new Date().toLocaleString()}] - [CANAL CADENAS]: ${message.id}\nUsuario silenciado: ${message.author.tag} (ID: ${message.author.id})\nMensaje: ${message.content}\n`;
      console.log(logMessage)

      fs.appendFile('registro_silencios.log', logMessage, (err) => {
        if (err) console.error('Error al escribir en el archivo de registro:', err);
      });
    } catch (error) {
      console.error('Error al aplicar timeout:', error);
      await message.reply('No pude silenciarte debido a un error.');
    }
  }
  ultimoMensaje = message.content; 
};
