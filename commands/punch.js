const { SlashCommandBuilder, EmbedBuilder } = require ('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('punch')
        .setDescription("Frappe virtuellement l'utilisateur mentionner")
        .addUserOption(option =>
            option
                .setName('utilisateur')
                .setDescription("l'utilisateur que tu veut mentionner")
                .setRequired(true)
        ),
    async execute(interaction) {

        if(interaction.user === interaction.options.getUser('utilisateur')){
            interaction.reply({content: "Tu ne peut pas te frapper", ephemeral: true})
            return
        }
        
        const punchEmbed = new EmbedBuilder()
            .setColor("#9c0000")
            .setDescription(` **${interaction.user} a tapé ${interaction.options.getUser('utilisateur')} 🤛**`)
            .setImage("https://media1.tenor.com/images/53f7a45f41b45f46c9a6c4dc154e58c5/tenor.gif?itemid=16268549")
        await interaction.reply({embeds: [punchEmbed]});
    },
};