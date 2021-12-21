const player = require("../../client/player");

module.exports = {
    name: "pause",
    description: "pause the current song",
    category: "music",
    slash: true,


    callback: async ({client, interaction}) => {
        const queue = player.getQueue(interaction.guildId);

        queue.setPaused(true);

        return interaction.reply({ content: "Paused the current track!" });
    },
};