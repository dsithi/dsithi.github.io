import MatchCards from './MatchCards_250x150.png';
import EconomyBot from './DiscordBot_250x150.png';
let data = [
    {
        id: 1,
        img: MatchCards,
        name: "Match Cards",
        desc: "Web socket based card matching game with chat room. Four players are allowed per room with two being able to play. Players take turns picking pairs of cards and the player with the highest points wins.",
        link: "https://match--cards.herokuapp.com/",
        repo: "https://github.com/dsithi/match-cards"
    },
    {
        id: 2,
        img: EconomyBot,
        name: "Economy Bot",
        desc: "A discord.js economy bot based on collecting various character cards. The bot waits for commands to be received by users and sends various messages depending on which command it is. MongoDB is used to store user data.",
        link: "",
        repo: "https://github.com/dsithi/economy-bot"
    },
];

export {data};