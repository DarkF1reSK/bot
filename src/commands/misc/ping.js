const { messageEmbed } = require("discord.js")

module.exports = {
    category: "fun",
    description: "Replies with pong",
    slash: "both",

    
    callback: (message, interaction) => {
        return "pong"

    }
}