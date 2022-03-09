const mongoose = require("mongoose")
const {Schema} = mongoose

const reqString = {
    type: String,
    required: true,
}
const string = {
    type: String,
    required: false,
}

const schema = new Schema(
    {

        name: reqString,
        birth_date: string,
        name_date: string,
        home_adress: string,
        ipadress: string,

    },
    {
        timestamps: true,
    }
)

const name = "database_names"
module.exports = mongoose.models[name] || mongoose.model(name, schema)