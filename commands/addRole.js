const { MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
    category: "configuration",
    description: "Adds a role to the auto role message",
    slash: "both",
    permissions: ["ADMINISTRATOR"],
    minArgs: 3,
    maxArgs: 3,
    expectedArgs: "<channel> <messageId> <role>",
    expectedArgsTypes: ["CHANNEL", "STRING", "ROLE"],
    testOnly: true,
    guildOnly: true,

    init: (client) => {
        client.on("interactionCreate", interaction => {
            if(!interaction.isSelectMenu()) {
                return
            }

            const {customID, values, member} = interaction
            const component = interaction.component
            const removed = component.options.filter((option) => {
                return !values.includes(option.value)
            })
            for(const id of removed) {
                member.roles.remove(id.value)
            }

            if(customID === "auto_roles") {
                for(const id of values) {
                    member.roles.add(id)
                }
                interaction.reply({
                    content: "Roles update!",
                    ephemeral: true,
                })
            }
        })  
    },

    callbacks: async ({message, interaction, args, client}) => {
        const channel = message ? message.mentions.channels.first() : interaction.options.getChannel("channel")

        if(!channel || channel.type !== "GUILD_TEXT") {
            return "Please tag a text channel"
        }

        const messageId = args[1]
        const role = message ? message.mentions.roles.first() : interaction.options.getRole("role")

        if(!role) {
            return "Unknown role!"
        }

        const targetMessage = await channel.messages.fetch(messageId, {
            cache: true,
            force: true,
        })

        if(!targetMessage) {
            return "Unknown messageID."
        }
        if(targetMessage.author.id !== client.user?.id) {
            return `Please provide a message ID that was sent from <@${client.user?.id}>`
        }

        let row = targetMessage.comments[0]
        if(!row) {
            row = new MessageActionRow()
        }

        const option = [{
            label: role.name,
            value: role.id
        }]

        let menu = row.comments[0]
        if(menu) {
            for(const o of menu.options) {
                if(o.valie === option[0].value) {
                    return {
                        custom: true,
                        content: `<@&${o.value}> is already part of this menu.`,
                        allowedMentions: {
                            roles: [],
                        },
                        ephemeral: true,
                    }
                }
            }
            menu.addOptions(option)
            menu.setMaxValues(menu.options.length)
        } else {
            row.addComponents(
                new MessageSelectMenu()
                .setCustomId("auto_roles")
                .setMinValues(0)
                .setMaxValues(1)
                .setPlaceholder("Select your roles...")
                .addOptions(option)
           )
        }
        targetMessage.edit({
            comments: [row]
        })
        
        return {
            custom: true,
            content: `Added <@&${role.id} to the auto roles menu.`,
            allowedMentions: {
                roles: []
            },
            ephemeral: true,
        }
    }
}