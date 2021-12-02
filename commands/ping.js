module.exports = {
    category: "fun",
    description: "Replies with pong",
    slash: "both",
    testOnly: true,
    
    callback: () => {
        return "pong"
    }
}