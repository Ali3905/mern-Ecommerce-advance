const express = require("express")
const { handleSignUp, handleSignin } = require("../controllers/user")
const router = express.Router()

router.post("/", handleSignUp)
router.post("/signin", handleSignin)


module.exports = router