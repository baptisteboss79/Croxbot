const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});
const config = require('./config.json');
client.commands = new Discord.Collection();

const loadCommands = (dir = "./commands/") => {
    fs.readdirSync(dir).forEach(dirs => {
        const commands = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith('.js'));

        for (const file of commands) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            console.log(` Commande chargée : ${getFileName.help.name}`);
        };
    });
};

loadCommands();
/*--------------------message crée (commande interaction)-------------------*/
client.on("messageCreate", message =>{
    if (!message.content.startsWith(config.prefix1) && !message.content.startsWith(config.prefix2) || message.author.bot) {return}

    const args = message.content.slice(config.prefix2.length).split(" ")
    const commandName = args.shift().toLowerCase();

    console.log("<@" + message.author.id + "> à exécuté la commande : " + commandName)
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    if(!command){
        console.log("-- commande exécuté échoue (introuvable) --")
        return
    } 

    console.log("-- commande exécuté avec succès --")
    command.run(client, message, args)
});
/*--------------------message crée (parler avec le bot)-----------------------------------------------------*/
client.on("messageCreate", message => {
    if (message.content === "Coin" || message.content === "coin" || message.content === "Coin !" || message.content === "coin !"){ //Coin 
        if(message.author.id === config.ownerId || message.author.id === "391163560874606592"){ // Cr0XiS || Sayen
            message.reply("Coin Coin !! :crown:")
        }
        else if(message.author.id === "516028763855650829" || message.author.id === "308951971317153792" || message.author.id === "340468529746673664" || message.author.id === "483677914001309696" || message.author.id === "381139930468057089" || message.author.id === "456457994692067338"){
            message.reply("Coin Coin !! :duck:")
        }
        else{
            message.reply("Coin Coin !!")
        }
    }

    if (message.content === "Bonjour" || message.content === "bonjour"){
        if(message.author.id === config.ownerId){
            message.reply("Bonjour ! :crown:")
        }
        else{
            message.reply("Salut !! :wave: ")
        }
    }
})
/*--------------------Bot activiter dynamique------------------------------*/
client.on('ready', () => {
    function randomStatus(){
        let status = ["Regarde les canards","Observe le ciel","Parle à celui qui l'a crée","c!help","Lis les sondages"]
        let randStatus = Math.floor(Math.random() * status.length);

        client.user.setActivity(status[randStatus], {type: "PLAYING"});
    }; setInterval(randomStatus, 10000)
});
/*------------------Bot entièrement charger------------------------------------------*/
client.on('ready', () => {
    console.log(`Connecter en tant que ${client.user.tag} !`)
});


client.login(config.token) // Token de connexion du Bot