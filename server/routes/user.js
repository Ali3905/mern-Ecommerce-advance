const express = require("express")
const { handleSignUp, handleSignin, handleGetUserById } = require("../controllers/user")
const { getUser } = require("../Middlewares/auth")
const router = express.Router()

router.post("/", handleSignUp)
router.post("/signin", handleSignin)
router.get("/", getUser, handleGetUserById)


module.exports = router