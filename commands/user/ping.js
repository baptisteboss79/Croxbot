module.exports.help = {
    name: "ping",
    description: 'commande de test',
}

module.exports.run = (client, message, args) => {
        
    message.channel.send("pong ! Calcule en cours...").then(msg => {
        msg.edit(`Pong ! Latence : ${msg.createdTimestamp - message.createdTimestamp}`)
    })

}


