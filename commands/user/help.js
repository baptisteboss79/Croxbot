module.exports.help = {
    name: "help",
    aliases: ['help', 'h'],
    description: 'Permets de voir les commandes possibles',
}

const discord = require('discord.js')

module.exports.run = (client, message, args) => {

    const embed = new discord.MessageEmbed()
    .setColor("41E79E")
    .setTitle("Commande d'aide")
    .setDescription("Voici la liste des commandes possibles (amuse-toi 😉)")
    .setThumbnail(client.user.displayAvatarURL())
    .addFields(
        {name: "c!clear | c!purge",value: "Permet de supprimer un certain nombre de messages [exemple: '**c!clear 5**'] (Permission requise: 'MANAGE_MESSAGES')", inline: false},
        {name: "c!sondage | c!poll",value: "Permet de créer un sondage [exemple: '**c!poll Voici mon sondage**'] (Permission requise: 'VIEW_AUDIT_LOG')", inline: false},
        {name: "c!dice",value: "Lance un dé d'une valeur aléatoire entre 1 et 6 [exemple: '**c!dice**']", inline: false},
        {name: "c!meteo",value: "Affiche la météo pour la localisation donnée [exemple: '**c!meteo Paris**']", inline: false},
        {name: "c!coingif | c!cg",value: "Envoie un gif de canard aléatoire (65 gifs au total) [exemple: '**c!coingif**']", inline: false},
        {name: "c!ping",value: "Commande de test pour connaitre la latence du bot [exemple: '**c!ping**']", inline: false},
        {name: "c!success",value: "Crée un succès personnalisé[exemple: '**c!success yop accomplie**']", inline: false},
        {name: "c!punch | c!frapper",value: "Frappe l'utilisateur mentionné [exemple: '**c!punch @Croxis**']", inline: false},
        {name: "c!remerciment | c!thanks",value: "Donne la liste de toutes les personnes ayant contribuées [exemple: '**c!thanks**']", inline: false},
        {name: "c!donation | c!don",value: "Affiche les liens pour faire un don (Achète-moi un café 😄 ) [exemple: '**c!don**']", inline: false},
        {name: "c!help | c!h",value: "Affiche la liste des commandes possibles [exemple: '**c!help**']", inline: false}
    )

    message.channel.send({embeds : [embed]})

}