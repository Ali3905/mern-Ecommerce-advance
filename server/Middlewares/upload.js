const multer = require("multer");

let images = []
const avatarStorage = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null, "./uploads")
    },
    filename : function (req, file, cb) {
        const uniqueFileName = Date.now() + "-" + file.originalname
        images.push(`uploads/${uniqueFileName}`)
        req.body.images = images
        cb(null, uniqueFileName)
    }
})

const avatarUpload = multer({ storage : avatarStorage })

module.exports = {
    avatarUpload
}