module.exports.help = {
    name: "punch",
    aliases: ['punch', 'frapper'],
    description: 'Frappe la personne mentionnée',
}

const discord = require('discord.js')

module.exports.run = (client, message, args) => {
    message.delete();

    let hitted = message.mentions.users.first()
    if(!hitted) {
        message.channel.send("Merci de mentionner un utilisateur")
        setTimeout(function(){
            message.channel.bulkDelete(1);
        }, 3000);
        return
    }

    if(hitted.id === message.author.id){
        message.channel.send("Tu ne peux pas te frapper")
        setTimeout(function(){
            message.channel.bulkDelete(1);
        }, 3000);
        return
    }

    let embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username} a tapé ${hitted.username} 🤛`)
        .setColor("#9c0000")
        .setImage("https://media1.tenor.com/images/53f7a45f41b45f46c9a6c4dc154e58c5/tenor.gif?itemid=16268549")
    message.channel.send({embeds : [embed]})
}