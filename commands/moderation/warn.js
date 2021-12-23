const {MessageEmbed} = require("discord.js")
const warnSchema = require("../../schemas/warn-schema")

module.exports = {
    category: "moderation",
    description: "warns a member",
    permissions: ["ADMINISTRATOR"],
    slash: true,
    guildOnly: true,

    options: [
        {
            type: "SUB_COMMAND",
            name: "add",
            description: "Adds a warning to the user",


            options: [
                {
                    name: "user",
                    type: "USER",
                    description: "The user to add a warning to",
                    required: true,
                },
                {

                    type: "STRING",
                    name: "reason",
                    description: "The reason for the warning",
                    required: true,
                }

            ]
        },
        {
            type: "SUB_COMMAND",
            name: "remove",
            description: "Removes a warning to the user",


            options: [
                {
                    name: "user",
                    type: "USER",
                    description: "The user to remove a warning from",
                    required: true,
                },
                {

                    type: "STRING",
                    name: "id",
                    description: "The ID of the warning to remove",
                    required: true,
                },
            ],
        },
        {
            type: "SUB_COMMAND",
            name: "list",
            description: "Lists all warnings for the user",
            options: [
                {
                    name: "user",
                    type: "USER",
                    description: "The user to list warnings for",
                    required: true,
                }
            ]
        }
    ],

    callback: async ({ interaction, guild, member: staff }) => {
            const subCommand = interaction.options.getSubcommand()
            const user = interaction.options.getUser("user")
            const reason = interaction.options.getString("reason")
            const id = interaction.options.getString("id")

        if(subCommand === "add") {
            const warning = await warnSchema.create({
                userId: user?.id,
                staffId: staff.id,
                guildId: guild?.id,
                reason,

            })
            return {
                custom: true,
                content: `Added warning ${warning.id} to <@${user?.id}>`,
                allowedMentions: {
                    users: [],
                },
            }

        } else if(subCommand === "remove") {
                const warning = await warnSchema.findByIdAndDelete(id)
            return {
                custom: true,
                content: `Removed warning ${warning.id} from <@${user?.id}>`,
                allowedMentions: {
                    users: [],
                },
            }
        } else if(subCommand === "list") {
                const warnings = await warnSchema.find({
                    userId: user?.id,
                    guildId: guild?.id,
                })
                let description = `Warnings for <@${user?.id}>:\n\n`

                for (const warn of warnings) {
                    description += `**ID:** ${warn.id}\n`
                    description += `**Date:** ${warn.createdAt.toLocaleString()}\n`
                    description += `**Staff:** <@${warn.staffId}>\n`
                    description += `**Reason:** ${warn.reason}\n\n`
                }

                const embed = new MessageEmbed().setDescription(description)
                return embed
        }
    }
}