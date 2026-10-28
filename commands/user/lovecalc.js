module.exports.help = {
    name: "lovecalc",
    description: " Calcule l'amour entre deux personnes",
}

const discord = require('discord.js')
//const { createCanvas, loadImage} = require("canvas");

module.exports.run = (client, message, args) => {

    if(!args[0]) {
        message.channel.send("Merci de mentionner un utilisateur")
        setTimeout(function(){
            message.channel.bulkDelete(1);
        }, 3000);
        return
    }
    /* définition des variable */
    let lovecolor; // couleur de l'embed
    let loveHearthPurcent; // les coeurs qui s'affive en bas du embed
    let secondName = message.mentions.users.first(); //défini second membre en premier arg en tant que mention

    /* renvoie une erreur si la personne renvoyer n'est pas une mention */
    if(!secondName) {
        return message.channel.send("Impossible de calculer l'amours que vous éprouver envers cette personne")
    }

    /* définie les Id dans une variable*/
    let authorId = parseInt(message.author.id)
    let secondNameId = parseInt(secondName.id)

    console.log(authorId)
    console.log(secondNameId)

    

    /* échange les Ids si l'utilisateur qui l'éxécute possède un Id plus grand */
    let SwitchId;
    if(authorId > secondNameId){
        SwitchId = authorId
        authorId = secondNameId
        secondNameId = SwitchId
        console.log("if execution")
    }

    /* Canvas */

    /*const canvas = createCanvas(800,333);
    const ctx = canvas.getContext("2d")
    const background = await loadImage("./assets/")*/

   

    /* définnition de la variable resulatPercent  = au calcule de l'Id des deux utilisateur*/
    let resultPercent = authorId * 100 / secondNameId

    if (resultPercent === 1){
        lovecolor = "#000000";
    }
    else if (resultPercent >= 2 && resultPercent <= 33){
        lovecolor = "#400000";
    }
    else if (resultPercent >= 34 && resultPercent <= 66){
        lovecolor = "#800000";
    }
    else if (resultPercent >= 67 && resultPercent <= 99){
        lovecolor = "#CC0000";
    }
    else if (resultPercent === 100){
        lovecolor = "#FF0000";
    }
    else{
        lovecolor = "#000000";
        console.log("ERROR ERROR");
    }

    if (resultPercent >= 1 && resultPercent <=11){
        loveHearthPurcent = ":heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: "
    }
    else if (resultPercent >= 11 && resultPercent <=21){
        loveHearthPurcent = ":heart: :heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart:"
    }
    else if (resultPercent >= 21 && resultPercent <= 31){
        loveHearthPurcent = ":heart: :heart: :heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart:"
    }
    else if (resultPercent >= 31 && resultPercent <= 41){
        loveHearthPurcent = ":heart: :heart: :heart: :heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart:"
    }
    else if (resultPercent >= 41 && resultPercent <= 51){
        loveHearthPurcent = ":heart: :heart: :heart: :heart: :heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart:"
    }
    else if (resultPercent >= 51 && resultPercent <= 61){
        loveHearthPurcent = ":heart: :heart: :heart: :heart: :heart: :heart: :black_heart: :black_heart: :black_heart: :black_heart:"
    }
    else if (resultPercent >= 61 && resultPercent <= 71){
        loveHearthPurcent = ":heart: :heart: :heart: :heart: :heart: :heart: :heart: :black_heart: :black_heart: :black_heart:"
    }
    else if (resultPercent >= 71 && resultPercent <= 81){
        loveHearthPurcent = ":heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: :black_heart: :black_heart:"
    }
    else if (resultPercent >= 81 && resultPercent <= 91){
        loveHearthPurcent = ":heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: :black_heart:"
    }
    else if (resultPercent >= 91 && resultPercent <= 101){
        loveHearthPurcent = ":heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart:"
    }
    else{
        loveHearthPurcent = ":heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: :black_heart: "
        console.log("ERROR ERROR");
    }

    console.log("-----------")
    console.log(authorId)
    console.log(secondNameId)
    console.log(Math.round(resultPercent))
    console.log(typeof authorId)

    let embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username} et ${secondName.username}`)
        .setColor(lovecolor)
        .addField("S'aiment à", Math.round(resultPercent) + "%", true)
        .addField(":black_small_square: :black_small_square: :black_small_square: :black_small_square: :black_small_square: :black_small_square: :black_small_square: :black_small_square: :black_small_square: :black_small_square:", loveHearthPurcent)
    message.channel.send({embeds : [embed]})

}