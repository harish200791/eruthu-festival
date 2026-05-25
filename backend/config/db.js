const mongoose = require("mongoose")

const db = async () => {
    try {
        await mongoose.connect(process.env.url)

        console.log("db ok")
    } catch (error) {
        console.log(error)
    }
}

module.exports = db