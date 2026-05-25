const mongoose = require("mongoose")

const pay = new mongoose.Schema({

    owner: {
        type: String,
        required: true
    },

    bullname: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        default: "pending"
    },

    date: {
        type: String
    },

    tid: {
        type: String
    }

})

module.exports =
mongoose.model("pay", pay)