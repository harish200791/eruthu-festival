const express = require("express")

const route = express.Router()

const auth = require("../control/auth")

route.post("/reg", auth.reg)

route.post("/login", auth.login)

module.exports = route