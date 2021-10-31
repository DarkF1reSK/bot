
module.exports = {
    category: "Welcome",
    description: "Simulates a join",
    slash: "both",
    testOnly: true,

    callback: ({member, client}) => {
        client.emit("guildMemberAdd", member);
        return "join simulated"
    }
}