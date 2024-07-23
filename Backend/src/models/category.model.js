const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // unique: true
        maxlength: 50
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    level: {
        type: Number,
        required: true,
        // default: 0
    },
});

const Category = mongoose.model('categories', categorySchema);
module.exports = Category;