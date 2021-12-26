module.exports = {
    description: "Restarts the bot",
    category: "owner",
    slash: true,
    ownerOnly: true,
    testOnly: true,

    callback: async({interaction}) => {
        await interaction.reply("Restarting...")
        process.exit()

    }
}