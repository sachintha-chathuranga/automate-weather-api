const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    location: {
        lat: Number,
        lon: Number
    }
});

module.exports = mongoose.model("User", userSchema);