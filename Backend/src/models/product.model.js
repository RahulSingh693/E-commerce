const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 1000
    },
    price: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number,
        required: true
    },
    discountPresent: {
        type: Number,
        // required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required
    },
    color: {
        type: String,
        // required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    },
    sizes: [
        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    imageUrl: {
        type: String,
        required: true
    },
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ratings',
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'reviews',
        }
    ],
    numRatings: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        // required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Product = mongoose.model('products', productSchema);
module.exports = Product;