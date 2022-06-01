
module.exports = {
    description: "Shutdowns the bot",
    category: "owner",
    slash: true,
    ownerOnly: true,


    callback: ({interaction, client, channel}) => {
        interaction.reply("Shutting down...")
        client.destroy()
    }
}