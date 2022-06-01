module.exports = {
    description: "Set's the bots status",
    category: "owner",
    minArgs: 1,
    expectedArgs: "<status>",
    slash: "both",
    ownerOnly: true,

    callback: ({client, text}) => {
        client.user?.setPresence({
            status: "online",
            activities: [
                {
                    name: text,
                }
            ]
        })
        return "Status updated"

    }
}