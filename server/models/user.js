const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    cart : {
        type : [{ type : mongoose.Types.ObjectId, ref : "product" }],
        default : []
    },
    addresses : {
        type : [{ type : mongoose.Types.ObjectId, ref : "address" }],
        default : []
    },
    orders : {
        type : mongoose.Types.ObjectId,
        ref : "order"
    },
    role : {
        type : String,
        enum : ["SUPERADMIN", "ADMIN", "DELIVERYBOY", "USER"],
        default : "USER"
    }
}, { timestamps : true })

const user = mongoose.model("user", userSchema)
module.exports = user