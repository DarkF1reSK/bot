const {MessageEmbed} = require("discord.js")
const dbschema = require("../../schemas/database-schema")

module.exports = {
    category: "owner",
    description: "database",
    ownerOnly: true,
    slash: true,

    options: [
        {
            type: "SUB_COMMAND",
            name: "add",
            description: "add to database",

            options: [
                {
                    name: "name",
                    type: "STRING",
                    description: "irl name",
                    required: false,
                },
                {
                    name: "birth_date",
                    type: "STRING",
                    description: "birth date",
                    required: false,
                },
                {
                    name: "name_date",
                    type: "STRING",
                    description: "name-date of the person",
                    required: false,
                },
                {
                    name: "home_adress",
                    type: "STRING",
                    description: "home adress of the person",
                    required: false,
                },
                {
                    name: "ipadress",
                    type: "STRING",
                    description: "ipadress",
                    required: false
                },
            ]
        },
        {
            type: "SUB_COMMAND",
            name: "remove",
            description: "remove from database",

            options: [
                {
                    name: "removeid",
                    type: "STRING",
                    description: "the id of database",
                    required: true,
                }
            ]
        },
        {
            type: "SUB_COMMAND",
            name: "list",
            description: "list all things from database",

        },
        {
            type: "SUB_COMMAND",
            name: "edit",
            description: "edit info in database",

            options: [
                {
                    name: "listid",
                    type: "STRING",
                    description: "the id of database",
                    required: true,
                },
                {
                    name: "name",
                    type: "STRING",
                    description: "irl name",
                    required: false,
                },
                {
                    name: "birth_date",
                    type: "STRING",
                    description: "birth date",
                    required: false,
                },
                {
                    name: "name_date",
                    type: "STRING",
                    description: "name-date of the person",
                    required: false,
                },
                {
                    name: "home_adress",
                    type: "STRING",
                    description: "home adress of the person",
                    required: false,
                },
                {
                    name: "ipadress",
                    type: "STRING",
                    description: "ipadress",
                    required: false
                },
            ]
        },

    ],

    callback: async({message, interaction, member, guild}) => {
        const subCommand = interaction.options.getSubcommand()
        const name = interaction.options.getString("name")
        const birthday = interaction.options.getString("birth_date")
        const namedate = interaction.options.getString("name_date")
        const homeadress = interaction.options.getString("home_adress")
        const ipadress = interaction.options.getString("ipadress")

        const id = interaction.options.getString("removeid")
        const listid = interaction.options.getString("listid")
        try {
            if (subCommand === "add") {
                const writedb = await dbschema.create({
                    name: name,
                    birth_date: birthday,
                    name_date: namedate,
                    home_adress: homeadress,
                    ipadress: ipadress,
                })
                return {
                    custom: true,
                    content: `Added into database id: ${writedb.id}`,
                }
            } else if (subCommand === "edit") {
                const editdb = await dbschema.findByIdAndUpdate(listid, {
                    name: name,
                    birth_date: birthday,
                    name_date: namedate,
                    home_adress: homeadress,
                    ipadress: ipadress,
                })
                return `Edited id: ${listid}`
            } else if (subCommand === "remove") {
                const writedb = await dbschema.findByIdAndDelete(id)
                return "Removed from database"
            } else if (subCommand === "list") {
                const writedbs = await dbschema.find({})
                let description = `info: \n\n`

                for (const idk of writedbs) {
                    description += `**name:** ${idk.name}\n`
                    description += `**birth_date:** ${idk.birth_date}\n`
                    description += `**name_date:** ${idk.name_date}\n`
                    description += `**home_adress:** ${idk.home_adress}\n`
                    description += `**ipadress:** ${idk.ipadress}\n\n`
                }

                const embed = new MessageEmbed().setDescription(description)
                return embed
            }
        }catch (err) {
            return `Error`
        }
    }
}