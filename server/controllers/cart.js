const product = require("../models/product")
const user = require("../models/user")

async function handleGetCartProducts(req, res) {
    try {
        const { userId } = req.body
        if (!userId) {
            return res.status(400).json({
                success : false,
                message : "Login With correct creds"
            })
        }
        const foundUser = await user.findById(userId).populate("cart")

            let price = 0
            if (foundUser.cart.length > 1) {
             
                foundUser.cart.map((product) => {
                    return price += product.price
                })
            }
        

        return res.status(200).json({
            success : true,
            message : "Cart Found",
            cartProducts : foundUser.cart,
            total : price
        })



    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

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
        res.status(500).json({
            success: false,
            message: error.message
        })
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
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    handleAddProductToCart,
    handleRemoveProductToCart,
    handleGetCartProducts
}