const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    products : [{
        product : {
            type : mongoose.Types.ObjectId,
            ref : "product",
            required : true
        },
        review : {
            type : {
                message : String,
                rating : Number
            }
        }
    }],
    address : {
        type : mongoose.Types.ObjectId,
        ref : "address"
    },
    statusOfDelivery : {
        type : String,
        enum : ["PACKING", "SHIPPED", "OUTFORDELIVERY", "DELIVERED"],
        default : "PACKING"
    },
    price : {
        type : Number,
        default : 0
    },
    delivery : {
        type : Number,
        required : true
    },
    totalPrice : {
        type : Number,
    }
}, { timeStamps : true })


orderSchema.pre("save", function(next) {
    let price = 0
    const products = this.products.map((ele)=>{
        price += ele.product.price
    })
    this.price = price

    this.totalPrice = price + this.delivery

    next()
})

const order = mongoose.model("order", orderSchema)
module.exports = order