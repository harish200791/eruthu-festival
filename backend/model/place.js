const mongoose = require("mongoose")

const place = new mongoose.Schema({

    village: {
        type: String,
        required: true
    },

    district: {
        type: String
    },

    year: {
        type: String
    },

    note: {
        type: String
    }

})

module.exports =
mongoose.model("place", place)