//Classes Discord.js necessaire
const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, Partials ,Collection, } = require("discord.js");
const { token, } = require('./config.json');

//Instance client
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ],

    partials: [
        Partials.User,
        Partials.Message,
        Partials.GuildMember,
        Partials.ThreadMember,
    ],

});

client.commands = new Collection();

const commandPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute'in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`[Attention !!] La commande situer ${filePath} est manquant il demande une "data" ou  un "execute". `);
    }
}

const eventsPath = path.join(__dirname, 'events');
const eventsFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'))

for (const file of eventsFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// ---------- Connexion du bot------------
client.login(token)