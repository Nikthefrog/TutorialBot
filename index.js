const discord = require('discord.js')
const dotenv = require('dotenv/config')

const client = new discord.Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "MessageContent"
    ]
})

client.once('ready', () => {
    console.log("Bot is ready")
})

client.on("messageCreate", (message) => {
    if(message.content === "!ping") {
        message.reply("Pong!")
    }
})

client.login(process.env.TOKEN)
