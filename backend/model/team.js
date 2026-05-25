const mongoose = require("mongoose")

const team = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    role: {
        type: String
    },

    phone: {
        type: String
    },

    village: {
        type: String
    },

    amount: {
        type: Number
    },

    work: {
        type: String
    }

})

module.exports =
mongoose.model("team", team)