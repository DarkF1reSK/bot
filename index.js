const {Client, Intents} = require('discord.js')
const mongoose = require('mongoose')
const path = require('path')
const {TOKEN, PREFIX, MONGOURI} = require('./config.json')
const WOKCommands = require("wokcommands")


const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_PRESENCES,
  ],    
})

client.on("ready", () => {
    console.log(`logged as ${client.user.tag}!`)

    const dbOptions = {
        keepAlive: true,
    }

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, "commands"),
        featuresDir: path.join(__dirname, "features"),
        testServers: ["704765614627094589", "837762158070071357"],
        botOwners: ["655856108350603267", "544850481109925899"],
        dbOptions,
        disabledDefaultCommands: [
            "help",
            "prefix",
            "requiredRole",
            "channelonly",
        ],
        mongoUri: MONGOURI,
    })
    .setDefaultPrefix(PREFIX)
})

client.login(TOKEN)