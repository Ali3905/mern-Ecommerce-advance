const mongoose = require("mongoose")

const addressSchema = mongoose.Schema({
    address : {
        type : String,
        required : true
    },
    zipCode : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : String
    },
    typeOfAddress : {
        type : String,
        enum : ["HOME", "OFFICE", "SHOP"],
        default : "HOME"
    }
}, { timeStamps : true })

const address = mongoose.model("address", addressSchema)
module.exports = address