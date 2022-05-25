const mongoose = require('mongoose');

const { userSchema } = require('../models/user_models.js');
const { postSchema } = require('../models/post_models.js');

mongoose.connect(key.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', () => {
    console.log("Something went wrong while opening this database");
});

const Users = mongoose.model('Users', userSchema)
const Posts = mongoose.model('Posts', postSchema)

export { Users, Posts }