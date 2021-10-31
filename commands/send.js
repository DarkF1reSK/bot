module.exports = {
    category: "configuration",
    description: "Sends a message.",
    Permissions: ["ADMINISTRATOR"],

    minArgs: 2,
    expectedArgs: "<channel> <text>",
    expectedArgsTypes: ["CHANNEL", "STRING"],

    slash: "both",
    testOnly: true,
    guildOnly: true,

    callback: ({message, interaction, args}) => {
        const channel = message ? message.mentions.channels.first() : interaction.options.getChannel("channel")

        if(!channel || channel.type !== "GUILD_TEXT") {
            return "Please tag a text channel"
        }
        args.shift() //remove the channel from arguments array
        const text = args.join(" ")

        channel.send(text)

        if(interaction) {
            interaction.reply({
                content: "Send message!",
                ephemeral: true,
            })
        }

    }
}