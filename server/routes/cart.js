const express = require("express")
const { handleAddProductToCart, handleRemoveProductToCart } = require("../controllers/cart")
const { getUser } = require("../Middlewares/auth")
const router = express.Router()

router.post("/", getUser, handleAddProductToCart)
router.patch("/", getUser, handleRemoveProductToCart)

module.exports = router