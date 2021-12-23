
module.exports = {
    category: "Welcome",
    description: "Simulates a join",
    slash: "both",


    callback: ({member, client}) => {
        client.emit("guildMemberAdd", member);
        return "join simulated"
    }
}