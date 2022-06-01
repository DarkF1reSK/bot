const discord = require('discord.js')
const mongoose = require('mongoose')
const path = require('path')
const {TOKEN, PREFIX, MONGOURI} = require('./config.json')
const WOKCommands = require("wokcommands")
const {Intents} = discord




const client = new discord.Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_VOICE_STATES,
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
        testServers: ["837762158070071357", "704765614627094589"],
        botOwners: ["655856108350603267", "544850481109925899"],
        dbOptions,

        mongoUri: MONGOURI,
        disabledDefaultCommands: [
            "help",
            'command',
            'language',
            'prefix',
            'requiredrole',
            'channelonly'
        ]
    })
    .setDefaultPrefix(PREFIX)
})


module.exports = client
client.login(TOKEN)