module.exports = {
    description: "Set's the bots status",
    category: "configuration",
    minArgs: 1,
    expectedArgs: "<status>",
    slash: "both",
    testOnly: true,
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