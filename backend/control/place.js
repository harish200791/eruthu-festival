const place =
require("../model/place")

exports.add =
async (req, res) => {

    try {

        const data =
        new place({

            village:
            req.body.village,

            district:
            req.body.district,

            year:
            req.body.year,

            note:
            req.body.note
        })

        await data.save()

        res.json({
            msg:
            "place add ok",
            data
        })

    } catch (error) {
        res.json(error)
    }
}

exports.all =
async (req, res) => {

    try {

        const data =
        await place.find()

        res.json(data)

    } catch (error) {
        res.json(error)
    }
}

exports.update =
async (req, res) => {

    try {

        await place
        .findByIdAndUpdate(
            req.params.id,
            req.body
        )

        res.json({
            msg:
            "update ok"
        })

    } catch (error) {
        res.json(error)
    }
}

exports.del =
async (req, res) => {

    try {

        await place
        .findByIdAndDelete(
            req.params.id
        )

        res.json({
            msg:
            "delete ok"
        })

    } catch (error) {
        res.json(error)
    }
}