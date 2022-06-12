
const profile_router = require('express').Router()

const getFollowers = 0
const getCreatedPosts = 0
const followUser = 0
const followPost = 0


profile_router.get("/profile/getFollowers", getFollowers);

profile_router.get("/profile/getPosts", getCreatedPosts);

profile_router.post("/profile/followUser", followUser);

profile_router.post("/profile/followPost", followPost);

module.exports = profile_router;

