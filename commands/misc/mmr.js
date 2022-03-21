const axios = require("axios")
const {MessageEmbed} = require("discord.js")


module.exports = {
    category: "misc",
    description: "league of legends mmr",
    testOnly: true,
    slash: true,
    options: [
        {
            name: "playername",
            type: "STRING",
            description: "ign",
            required: true,
        },
        {
            name: "server",
            type: "STRING",
            description: "league server",
            required: true,
        },
    ],

    callback: ({interaction}) => {
        const color = "DARK_RED"

        const server = interaction.options.getString("server")
        const name = interaction.options.getString("playername")




    }
}