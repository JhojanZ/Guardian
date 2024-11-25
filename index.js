const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); 
const fs = require('fs'); 

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ],
});

const TOKEN = process.env.DISCORD_BOT_TOKEN;
const canalesPermitidos = process.env.CHANNEL_IDS.split(',').map(id => id.trim());
const letrasProhibidas = /^[<:@]|^[wa\s]+$/i; // wawa

const mensajeGuardian = `**¡Atención! El Guardián ha observado tus actos y decreta lo siguiente:** 

En este espacio sagrado, solo son permitidos los Gato-Babosas, y la única palabra autorizada es "Wa". Cualquier incumplimiento de esta única regla resultará en un Aislamiento de 1 minuto. Respeta el orden establecido.

- **El Guardián**`;


client.once('ready', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  
   
  if (!canalesPermitidos.includes(message.channel.id)) return;


const palabras = message.content.split();
const palabraProhibida = palabras.find(palabra => letrasProhibidas.test(palabra));

  if (!letrasProhibidas.test(message.content)) {
    try {
      // 1000ms = 1s
      await message.member.timeout(1 * 1000, 'No hablo wawalang en wawa general');
      //await message.reply(`¡Querido ser, el guardian ha visto tus actos, y solo son permitidos SLUGCATS.\n Y solo es permitido la palabra wa en este reino del chat!`);

      // Envíar el mensaje al md
      await message.author.send(mensajeGuardian);
      
      await message.delete();
      console.log('Mensaje eliminado por usar letra prohibida');
      
      
      const logMessage = `[${new Date().toLocaleString()}]\n Mensaje: ${message.content} \n Usuario silenciado: ${message.author.tag} (ID: ${message.author.id})\n\n`;
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
});


client.login(TOKEN);

