const addres = require("../models/address");
const user = require("../models/user");

async function handleCreateAddress (req, res) {
    try {
        const { address, zipCode, phoneNumber, typeOfAddress, userId } = req.body
        if (!address || !zipCode) {
            return res.status(400).json({
                success : false,
                message : "Fill all the required fields"
            })
        }
        if (!["HOME", "OFFICE", "SHOP"].includes(typeOfAddress)) {
            return res.status(400).json({
                success : false,
                message : "This format of type is not allowed"
            })
        }

        const createdAddress = await addres.create({
            address , zipCode, phoneNumber : phoneNumber || null, typeOfAddress
        })

        const updatedUser = await user.findByIdAndUpdate(userId, { $push : { addresses : createdAddress }}, { $new : true } )

        return res.status(201).json({
            success : true,
            message : "Address created",
            createdAddress,
            updatedUser
        })

    } catch (error) {
        
    }
}

async function handleUpdateAddress (req, res) {
    try {
        const { addressId } = req.params
        const { editedAddress } = req.body

        if (!addressId || !editedAddress) {
            return res.status(400).json({
                success : false,
                message : "Provide ID of address and edited Address"
            })
        }

        const updatedAddress = await addres.findByIdAndUpdate(addressId, editedAddress, { $new : false })

        return res.status(200).json({
            success : true,
            message : "Address updated",
            updatedAddress
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

async function handleDeleteAddress (req, res) {
    try {
        const { addressId } = req.params
        console.log(req.body.userId);

        if (!addressId) {
            return res.status(400).json({
                success : false,
                message : "Provide ID of address to delete it"
            })
        }

        const deletedAddress = await addres.findByIdAndDelete(addressId)
        
        const updatedUser = await user.findByIdAndUpdate(req.body.userId, { $pull : { addresses : deletedAddress._id }}, { $new : true } )

        return res.status(200).json({
            success : true,
            message : "Address Deleted",
            deletedAddress,
            updatedUser
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

async function handleGetAllAddressOfUser(req, res) {
    try {
        const { userId } = req.body
        const foundUser = await user.findById(userId).populate("addresses")
        return res.status(200).json({
            success : true,
            foundAddresses : foundUser.addresses ,
            message : "Addresses Found"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    handleCreateAddress,
    handleDeleteAddress,
    handleUpdateAddress,
    handleGetAllAddressOfUser
}