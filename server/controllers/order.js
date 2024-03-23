const address = require("../models/address")
const order = require("../models/order")
const product = require("../models/product")
const user = require("../models/user")

async function handleCreateOrder (req, res) {
    try {
        const { productIds, delivery, addressId, userId } = req.body

        if (productIds.length<1 || !delivery || !addressId) {
            return res.status(400).json({
                success : false,
                message : "Provide all the required fields"
            })
        }

        const products = await product.find({ _id : { $in : productIds }})

        const productToPush = products.map((ele)=>{
            return { product : ele }
        })
        const foundAddress = await address.findById(addressId)

        const createdOrder = await order.create({
            products : productToPush , delivery, address : foundAddress, 
        })

        const updatedUser = await user.findByIdAndUpdate(userId, { $push : { orders : createdOrder } }, { $new : true })

        
        return res.status(201).json({
            success : true,
            message : "Order created",
            createdOrder
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

async function handleReviewOrder(req, res) {
    try {
        const { productId, orderId } = req.query
        const { message, rating } = req.body
        if (!productId || !orderId || !message || !rating) {
            return res.status(400).json({
                success : false,
                message : "Provide Product ID, order ID, message and rating to review"
            })
        }
        const foundOrder = await order.findById(orderId)

        const foundProduct = foundOrder.products.filter((ele) => ele.product.toString() === productId )
        if (foundProduct<1) {
            return res.status(400).json({
                success : false,
                message : "Could not find product you want to review",
                foundProduct
            })
        }

        const updatedProducts = foundOrder.products.map((ele) => {
            if (ele.product.toString() === productId ) {
                return { product : ele.product , review : { message, rating } }
            }else {
                return ele
            }
        })

        const updatedOrder = await order.findByIdAndUpdate(orderId, { products : updatedProducts }, { $new : true })
        const updatedReviewsInProduct = await product.findByIdAndUpdate(productId, { $push : { reviews : { message, rating } } }, { $new : true })
        updatedReviewsInProduct.save()

        return res.status(201).json({
            success : true,
            message : "Review added",
            updatedOrder
        })

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    handleCreateOrder,
    handleReviewOrder
}