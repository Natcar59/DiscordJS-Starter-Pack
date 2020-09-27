// L'évènement 'ready' est déclanché quand le Bot s'allume

module.exports = (client) => {
   // Envoi le message dans la console pour dire que le Bot est prêt
   console.log(`Connecté en tant que ${client.user.tag}`);
};