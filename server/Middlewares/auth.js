const jwt = require("jsonwebtoken")

async function getUser(req, res, next) {
    const { authtoken } = req.headers
    if (!authtoken) {
        return res.status(400).json({
            success : false,
            message : "Login with correct creds"
        })
    }
    const data = jwt.verify(authtoken, process.env.JWT_SECRET)
    req.body.userId = data._id
    next()
}


module.exports = {
    getUser
}