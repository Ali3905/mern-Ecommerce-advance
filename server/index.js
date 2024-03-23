require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { connectToMongo } = require("./connnections")

// Importing Routes
const productsRoute = require("./routes/products")
const addressRoute = require("./routes/address")
const userRoute = require("./routes/user")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")

// Initializing App
const app = express()
const PORT = process.env.PORT || 8000
app.use(cors())
connectToMongo(process.env.MONGO_URL)
.then(console.log("Mongo Connected"))
.catch(err => console.log(err.message))

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use('/uploads', express.static('uploads'))

// Routes
app.use("/api/product", productsRoute)
app.use("/api/address", addressRoute)
app.use("/api/user", userRoute)
app.use("/api/cart", cartRoute)
app.use("/api/order", orderRoute)

// Listening to PORT
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})
