
const profile_router = require('express').Router()

const getFollowers = require('../profile/profile_operations');
const getCreatedPosts = require('../profile/profile_operations');
const followUser = require('../profile/profile_operations');
const followPost = require('../profile/profile_operations');
const unfollowUser = require('../profile/profile_operations');
const unfollowPost = require('../profile/profile_operations');


profile_router.get("/profile/getFollowers", getFollowers);

profile_router.get("/profile/getPosts", getCreatedPosts);

profile_router.post("/profile/followUser", followUser);

profile_router.post("/profile/followPost", followPost);

profile_router.delete("/profile/unfollowUser", unfollowUser);

profile_router.delete("/profile/unfollowPost", unfollowPost);



module.exports = profile_router;

