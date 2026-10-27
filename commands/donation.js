const { SlashCommandBuilder, EmbedBuilder } = require ('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('donation')
        .setDescription("Affiche les liens pour faire un don"),
    async execute(interaction) {

        const donationEmbed = new EmbedBuilder()
            .setColor("#2EC6F7")
            .setTitle("Donation")
            .setDescription("Achète-moi un petit café :smile:")
            .setThumbnail(interaction.client.user.avatarURL({ dynamic: true }))
            .addFields(
                {name: "Paypal",value: "https://paypal.me/BaptisteBossuet", inline: false},
                {name: "Lydia",value: "https://lydia-app.com/collect/croxdonation/fr", inline: false}
            )
        await interaction.reply({embeds: [donationEmbed], ephemeral: true});
    },
};
