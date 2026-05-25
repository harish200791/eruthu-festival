const express = require("express")
const Razorpay = require("razorpay")

const route = express.Router()

const razorpay = new Razorpay({
key_id: process.env.razorpaykey,
key_secret: process.env.razorpaysecret
})

route.post("/order", async (req,res)=>{
try{
const amount = req.body.amount * 100

const order = await razorpay.orders.create({
amount: amount,
currency: "INR",
receipt: "receipt_" + Date.now()
})

res.json(order)
}catch(error){
res.json(error)
}
})

module.exports = route