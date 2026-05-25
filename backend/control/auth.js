const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const user = require("../model/user")

exports.reg = async (req, res) => {
    try {

        const { name, user: uname, pass } = req.body

        const find = await user.findOne({
            user: uname
        })

        if (find) {
            return res.json({
                msg: "user already"
            })
        }

        const hash = await bcrypt.hash(pass, 10)

        const data = new user({
            name,
            user: uname,
            pass: hash
        })

        await data.save()

        res.json({
            msg: "register ok"
        })

    } catch (error) {
        res.json(error)
    }
}

exports.login = async (req, res) => {
    try {

        const { user: uname, pass } = req.body

        const data = await user.findOne({
            user: uname
        })

        if (!data) {
            return res.json({
                msg: "no user"
            })
        }

        const ok = await bcrypt.compare(
            pass,
            data.pass
        )

        if (!ok) {
            return res.json({
                msg: "wrong pass"
            })
        }

        const token = jwt.sign(
            { id: data._id },
            process.env.key
        )

        res.json({
            msg: "login ok",
            token
        })

    } catch (error) {
        res.json(error)
    }
}