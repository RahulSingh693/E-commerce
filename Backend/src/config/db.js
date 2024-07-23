const mongodbURL = "mongodb+srv://rahuls29:IUGamNQox4Ukj1oq@cluster0.zpxk9ye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(mongodbURL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
}

module.exports = connectDB;