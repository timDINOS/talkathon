const mongoose = require("mongoose")
const { userSchema } = require('../models/user_models.js')

export const userSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
    },
    description: {
        type: String,
    },
    zoom_link: {
        type: URL,
    },
    followers: {
        type: Array,
    }
});