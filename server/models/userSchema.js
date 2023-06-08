const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    userId: {
        type: String
    },
    name: {
        type: String
    }
})

// const User = mongoose.model("Users", userSchema);
module.exports = mongoose.model("Users", userSchema);