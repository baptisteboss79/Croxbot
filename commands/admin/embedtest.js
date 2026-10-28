module.exports.help = {
    name: "embedtest",
    description: "commande de test pour l'embed spéciale pour Cr0XIS",
}

const discord = require('discord.js')
const config = require('../../config.json');

module.exports.run = (client, message, args) => {

    if(message.author.id === config.ownerId){
    
        const embed = new discord.MessageEmbed()
            .setColor("ED24F3")
            .setTitle("Titre")
            .setURL("https://www.google.com")
            .setDescription("Description")
            .setThumbnail(client.user.displayAvatarURL())
            .addField("Test0", "testValue0")
            .addFields(
                {name: "Test1",value: "testValue1", inline: true},
                {name: "Test2",value: "testValue2", inline: true}
            )
            .setImage()
            .setTimestamp(client.user.displayAvatarURL())

        message.channel.send({embeds : [embed]});
    }
    else{return}

}