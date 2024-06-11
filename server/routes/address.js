const express = require("express")
const { handleCreateAddress, handleDeleteAddress, handleUpdateAddress, handleGetAllAddressOfUser } = require("../controllers/address")
const { getUser } = require("../Middlewares/auth")
const router = express.Router()

router.get("/", getUser, handleGetAllAddressOfUser)
router.post("/", getUser, handleCreateAddress)
router.delete("/:addressId", getUser, handleDeleteAddress)
router.patch("/:addressId", getUser, handleUpdateAddress)



module.exports = router