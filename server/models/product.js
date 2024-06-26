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
    stock : {
        type : Number,
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
        const product = await this.model('product').findById(this._id).populate('reviews');

        if (product === null) {
            return next()
        }

        // Calculate the sum of ratings
        const totalRatings = product.reviews.reduce((sum, review) => sum + review.rating, 0);

        // Calculate the average rating
        const averageRating = totalRatings / product.reviews.length;

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