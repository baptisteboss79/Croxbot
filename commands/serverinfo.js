const { SlashCommandBuilder, EmbedBuilder } = require ('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Fournie des information concernant le serveur "Crox Serveur"'),
    async execute(interaction) {

        const serverinfoEmbed = new EmbedBuilder()
            .setTitle('Information Server')
            .setColor('#A600FF')
            .addFields(
                {name: 'Nom du serveur' , value: `${interaction.guild.name}` , inline: true},
                {name: '||', value: '||', inline: true},
                {name: 'Nombres de joueurs', value: `${interaction.guild.memberCount}`, inline: true},
                {name: 'Propriétaire du serveur', value: `<@${interaction.guild.ownerId}>`, inline: false},
            )
        await interaction.reply({embeds: [serverinfoEmbed]})
    },
};