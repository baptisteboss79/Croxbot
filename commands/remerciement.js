const { SlashCommandBuilder, EmbedBuilder } = require ('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remerciement')
        .setDescription("Donne la liste de toutes les personnes ayant contribuées"),
    async execute(interaction) {

        const remerciementEmbed = new EmbedBuilder()
        .setColor("2EC6F7")
        .setTitle("Remerciements Spécial")
        .setDescription("*Merci à toutes ces personnes pour leurs contributions*")
        .setThumbnail(interaction.client.user.avatarURL({ dynamic: true }))
        .addFields(
            {name: "----------",value: "<@391163560874606592>", inline: false},
            {name: "----------",value: "<@562039871506612245>", inline: false},
            {name: "----------",value: "<@619469476873764864>", inline: false},
            {name: "----------",value: "<@265809660303507466>", inline: false},
            {name: "----------",value: "<@414583203043737601>", inline: false}
        )
        await interaction.reply({embeds: [remerciementEmbed], ephemeral: true});
    },
};