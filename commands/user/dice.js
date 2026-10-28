module.exports.help = {
    name: "dice",
    description: 'commande pour lancer un dé',
}

const discord = require('discord.js')

module.exports.run = (client, message, args) => {

    if (isNaN(args[0]) || parseInt(args[0]) <= 0 || args[0] < 1 || args[0] > 1000) {
        return message.reply('Merci de me donner un nombre entre 1 et 1000 [syntax : "c!dice 69"]')
    }

    let maxnumber = parseInt(args[0]);

    var randomDice = Math.floor(Math.random() * maxnumber) +1
    if(randomDice === 1) {
        message.reply(`Résultat : **${randomDice}** :eyes:`)
        return
    }
        
    message.reply(`Résultat : ${randomDice}`);
}