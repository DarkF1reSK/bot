const { GuildMember } = require('discord.js')


module.exports = {
    category: "moderation",
    description: "Kick's a user",
    slash: "both",
    permissions: ["ADMINISTRATOR", "KICK_MEMBERS"],
    testOnly: true,
    guildOnly: true,
    minArgs: 2,
    expectedArgs: "<user> <reason>",
    expectedArgsTypes: ["USER", "STRING"],

    callback: ({message, interaction, args}) => {
        const target = message ? message.mentions.members?.first() : interaction.options.getMember("user")

        if (!target) {
            return "Please tag someone to kick."
        }

        if(!target.kickable) {
            return {
                custom: true,
                content: "Cannot kick that user",
                ephemeral: true,
            }
            
        }

        args.shift()
        const reason = args.join(" ")

        target.kick(reason)

        return {
            custom: true,
            content: `You kicked <@${target.id}>`,
            ephemeral: true,
        }
    }
}