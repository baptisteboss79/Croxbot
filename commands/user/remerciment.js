module.exports.help = {
    name: "remerciment",
    aliases: ['remerciment', 'thanks'],
    description: 'permet de voir les commandes possible',
}

const discord = require('discord.js')

module.exports.run = (client, message, args) => {

    const embed = new discord.MessageEmbed()
    .setColor("2EC6F7")
    .setTitle("Remerciements Spécial")
    .setDescription("*Merci à toutes ces personnes pour leurs contributions*")
    .setThumbnail(client.user.displayAvatarURL())
    .addFields(
        {name: "Sayen974#3105",value: "Pour ses délicieux gifs de canards", inline: false},
        {name: "Molvak#1088",value: "Pour le logo du Bot", inline: false},
        {name: "Marjee#9594",value: "Pour avoir testé l'intégrité du bot lors de son alpha", inline: false},
        {name: "PauLeene#3686",value: "Pour avoir corrigé l'orthographe", inline: false}

    )

message.channel.send({embeds : [embed]});

}