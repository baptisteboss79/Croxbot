const { SlashCommandBuilder, EmbedBuilder,} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('helpadmin')
        .setDescription('Affiche la liste de toutes les commandes administrative'),
    async execute(interaction) {

        const helpadminEmbed = new EmbedBuilder()
            .setColor('FF0000')
            .setTitle("commande d'aide Administrative")
            .setDescription("voici la liste des commandes administraive possibles")
            .setThumbnail(interaction.client.user.avatarURL({ dynamic: true }))
            .addFields(
                {name: "/sondage",value: "*---------- [exemple: '****/sondage comment ça va ?****']*", inline: false},
            
            )

        await interaction.reply({embeds: [helpadminEmbed]});
    },
};