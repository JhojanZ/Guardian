const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); 
const fs = require('fs'); 

const canalWAWA = require('./funciones/wawa/canal_wawa');
const canalCadenas = require('./funciones/cadenas/canal_cadenas')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ],
});

const TOKEN = process.env.DISCORD_BOT_TOKEN;
const CANALES_WAWA = process.env.CHANNEL_WAWA_IDS.split(',').map(id => id.trim());
const CANALES_CADENA = process.env.CHANNEL_CADENAS_IDS.split(',').map(id => id.trim());


client.once('ready', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});


client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  // Verifica y llama a la función correspondiente
  if (CANALES_WAWA.includes(message.channel.id)) {
    await canalWAWA(message);
  } else if (CANALES_CADENA.includes(message.channel.id)) {
    await canalCadenas(message);
  }
});


client.on('messageUpdate', async (oldMessage, newMessage) => {
  // Evitar errores con mensajes eliminados o embeds
  if (!newMessage.partial) {
    await canalWAWA(newMessage);
  }
}); 


client.login(TOKEN);

