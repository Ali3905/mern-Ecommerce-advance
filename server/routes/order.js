const express = require("express")
const { handleCreateOrder, handleReviewOrder, handleGetAllOrders } = require("../controllers/order")
const { getUser } = require("../Middlewares/auth")
const router = express.Router()

router.post("/", getUser, handleCreateOrder)

router.post("/review", getUser, handleReviewOrder)

router.get("/", getUser, handleGetAllOrders)

module.exports = router