module.exports.run = (client, message, args) => {
   return message.channel.send("La commande Test fonctionne.");
};

module.exports.help = {
   name: "test",
   category: "Test",
   description: "Commande de Test"
};