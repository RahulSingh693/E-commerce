const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    zip: {
        type: Number,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
});

const Address = mongoose.model("addresses", AddressSchema);
module.exports = Address;