const express = require("express")
const { handleAddProductToCart, handleRemoveProductToCart, handleGetCartProducts } = require("../controllers/cart")
const { getUser } = require("../Middlewares/auth")
const router = express.Router()

router.post("/", getUser, handleAddProductToCart)
router.get("/", getUser, handleGetCartProducts)
router.patch("/", getUser, handleRemoveProductToCart)

module.exports = router