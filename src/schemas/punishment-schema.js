const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const schema = new mongoose.Schema(
    {
        userId: reqString,
        guildId: reqString,
        staffId: reqString,
        reason: reqString,
        expires: Date,
        type: {
            type: String,
            required: true,
            enum: ["ban", "mute"],
        },
    },
    {
        timestamps: true,
    }
)

const name = "punishments"
module.exports = mongoose.models[name] || mongoose.model(name, schema)