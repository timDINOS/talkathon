const mongoose = require('mongoose');

const { userSchema } = require('../models/user_models.js');
const { postSchema } = require('../models/post_models.js');
const {environment } = require('../config/app_config');

mongoose.connect(environment[process.env.NODE_ENV || "development"].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', () => {
    console.log("Something went wrong while opening this database");
});

const Users = mongoose.model('Users', userSchema)
const Posts = mongoose.model('Posts', postSchema)

export { Users, Posts }