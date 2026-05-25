const express =
require("express")

const route =
express.Router()

const pay =
require("../control/pay")

route.post(
    "/add",
    pay.add
)

route.get(
    "/all",
    pay.all
)

route.put(
    "/update/:id",
    pay.update
)

route.delete(
    "/delete/:id",
    pay.del
)

module.exports =
route