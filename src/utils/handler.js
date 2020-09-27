const { readdirSync } = require('fs');

// Chargement des évènements du dossier 'events'
const loadEvents = (client, dir = "./src/events") => {
   readdirSync(dir).forEach((dirs) => {
      const events = readdirSync(`${dir}/${dirs}/`).filter((file) => file.endsWith('.js'));
      
      for (const event of events) {
        const eventFile = require(`../.${dir}/${dirs}/${event}`);
        const eventName = event.split(".")[0];
        client.on(eventName, eventFile.bind(null, client));
      };
   });
   console.log("Evènements chargés");
};

// Chargement des commandes du dossier 'commands'
const loadCommands = (client, dir = "./src/commands") => {
   readdirSync(dir).forEach((dirs) => {
      const commands = readdirSync(`${dir}/${dirs}/`).filter((file) => file.endsWith('.js'));
      
      for (const command of commands) {
        const commandFile = require(`../.${dir}/${dirs}/${command}`);
        client.commands.set(commandFile.help.name ,commandFile);
      };
   });
   console.log("Commandes chargés");
};

// Exportation de la fonction Handler
module.exports = function handler(client) {
   loadEvents(client);
   loadCommands(client);
};