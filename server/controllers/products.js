const product = require("../models/product");

async function handleCreateProduct(req, res) {
    try {
        const { title, description, price, images } = req.body
        if (!title || !description || !price || !images || images.length < 1) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            })
        }

        const createdProduct = await product.create({
            title, description, price, images
        })

        return res.status(201).json({
            success: true,
            message: "Product created",
            createdProduct
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

async function handleDeleteProductById(req, res) {
    try {
        const { productId } = req.params

        if (!productId) {
            return res.status(400).json({
                success: false,
                message: "Provide the ID of product to delete it"
            })
        }


        const deletedProduct = await product.findByIdAndDelete(productId)

        if (!deletedProduct) {
            return res.status(400).json({
                success: false,
                message: "Provide valid the ID of product to delete it"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Product deleted",
            deletedProduct
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

async function handleUpdateProduct (req, res) {
    try {
        const { productId } = req.params
        const { editedProduct } = req.body

        if (!productId || !editedProduct) {
            return res.status(400).json({
                success : false,
                message : "Provide the ID of product and edited product the update it"
            })
        }

        const updatedProduct = await product.findByIdAndUpdate(productId, editedProduct, { $new : true })
        if (!updatedProduct) {
            return res.status(400).json({
                success : false,
                message : "Could not update the product"
            })
        }
        return  res.status(200).json({
            success : true,
            message : "Product updated",
            updatedProduct
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

async function handleGetProductById(req, res) {
    try {

        const { productId } = req.params
        if (!productId) {
            return res.status(400).json({
                success : false,
                message : "Provide the ID of product to find it"
            })
        }

        const foundProduct = await product.findById(productId)
        if (!foundProduct) {
            return res.status(400).json({
                success : true,
                message : "Could not find Prouct with this ID"
            })
        }

        return res.status(200).json({
            success : true,
            message : "Prouct Found",
            foundProduct
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
async function handleGetAllProducts(req, res) {
    try {
        const allProducts = await product.find({})
        return res.status(200).json({
            success : true,
            message : "Proucts Found",
            allProducts
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    handleCreateProduct,
    handleDeleteProductById,
    handleUpdateProduct,
    handleGetAllProducts,
    handleGetProductById
}