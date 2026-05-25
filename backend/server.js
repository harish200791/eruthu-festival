const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const db = require("./config/db")

const auth = require("./route/auth")
const bull = require("./route/bull")
const pay = require("./route/pay")
const team = require("./route/team")
const place = require("./route/place")

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/upload",
    express.static("upload")
)

db()

app.use("/auth", auth)
app.use("/bull", bull)
app.use("/pay", pay)
app.use("/team", team)
app.use("/place", place)

app.get("/", (req, res) => {
    res.send("server ok")
})

const razor = require("./route/razor")
app.use("/razor", razor)
const port = process.env.PORT || process.env.port || 5000
app.listen(port, () => {
    console.log("run " + port)
})