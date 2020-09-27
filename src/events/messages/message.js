// L'évènement 'message' s'enclanche quand un message est envoyé

module.exports = (client, message) => {

   // Vérifie si l'auteur du message est un Bot, et si le salon est un DM (message privé)
   if (message.author.bot || message.channel.type === "dm") return;

   const PREFIX = process.env.BOT_PREFIX;

   // Vérifie si le message commence par le prefix
   if (message.content.startsWith(PREFIX)) {
      const [commandName, ...commandArgs] = message.content.slice(PREFIX.length).trim().split(/\s+/);
      const command = client.commands.get(commandName);
      if (command) {
         // Lancement de la commande
         command.run(client, message, commandArgs);
      };
   };
};