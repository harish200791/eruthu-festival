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