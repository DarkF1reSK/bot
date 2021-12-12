const { messageEmbed } = require('discord.js')
const axios = require('axios')


module.exports = {
    description: "get lyrics for a song",
    category: "music",
    testOnly: true,
    slash: "both",
    expectedArgs: "<songtitle>",
    options: [{
        name: "songtitle",
        description: "title of the song",
        type: "STRING",
        required: true,
    }],
    callback: async ({client, interaction}) => {
        function subString(lenght, value) {
            const replaced = value.replace(/\n/g, "--")
            const regex = `.{1, ${lenght}}`
            const lines = replaced.match(new RegExp(regex, "g")).map(line => line.replace(/--/g, "\n"))

            return lines
        }

        const songTitle = interaction.options.getString("songtitle")
        const url = new URL("https://some-random-api.ml/lyrics")
        url.searchParams.append("title", songTitle)

        try {
            const { data } = await axios.get(url.href)

            const embeds = subString(4096, data.lyrics).map(value, index => {
                const isFirst = index === 0
                return new messageEmbed({ 
                    title: isFirst ? `${data.title} - ${data.author}`: null,
                    thumbnail: isFirst ? { url: data.thumbnail.genius}: null,
                    description: value,

                })
            })
            return embeds

        } catch (err) {
            return "Sorry but I am not able to find lyrics for that song"

        }
    }
}