const ms = require("ms")

module.exports = {
    category: "moderation",
    description: "timeout a member",
    slash: true,
    options: [
        {
            name: "user",
            description: "member to perform the timeout on",
            type: "USER",
            required: true,
        },
        {
            name: "length",
            description: "length of timeout",
            type: "STRING",
            required: true,
        },
        {
            name: "reason",
            description: "reason for this timeout",
            type: "STRING",
            required: true,
        },
    ],

    callback: async({interaction}) =>{
        const user = interaction.options.getUser("user")
        const length = interaction.options.getString("length")
        const reason = interaction.options.getString("reason")
        const member = interaction.guild.members.cache.get(user.id)
        const timeInMs = ms(length)
        if(!timeInMs) return interaction.reply("Please specify a valid time")
        try {
            member.timeout(timeInMs, reason)
            interaction.reply(`${user} has been timeout-ed for ${length}! reason: ${reason}`)
        }catch(err) {
            return "I dont have permissions to timeout that user"
        }
    }
}