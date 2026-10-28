const { DiscordAPIError } = require("discord.js");

module.exports.help = {
    name: "sondage",
    aliases: ['sondage', 'poll'],
    description: 'Crée un sondage',
}

const discord = require('discord.js')

module.exports.run = (client, message, args) => {

    if (!message.member.permissions.has("VIEW_AUDIT_LOG")){
        message.reply("Permission manquante ! [VIEW_AUDIT_LOG]");
        return;
    }
    setTimeout(function(){
        message.delete();
    }, 1000);

    let msg = message.content.split(" ").slice(1);

    let argus = msg.join(" ");

    const embed = new discord.MessageEmbed()
        .setTitle(`:pencil: | Sondage            Crée par : ${message.author.username}`)
        .setColor("FF0F00")
        .setDescription(`${argus}\n\n Veuillez répondre à ce sondage par :white_check_mark: ou :x:`)


    message.channel.send({embeds : [embed]}).then(message => {

        message.react('✅')
        message.react('❌')
    });


}