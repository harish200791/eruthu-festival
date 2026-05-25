const express = require("express")
const multer = require("multer")

const route = express.Router()

const bull =
    require("../control/bull")

const store =
    multer.diskStorage({

    destination:
    (req, file, cb) => {

        cb(null, "upload")
    },

    filename:
    (req, file, cb) => {

        cb(
            null,
            Date.now() +
            "-" +
            file.originalname
        )
    }
})

const upload =
    multer({
        storage: store
    })

route.post(
    "/add",
    upload.single("image"),
    bull.add
)

route.get(
    "/all",
    bull.all
)

route.get(
    "/one/:id",
    bull.one
)

route.put(
    "/update/:id",
    bull.update
)

route.delete(
    "/delete/:id",
    bull.del
)

module.exports = route