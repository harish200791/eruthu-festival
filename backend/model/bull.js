const mongoose = require("mongoose")

const bull = new mongoose.Schema({

    image: {
        type: String
    },

    bullname: {
        type: String,
        required: true
    },

    owner: {
        type: String,
        required: true
    },

    age: {
        type: Number
    },

    breed: {
        type: String
    },

    color: {
        type: String
    },

    weight: {
        type: String
    },

    horn: {
        type: String
    },

    regno: {
        type: String
    },

    village: {
        type: String
    },

    district: {
        type: String
    },

    state: {
        type: String
    },

    address: {
        type: String
    },

    phone: {
        type: String
    },

    vaccine: {
        type: String
    },

    height: {
        type: String
    },

    skill: {
        type: String
    },

    festival: {
        type: String
    },

    prize: {
        type: String
    },

    note: {
        type: String
    }

})

module.exports = mongoose.model("bull", bull)