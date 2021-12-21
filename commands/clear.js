module.exports = {
    category: "utillity",
    description: "Delets multiple messages at once",
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
    maxArgs: 1,
    expectedArgs: "[amount]",
    slash: "both",

    

    callback: async ({ message, interaction, channel, args }) => {
        const amount = args.length ? parseInt(args.shift()) : 100
        if(message) {
            await message.delete()
        }
        const messages = await channel.messages.fetch({limit: amount})
        const {size} = messages
        messages.forEach(message => message.delete())

        const reply = `Deleted ${size} message(s)`

        if(interaction) {
            return reply
        }
        channel.send(reply)

    }


}