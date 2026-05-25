const express =
require("express")

const route =
express.Router()

const place =
require("../control/place")

route.post(
    "/add",
    place.add
)

route.get(
    "/all",
    place.all
)

route.put(
    "/update/:id",
    place.update
)

route.delete(
    "/delete/:id",
    place.del
)

module.exports =
route