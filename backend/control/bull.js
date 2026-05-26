const bull = require("../model/bull")

exports.add = async (req, res) => {
    try {
        const data = new bull({
            image: req.file ? req.file.filename : "",
            bullname: req.body.bullname,
            owner: req.body.owner,
            age: req.body.age,
            breed: req.body.breed,
            color: req.body.color,
            weight: req.body.weight,
            horn: req.body.horn,
            regno: req.body.regno,
            village: req.body.village,
            district: req.body.district,
            state: req.body.state,
            address: req.body.address,
            phone: req.body.phone,
            vaccine: req.body.vaccine,
            height: req.body.height,
            skill: req.body.skill,
            festival: req.body.festival,
            prize: req.body.prize,
            note: req.body.note
        })

        await data.save()

        res.json({
            msg: "bull add ok",
            data
        })

    } catch (error) {
        res.status(500).json({
            msg: "bull add error",
            error: error.message
        })
    }
}

exports.all = async (req, res) => {
    try {
        const data = await bull.find()
        res.json(data)
    } catch (error) {
        res.status(500).json({
            msg: "bull all error",
            error: error.message
        })
    }
}

exports.one = async (req, res) => {
    try {
        const data = await bull.findById(req.params.id)
        res.json(data)
    } catch (error) {
        res.status(500).json({
            msg: "bull one error",
            error: error.message
        })
    }
}

exports.update = async (req, res) => {
    try {
        await bull.findByIdAndUpdate(req.params.id, req.body)
        res.json({ msg: "update ok" })
    } catch (error) {
        res.status(500).json({
            msg: "bull update error",
            error: error.message
        })
    }
}

exports.del = async (req, res) => {
    try {
        await bull.findByIdAndDelete(req.params.id)
        res.json({ msg: "delete ok" })
    } catch (error) {
        res.status(500).json({
            msg: "bull delete error",
            error: error.message
        })
    }
}