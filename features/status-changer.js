module.exports = (client) => {
    const statusOptions = [
        "hello",
        "hi"
    ]
    let counter = 0 

    const updateStatus = () => {
        client.user.setPresence({
            status: "online",
            activities: [
                {
                    name: statusOptions[counter]
                }
            ]
        })
        if(++counter >= statusOptions.length) {
            counter = 0
        }
        setTimeout(updateStatus, 1000 * 60 * 4)
    }
    updateStatus()

}

module.exports.config = {
    dbName: "STATUS-CHANGER",
    displayName: "Status Changer"
}