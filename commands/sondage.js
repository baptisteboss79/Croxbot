const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sondage')
        .setDescription('Crée un sondage')
        .setDefaultMemberPermissions(PermissionFlagsBits.ViewAuditLog)
        .addStringOption(option =>
            option
                .setName('message')
                .setDescription('Le message qui sera envoyer sous forme de sondage')
                .setRequired(true)
        )
        .addChannelOption(option =>
            option
                .setName('channel')
                .setDescription('Channel dans lequel le sondage sera crée')
                .setRequired(true)
        ),
    async execute(interaction) {

        const sondageEmbed = new EmbedBuilder()
            .setColor('41E79E')
            .setTitle("sondage test")
            .setDescription("sondage test 2")
            .setThumbnail(interaction.user.avatarURL({ dynamic: true }))

        interaction.deferReply({content: "Création du sondage...", ephemeral: true})
        //interaction.channel.send('@everyone')
        //interaction.channel.send({embeds: [sondageEmbed]});
    },
}; 