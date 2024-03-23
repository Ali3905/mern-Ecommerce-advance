const product = require("../models/product")
const user = require("../models/user")

async function handleAddProductToCart(req, res) {
    try {
        const { productId, userId } = req.body
        if (!productId) {
            return res.status(400).json({
                success : false,
                message : "Provide the ID of product to it in cart"
            })
        }
        const foundUser = await user.findById(userId).populate("cart")
        const isAlreadyInCart = foundUser.cart.filter((ele) => {
            return ele._id.toString() === productId 
        })
        if (isAlreadyInCart.length > 0) {
            return res.status(200).json({
                success : true,
                message : "Item already in cart"
            })
        }
        console.log("end");
        
        const foundProduct = await product.findById(productId)
        if (!foundProduct) {
            return res.status(400).json({
                success : false,
                message : "Could not find product"
            })
        }
        
        
        console.log("start");
        const updatedUser = await user.findByIdAndUpdate(userId, { $push : { cart : foundProduct } }, { $new : true })

        if (!updatedUser) {
            return res.status(400).json({
                success : false,
                message : "Could not update cart of user"
            })
        }

        return res.status(200).json({
            success : true,
            message : "Item added to cart"
        })

    } catch (error) {
        
    }
}

async function handleRemoveProductToCart(req, res) {
    try {
        const { productId, userId } = req.body
        if (!productId) {
            return res.status(400).json({
                success : false,
                message : "Provide the ID of product to it in cart"
            })
        }

        const foundUser = await user.findById(userId).populate("cart")

        const updatedCart = foundUser.cart.filter((ele)=>{
            return ele._id.toString() !== productId
        })

        const updatedUser = await user.findByIdAndUpdate(userId, { cart : updatedCart }, { $new : true })

        if (!updatedUser) {
            return res.status(400).json({
                success : false,
                message : "Could not update cart of user"
            })
        }

        return res.status(200).json({
            success : true,
            message : "Item removed from cart"
        })

    } catch (error) {
        
    }
}


module.exports = {
    handleAddProductToCart,
    handleRemoveProductToCart
}