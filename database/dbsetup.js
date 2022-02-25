const mongoose = require('mongoose');
const { userSchema } = require('../models/user_models.js');
const { postSchema } = require('../models/post_models.js');



const Users = mongoose.model('Users', userSchema)
const Posts = mongoose.model('Posts', postSchema)

export { Users, Posts }