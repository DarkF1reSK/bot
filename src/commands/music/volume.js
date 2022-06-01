const player = require("../../client/player");

module.exports = {
    name: "volume",
    description: "change or check the volume of the current song",
    category: "music",
    slash: true,


    options: [
        {
            name: "percentage",
            description: "percentage to change the volume to",
            type: "INTEGER",
            required: false,
        },
    ],
    callback: async ({client, interaction}) => {
        const volumePercentage = interaction.options.getInteger("percentage");
        const queue = player.getQueue(interaction.guildId);
        if (!queue?.playing)
            return interaction.reply({
                content: "No music is currently being played",
            });

        if (!volumePercentage)
            return interaction.reply({
                content: `The current volume is \`${queue.volume}%\``,
            });

        if (volumePercentage < 0 || volumePercentage > 100)
            return interaction.reply({
                content: "The volume must be betweeen 1 and 100",
            });

        queue.setVolume(volumePercentage);

        return interaction.reply({
            content: `Volume has been set to \`${volumePercentage}%\``,
        });
    },
};