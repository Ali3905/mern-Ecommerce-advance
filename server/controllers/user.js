const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const user = require("../models/user");

async function handleSignUp(req, res) {
    try {
        const { userName, email, phoneNumber, password } = req.body
        if (!userName || !email || !phoneNumber || !password) {
            return res.status(400).json({
                success : false,
                message : "Fill all the required fields"
            })
        }

        const alreadyUserWithEmailOrPhone = await user.findOne({ $or : [{ email }, { phoneNumber }] })
        if (alreadyUserWithEmailOrPhone) {
            return res.status(400).json({
                success : false,
                message : "This email or phone is already in use"
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)


        const createdUser = await user.create({
            userName, email, phoneNumber, password : hashedPassword
        })

        const data = {
            _id : createdUser._id,
            role : createdUser.role,
            userName : createdUser.userName,
        }

        const authToken = jwt.sign(data, process.env.JWT_SECRET)

        return res.status(201).json({
            success : true,
            message : "User created",
            createdUser,
            authToken
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


async function handleSignin (req, res) {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                success : false,
                message : "Fill all the required fields"
            })
        }

        const foundUser = await user.findOne({ email })
        if (!foundUser) {
            return res.status(400).json({
                success : false,
                message : "User with this email is not registered"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, foundUser.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({
                success : false,
                message : "Login with correct creds"
            })
        }

        const data = {
            _id : foundUser._id,
            role : foundUser.role,
            userName : foundUser.userName,
        }

        const authToken = jwt.sign(data, process.env.JWT_SECRET)

        return res.status(200).json({
            success : true,
            message : "Logged in",
            foundUser ,
            authToken
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    handleSignUp,
    handleSignin
}