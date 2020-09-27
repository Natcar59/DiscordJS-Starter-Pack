require('dotenv').config();
const { Client, Collection } = require('discord.js');
const client = new Client();
["commands"].forEach((x) => client[x] = new Collection());

// Lancement du Handler
const handler = require('./utils/handler');
handler(client);

//! Ne pas toucher !
client.login(process.env.BOT_TOKEN);