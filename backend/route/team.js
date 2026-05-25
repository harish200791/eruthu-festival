const express =
require("express")

const route =
express.Router()

const team =
require("../control/team")

route.post(
    "/add",
    team.add
)

route.get(
    "/all",
    team.all
)

route.put(
    "/update/:id",
    team.update
)

route.delete(
    "/delete/:id",
    team.del
)

module.exports =
route