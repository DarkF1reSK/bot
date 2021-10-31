const { GuildMember } = require('discord.js')

module.exports = {
    category: "moderation",
    description: "Ban's a user",
    slash: "both",
    permissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
    testOnly: true,
    guildOnly: true,
    minArgs: 2,
    expectedArgs: "<user> <reason>",
    expectedArgsTypes: ["USER", "STRING"],

    callback: ({message, interaction, args}) => {
        const target = message ? message.mentions.members?.first() : interaction.options.getMember("user")

        if (!target) {
            return "Please tag someone to ban."
        }

        if(!target.kickable) {
            return {
                custom: true,
                content: "Cannot ban that user",
                ephemeral: true,
            }
            
        }

        args.shift()
        const reason = args.join(" ")

        target.ban(reason)

        return {
            custom: true,
            content: `You banned <@${target.id}>`,
            ephemeral: true,
        }
    }
}