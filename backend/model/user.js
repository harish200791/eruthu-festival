const mongoose = require("mongoose")

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    user: {
        type: String,
        required: true,
        unique: true
    },

    pass: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("user", user)