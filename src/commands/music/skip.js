const player = require("../../client/player");

module.exports = {
    name: "skip",
    description: "skip the current song",
    category: "music",
    slash: true,

    
    callback: async ({client, interaction, args}) => {
        const queue = player.getQueue(interaction.guildId);
        if (!queue?.playing)
            return interaction.reply({
                content: "No music is currently being played",
            });

        await queue.skip();

        interaction.reply({ content: "Skipped the current track!" });
    },
};