const team =
require("../model/team")

exports.add =
async (req, res) => {

    try {

        const data =
        new team({

            name:
            req.body.name,

            role:
            req.body.role,

            phone:
            req.body.phone,

            village:
            req.body.village,

            amount:
            req.body.amount,

            work:
            req.body.work
        })

        await data.save()

        res.json({
            msg:
            "team add ok",
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
        await team.find()

        res.json(data)

    } catch (error) {
        res.json(error)
    }
}

exports.update =
async (req, res) => {

    try {

        await team
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

        await team
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