const {TOKEN} = require("../../config.json")

module.exports = {
    description: "Restarts the bot",
    category: "owner",
    slash: true,
    ownerOnly: true,
    
    callback: ({interaction, client, channel}) => {
        interaction.reply("Restarting...")
        client.destroy()
        client.login(TOKEN)
        channel.send("Restared")
    }
}