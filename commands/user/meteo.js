module.exports.help = {
    name: "meteo",
    description: "Donne la météo d'un endroit précis",
}

const weather = require("weather-js");
const discord = require('discord.js')

module.exports.run = (client, message, args) => {

    if(!args.length) {
        return message.channel.send("Merci de me donner une localisation.")

    }

    weather.find({search: args.join(" "), degreeType: "C"}, function(error, result){

        if(error || result[0] === undefined) {
            return message.channel.send("Impossible de trouver la météo de cet endroit.")
        }


        let embed = new discord.MessageEmbed()
        .setTitle(`Donne la météo pour ${result[0].location.name}`)
        .setColor("832EE8")
        .setDescription("Cette météo vous est présentée par CroxBot")
        .addField("Température ", `${result[0].current.temperature} Celcius`, true)
        .addField("Ciel ", result[0].current.skytext, true)
        .addField("Humidité ", result[0].current.humidity, true)
        .addField("Vitesse du vent ", result[0].current.windspeed, true)
        .addField("Temps d'observation", result[0].current.observationtime, true)
        .addField("Direction du vent ", result[0].current.winddisplay, true)
        .setThumbnail(result[0].current.imageUrl);

        message.channel.send({embeds : [embed]})
    })

}