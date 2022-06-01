const player = require("../../client/player");

module.exports = {
    name: "resume",
    description: "resume the current song",
    category: "music",
    slash: true,

    callback: async ({client, interaction}) => {
        const queue = player.getQueue(interaction.guildId);

        queue.setPaused(false);

        return interaction.reply({ content: "Resumed the current track!" });
    },
};