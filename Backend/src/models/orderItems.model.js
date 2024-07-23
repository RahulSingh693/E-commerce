const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderItemSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    discountedPrice: {
        type: Number,
        required: true
    },
});

const OrderItem = mongoose.model('orderItems', orderItemSchema);
module.exports = OrderItem;