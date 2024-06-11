const multer = require("multer");


const avatarStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!req.body.images) {
            req.body.images = []
        }
        cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
        const uniqueFileName = Date.now() + "-" + file.originalname
        // images.push(`uploads/${uniqueFileName}`)
        req.body.images.push(`uploads/${uniqueFileName}`)
        cb(null, uniqueFileName)
    }
})

const avatarUpload = multer({ storage: avatarStorage })

module.exports = {
    avatarUpload
}