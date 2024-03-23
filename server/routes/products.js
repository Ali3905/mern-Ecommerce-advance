const express = require("express")
const { handleCreateProduct, handleDeleteProductById, handleUpdateProduct, handleGetAllProducts, handleGetProductById } = require("../controllers/products")
const { avatarUpload } = require("../Middlewares/upload")
const router = express.Router()

router.post("/", avatarUpload.fields([{ name : "productImage" }]) , handleCreateProduct)
router.get("/id/:productId", handleGetProductById)
router.delete("/:productId", handleDeleteProductById)
router.patch("/:productId", handleUpdateProduct)
router.get("/allProducts", handleGetAllProducts)

module.exports = router