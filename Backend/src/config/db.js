const mongoose = require('mongoose');

const connectDB = async (mongodbURL) => {
    try {
        await mongoose.connect(mongodbURL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
}

module.exports = connectDB;