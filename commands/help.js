const { SlashCommandBuilder, EmbedBuilder,} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Affiche la liste de toutes les commandes ne néssecitant aucune permission'),
    async execute(interaction) {

        const helpEmbed = new EmbedBuilder()
            .setColor('41E79E')
            .setTitle("commande d'aide")
            .setDescription("voici la liste des commandes possibles (amuse-toi 😉)")
            .setThumbnail(interaction.client.user.avatarURL({ dynamic: true }))
            .addFields(
                {name: "/dice",value: "*Lance un dé d'une valeur aléatoire entre 1 et le nombre mentionner (min : 2 / max 10000) [exemple: '****/dice 69****']*", inline: false},
                {name: "/coingif",value: "*Envoie un gif de canard aléatoire (64 gifs au total) [exemple: '****/coingif****']*", inline: false},
                {name: "/ping",value: "*Commande de test pour connaitre la latence du bot [exemple: '****/ping****']*", inline: false},
                {name: "/punch",value: "*Frappe l'utilisateur mentionné [exemple: '****/punch @Croxis****']*", inline: false},
                {name: "/remerciement",value: "*Donne la liste de toutes les personnes ayant contribuées [exemple: '****/remerciement****']*", inline: false},
                {name: "/donation",value: "*Affiche les liens pour faire un don (Achète-moi un café 😄 ) [exemple: '****/donation****']*", inline: false},
                {name: "/help",value: "*Affiche la liste des commandes  ne néssecitant aucune permission [exemple: '****/help****']*", inline: false}
            )

        await interaction.reply({embeds: [helpEmbed]});
    },
}; 