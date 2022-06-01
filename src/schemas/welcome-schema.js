const mongoose = require("mongoose")

const reqString = {
    type: String,
    required: true
}

const welcomeSchema = new mongoose.Schema({
    // Guild id
    _id: reqString,
    channelId: reqString,
    text: reqString,

})

const name = "Welcome"
module.exports = mongoose.models[name] || mongoose.model(name, welcomeSchema, name)