module.exports.help = {
    name: "success",
    description: 'Affiche un succès style Minecraft',
}

module.exports.run = (client, message, args) => {

    message.delete();

    const achievement = message.content.substring(10);
    const final = achievement.replace(/ /g, "+");

    var rating = Math.floor(Math.random() * 5) + 1;

    switch(rating){
        case 1 :
            message.channel.send(`https://minecraftskinstealer.com/achievement/2/Nouveau+Succès/${final}`)
            break;
        case 2 :
            message.channel.send(`https://minecraftskinstealer.com/achievement/19/Nouveau+Succès/${final}`)
            break;
        case 3 :
            message.channel.send(`https://minecraftskinstealer.com/achievement/33/Nouveau+Succès/${final}`)
            break;
        case 4 :
            message.channel.send(`https://minecraftskinstealer.com/achievement/8/Nouveau+Succès/${final}`)
            break;
        case 5 :
            message.channel.send(`https://minecraftskinstealer.com/achievement/4/Nouveau+Succès/${final}`)
            break;
    }

    
}