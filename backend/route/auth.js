const express = require("express")

const route = express.Router()

route.post("/login", (req, res) => {

const { user, pass } = req.body

if(user === "admin" && pass === "12345"){

res.json({
msg:"login ok"
})

}else{

res.json({
msg:"Invalid username or password"
})

}

})

module.exports = route