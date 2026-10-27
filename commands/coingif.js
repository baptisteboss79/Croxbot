const { SlashCommandBuilder} = require ('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coingif')
        .setDescription("Envoie un gif de canard aux hasard !"),
    async execute(interaction) {

        var rating = Math.floor(Math.random() * 65) + 1;

        switch(rating){
            case 1 :
                interaction.reply("https://tenor.com/view/duck-sleep-gif-21154919")
                break;
            case 2 :
                interaction.reply("https://tenor.com/view/duck-quack-squawk-squawking-honk-gif-19638612")
                break;
            case 3 :
                interaction.reply("https://tenor.com/view/cute-duck-funny-animals-taking-my-duck-for-a-walk-pets-birds-gif-10491169")
                break;
            case 4 :
                interaction.reply("https://tenor.com/view/funny-ducks-gif-8734626")
                break;
            case 5 :
                interaction.reply("https://tenor.com/view/duck-kiss-martin-cabello-duck-family-gif-15683069")
                break;
            case 6 :
                interaction.reply("https://tenor.com/view/donald-duck-sweating-summer-feels-hot-innocent-gif-11670857")
                break;
            case 7 :
                interaction.reply("https://tenor.com/view/duck-dnd-aarakocra-duck-with-legs-get-real-gif-21842728")
                break;
            case 8 :
                interaction.reply("https://tenor.com/view/duck-pet-cute-vacuum-gif-3480665")
                break;
            case 9 :
                interaction.reply("https://tenor.com/view/duck-anime-gif-19849513")
                break;
            case 10 :
                interaction.reply("https://tenor.com/view/anime-cute-warm-its-so-hot-gif-16344991")
                break;
            case 11 :
                interaction.reply("https://tenor.com/view/karoo-coin-one-piece-one-piece-gif-18838682")
                break;
            case 12 :
                interaction.reply("https://tenor.com/view/duck-duck-duck-orange-adorable-cute-gif-16840410")
                break;
            case 13 :
                interaction.reply("https://tenor.com/view/tired-yawning-cute-animals-sleepy-gif-15625165")
                break;
            case 14 :
                interaction.reply("https://tenor.com/view/googles-tears-cry-duck-duck-tears-tearduct-gif-20507726")
                break;
            case 15 :
                interaction.reply("https://tenor.com/view/ducks-peas-eating-animal-food-gif-17866532")
                break;
            case 16 :
                interaction.reply("https://tenor.com/view/mcparks-ducks-magic-kingdom-minecraft-duck-gif-20201182")
                break;
            case 17 :
                interaction.reply("https://tenor.com/view/duck-game-duck-game-gif-21685923")
                break;
            case 18 :
                interaction.reply("https://tenor.com/view/goose-scrolling-duck-funny-animals-gif-13973222")
                break;
            case 19 :
                interaction.reply("https://tenor.com/view/geese-slide-funny-pet-videos-funny-pet-video-gifs-goose-gif-9991796")
                break;
            case 20 :
                interaction.reply("https://tenor.com/view/donald-duck-naked-duck-donald-cover-up-gif-15897020")
                break;
            case 21 :
                interaction.reply("https://tenor.com/view/wakeup-ducky-wake-up-gif-5587231")
                break;
            case 22 :
                interaction.reply("https://tenor.com/view/mr-ping-kung-fu-panda-blink-nod-yes-gif-16024908")
                break;
            case 23 :
                interaction.reply("https://tenor.com/view/duck-gif-17971572")
                break;
            case 24 :
                interaction.reply("https://tenor.com/view/run-duck-gif-20148108")
                break;
            case 25 :
                interaction.reply("https://tenor.com/view/duck-run-waddle-exctied-cute-gif-4389842")
                break;
            case 26 :
                interaction.reply("https://tenor.com/view/pizza-duck-gif-8158518")
                break;
            case 27 :
                interaction.reply("https://tenor.com/view/cute-duck-gif-18043668")
                break;
            case 28 :
                interaction.reply("https://tenor.com/view/duck-eating-eat-bread-gif-18457160")
                break;
            case 29 :
                interaction.reply("https://tenor.com/view/duck-bite-ahhh-stare-down-gif-9727667")
                break;
            case 30 :
                interaction.reply("https://tenor.com/view/ducks-mallard-pond-freezing-cold-gif-20608972")
                break;
            case 31 :
                interaction.reply("https://tenor.com/view/duck-ice-duck-ice-gif-23308803")
                break;
            case 32 :
                interaction.reply("https://tenor.com/view/duck-ice-duck-ice-gif-23308803")
                break;
            case 33 :
                interaction.reply("https://tenor.com/view/ducky-water-bath-bath-time-duck-gif-17243453")
                break;
            case 34 :
                interaction.reply("https://tenor.com/view/cat-ducks-bathtub-cat-staring-cute-bath-gif-15872423")
                break;
            case 35 :
                interaction.reply("https://tenor.com/view/dogs-disneyland-donald-duck-pet-gif-22145864")
                break;
            case 36 :
                interaction.reply("https://tenor.com/view/duck-cute-duck-duck-pet-duck-clap-amazing-duck-gif-22701478")
                break;
            case 37 :
                interaction.reply("https://tenor.com/view/gravity-falls-duck-canard-coinspecteur-ducktective-gif-17037966")
                break;
            case 38 :
                interaction.reply("https://tenor.com/view/ingo-ohne-flamingo-win-you-sing-fun-gif-13856152")
                break;
            case 39 :
                interaction.reply("https://tenor.com/view/duck-spinning-turning-divers-shoes-gif-15963112")
                break;
            case 40 :
                interaction.reply("https://tenor.com/view/army-of-ducks-ducklings-gif-23290045")
                break;
            case 41 :
                interaction.reply("https://tenor.com/view/duck-slde-slip-wee-gif-3540193")
                break;
            case 42 :
                interaction.reply("https://tenor.com/view/duck-sleeping-sleep-sleepy-nap-time-gif-16536387")
                break;
            case 43 :
                interaction.reply("https://tenor.com/view/happy-duck-pet-cute-gif-12986190")
                break;
            case 44 :
                interaction.reply("https://tenor.com/view/duck-duck-trap-duck-flip-gif-24652643")
                break;
            case 45 :
                interaction.reply("https://tenor.com/view/duck-drop-duck-fall-oops-gif-16732621")
                break;
            case 46 :
                interaction.reply("https://tenor.com/view/duck-dancing-duck-walk-away-gif-21526535")
                 break;
            case 47 :
                interaction.reply("https://tenor.com/view/duck-flower-hat-sunflower-gif-24583729")
                break;
            case 48 :
                interaction.reply("https://tenor.com/view/duck-fall-back-cute-falling-jump-gif-15884158")
                break;
            case 49 :
                interaction.reply("https://tenor.com/view/daffy-duck-sexy-funny-seductive-gif-14407744")
                break;
            case 50 :
                interaction.reply("https://tenor.com/view/donald-duck-stuck-donald-gif-22045738")
                break;
            case 51 :
                interaction.reply("https://tenor.com/view/large-duck-cute-giant-duck-huge-duck-gif-17586378")
                break;
            case 52 :
                interaction.reply("https://tenor.com/view/duck-ducks-swing-cute-animals-gif-15449339")
                break;
            case 53 :
                interaction.reply("https://tenor.com/view/duck-duckling-adorable-gif-4522389")
                break;
            case 54 :
                interaction.reply("https://tenor.com/view/duck-ducks-army-march-meme-gif-22547764")
                break;
            case 55 :
                interaction.reply("https://tenor.com/view/patitos-donald-duck-duck-gif-15819973")
                break;
            case 56 :
                interaction.reply("https://tenor.com/view/cat-and-baby-duck-gif-20859205")
                break;
            case 57 :
                interaction.reply("https://tenor.com/view/duck-dance-epic-gif-18010817")
                break;
            case 58 :
                interaction.reply("https://tenor.com/view/lils-silly-duck-lilsduck-ducky-duck-duck-riri-the-duck-gif-19719423")
                break;
            case 59 :
                interaction.reply("https://cdn.discordapp.com/attachments/896458294909075517/941830303809404948/9B16BF78-5A8A-4117-96AB-21D59BEE1CBF.gif")
                break;
            case 60 :
                interaction.reply("https://tenor.com/view/impatient-hurry-rush-pokemon-letsgo-gif-5598202")
                break;
            case 61 :
                interaction.reply("https://tenor.com/view/duck-fighting-sleep-gif-21438815")
                break;
            case 62 :
                interaction.reply("https://tenor.com/view/stabby-duck-very-mad-stabby-duck-honeyadoreyou-divya-gif-19892727")
                break;
            case 63 :
                interaction.reply("https://tenor.com/view/hipster-duck-mallard-animation-gif-13204128")
                break;
            case 64 :
                interaction.reply("https://tenor.com/view/hololive-shuba-oozora-subaru-gif-21316320")
                break;
            case 65 :
                interaction.reply("https://tenor.com/view/goose-duck-neck-gif-10344438")
                break;
        }
    },
};