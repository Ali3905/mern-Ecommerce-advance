const mongoose = require("mongoose")

const couponSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    minSpend: Number,
    noOfCoupons: {
        type: Number,
        required: true
    },
    validTill: {
        type: Date,
        required: true
    },
}, { timestamps: true })

const coupon = mongoose.model("coupon", couponSchema)
module.exports = coupon