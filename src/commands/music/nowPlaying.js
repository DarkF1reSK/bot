const player = require("../../client/player");

module.exports = {
    name: "now-playing",
    description: "shows information about the current song",
    category: "music",
    slash: true,


    callback: async ({client, interaction}) => {
        const queue = player.getQueue(interaction.guildId);
        if (!queue?.playing)
            return interaction.reply({
                content: "No music is currently being played",
            });

        const progress = queue.createProgressBar();
        const perc = queue.getPlayerTimestamp();

        return interaction.reply({
            embeds: [
                {
                    title: "Now Playing",
                    description: `🎶 | **${queue.current.title}**! (\`${perc.progress}%\`)`,
                    fields: [
                        {
                            name: "\u200b",
                            value: progress,
                        },
                    ],
                    
                    footer: {
                        text: `Queued by ${queue.current.requestedBy.tag}`,
                    },
                },
            ],
        });
    },
};