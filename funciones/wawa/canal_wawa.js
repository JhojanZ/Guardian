const fs = require('fs');

const REGEX_WAWA = /^(?:([\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}]|<(a)?:\w+:\d+>)*|^[<:@#]\w+$|[wa\sáàäâãåąæā+\\\|"'.:;,\-_¡!¿?]+|\B:[^\s]+(?=\s|$))*$/iu;

const MENSAJE_WAWA = 
`---------------------------------------------------------------------------
**¡Atención! El Guardián ha observado tus actos y decreta lo siguiente:** 

En este espacio sagrado, solo son permitidos los Gato-Babosas, y la única palabra autorizada es "Wa". Cualquier incumplimiento de esta única regla resultará en un Aislamiento de 1 minuto. Respeta el orden establecido.

- **El Guardián**`;

module.exports = async function canalWawa(message){
    if (!REGEX_WAWA.test(message.content)) {
      try {
        // 1000ms = 1s
        await message.member.timeout(1 * 1000, 'No hablo wawalang en wawa general');
        //await message.reply(`¡Querido ser, el guardian ha visto tus actos, y solo son permitidos SLUGCATS.\n Y solo es permitido la palabra wa en este reino del chat!`);
  
        // Envíar el mensaje al md
        await message.author.send(MENSAJE_WAWA);
        
        await message.delete();
        console.log('Mensaje eliminado por usar letra prohibida');
        
        
        const logMessage = `[${new Date().toLocaleString()}] - [CANAL WAWA]: ${message.id}\n Mensaje: ${message.content} \n Usuario silenciado: ${message.author.tag} (ID: ${message.author.id})\n\n`;
        console.log(logMessage);
  
        
        fs.appendFile('registro_silencios.log', logMessage, (err) => {
          if (err) {
            console.error('Error al escribir en el archivo de registro:', err);
          }
        });
        
      } catch (error) {
        console.error('Error al aplicar timeout:', error);
        await message.reply(`No pude silenciarte debido a un error.\n Mensaje: ${message.content}`);
      }
    }
  };