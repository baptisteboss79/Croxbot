const { SlashCommandBuilder} = require ('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dice')
        .setDescription("Lance un dés entre 1 et le nombre choisie")
        .addIntegerOption(option =>
            option
                .setName('nombre')
                .setDescription("Un nombre entre 2 et 10000")
                .setMinValue(2)
                .setMaxValue(10000)
                .setRequired(true)
        ),
    async execute(interaction) {

        const randomDice = Math.floor(Math.random() * interaction.options.getInteger('nombre')) + 1

        interaction.reply(`Résultat : ${randomDice}`)
    },
};