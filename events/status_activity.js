const { Events, ActivityType } = require('discord.js');

module.exports = {
    name : Events.ClientReady,
    execute(client) {
        function randomStatus(){
            let statusBot = ["Regarder les canards","Observer le ciel","Parler avec son créateur","/help","Lire des sondages"];
            let random = Math.floor(Math.random() * statusBot.length); 
    
            client.user.setPresence({
                activities: [{
                    name: statusBot[random],
                    type: ActivityType.Playing,
                }],
                status: "online"
    
            });
        }; setInterval(randomStatus, 10000)
    }
}