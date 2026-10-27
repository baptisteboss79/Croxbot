
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Retourne le temps de latence du bot! '),
    async execute(interaction) {
        const sent = await interaction.deferReply({content: 'Pong ! Calcule en cours...', fetchReply: true, ephemeral: true});
        interaction.editReply(`Latence : ${sent.createdTimestamp - parseInt(interaction.createdTimestamp)}ms`)
    },
};