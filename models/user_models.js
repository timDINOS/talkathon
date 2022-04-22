const mongoose = require("mongoose")


export const userSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    followers: {
        type: Array
    },
    posts: {
        type: Array
    }
});