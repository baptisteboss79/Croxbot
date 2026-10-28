module.exports.help = {
    name: "donation",
    aliases: ['donation', 'don'],
    description: 'permet de voir les commandes possible',
}

const discord = require('discord.js')

module.exports.run = (client, message, args) => {

    const embed = new discord.MessageEmbed()
    .setColor("2EC6F7")
    .setTitle("Donation")
    .setDescription("Achète-moi un petit café :smile:")
    .setThumbnail(client.user.displayAvatarURL())
    .addFields(
        {name: "Paypal",value: "https://paypal.me/BaptisteBossuet", inline: false},
        {name: "Lydia",value: "https://lydia-app.com/collect/croxdonation/fr", inline: false}
    )

message.channel.send({embeds : [embed]});
message.channel.send("https://tenor.com/view/ok-money-rain-making-it-poor-help-me-gif-13929353")


}