module.exports.help = {
    name: "clear",
    aliases: ['clear', 'purge'],
    description: 'Commande pour clear les messages',
}

const discord = require('discord.js')

module.exports.run = (client, message, args) => {
    
    if (!message.member.permissions.has("MANAGE_MESSAGES")) {
        return message.reply("Permission manquante ! [MANAGE_MESSAGES]")
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0 || args[0] < 1 || args[0] > 100) {
        return message.reply('Merci de me donner un nombre entre 1 et 100 [syntax : "c!clear 5"]')
    }

    if (!message.guild.me.permissions.has("MANAGE_MESSAGES")){
        return message.reply("Permission du bot manquante ! [MANAGE_MESSAGES]")
    }

    let deleteAmount = parseInt(args[0]);

    message.channel.bulkDelete(deleteAmount + 1);
    message.channel.send(`Suppression de **${deleteAmount}** messages.`)
    setTimeout(function(){
        message.channel.bulkDelete(1);
    }, 3000);
}