const pay =
require("../model/pay")

exports.add =
async (req, res) => {

    try {

        const data =
        new pay({

            owner:
            req.body.owner,

            bullname:
            req.body.bullname,

            amount:
            req.body.amount,

            status:
            req.body.status,

            date:
            req.body.date,

            tid:
            req.body.tid
        })

        await data.save()

        res.json({
            msg:
            "pay add ok",
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
        await pay.find()

        res.json(data)

    } catch (error) {
        res.json(error)
    }
}

exports.update =
async (req, res) => {

    try {

        await pay
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

        await pay
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