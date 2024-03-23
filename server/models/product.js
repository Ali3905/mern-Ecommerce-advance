const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    images : {
        type : [String],
        required : true
    },
    sales : {
        type : Number,
        default : 0
    },
    reviews : {
        type : [{
            message : String,
            rating : Number
        }],
        default : []
    },
    ratings : {
        type : Number,
        default : 0
    }

}, { timestamps : true })

// Define a pre-save middleware to update ratings
productSchema.pre('save', async function(next) {
    try {
        // Get all reviews associated with the product
        const reviews = await this.model('product').findById(this._id).populate('reviews');

        // Calculate the sum of ratings
        const totalRatings = reviews.reviews.reduce((sum, review) => sum + review.rating, 0);

        // Calculate the average rating
        const averageRating = totalRatings / reviews.reviews.length;

        // Update the product's ratings
        this.ratings = averageRating.toFixed(2);
        
        next();
    } catch (error) {
        console.error(error);
        next(error);
    }
});

const product = mongoose.model("product", productSchema)
module.exports = product