const express = require("express")
const { handleCreateOrder, handleReviewOrder } = require("../controllers/order")
const { getUser } = require("../Middlewares/auth")
const router = express.Router()

router.post("/", getUser, handleCreateOrder)

router.post("/review", getUser, handleReviewOrder)

module.exports = router