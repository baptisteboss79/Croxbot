const { SlashCommandBuilder } = require ('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Fournie des informations concernant le joueur')
        .addUserOption(option =>
            option
                .setName('utilisateur')
                .setDescription("l'utilisateur dont tu veut voir les informations")
                .setRequired(true)
        ),
    async execute(interaction) {
        /*
        const serverinfoEmbed = new EmbedBuilder()
            .setTitle('Information Server')
            .setColor('#A600FF')
            .addFields(
                {name: 'Nom du Joueur' , value: `interaction.options.getUser('utilisateur')` , inline: true},
                {name: '||', value: '||', inline: true},
                {name: 'A rejoin le', value: `${interaction.guild.memberCount}`, inline: true},
                {name: 'Propriétaire du serveur', value: `<@${interaction.guild.ownerId}>`, inline: false},
            )
        await interaction.reply({embeds: [serverinfoEmbed]})
        */
        await interaction.reply(`${interaction.options.getUser('utilisateur')} as rejoint le serveur le ${interaction.member.joinedAt}.`);
        //console.log(interaction.options.getUser('utilisateur').joinedAt)
        console.log(interaction.member)
    },
};