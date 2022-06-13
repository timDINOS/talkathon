const axios = require('axios');
const express = require('express');


const getAllfollowers = function(req, res) {
    all_users = null
    axios({
        url: '',
        method: '',
        data: {
            query: `
                query fetchFollowers(uname: ${req.body.username}) {
                    followers
                }
            `
        }
    }).then(results => {all_users = results}).catch(err => {rejects()});

    return res.json(all_users);
}

const getAllPosts = function(req, res) {
    all_posts = null
    axios({
        url: '',
        method: '',
        data: {
            query: `
                query fetchPosts(uname: ${req.body.username}) {
                    posts
                }
            `
        }
    }).then(results => {all_posts = results}).catch(err => {rejects()});

    return res.json(all_posts);
}

const addFollower = function(req, res) {
    var newfollower = {}
    axios({
        url: '',
        method: 'Get',
        data: {
            query: `
                query fetchUser(uname: ${req.body.follower_username}) {
                    User
                }
            `
        }
    }).then((follower) => {
        newfollower.first_name = follower.first_name;
        newfollower.last_name = follower.last_name;
        newfollower.age = follower.age;
        newfollower.email = follower.email;
        newfollower.username = follower.username;
        newfollower.password = '';
        newfollower.users = follower.users;
        newfollower.posts = follower.posts;

    }).catch((err) => {rejects(err); });


    axios({
        url: '',
        method: 'POST',
        data: {
            mutation: `
                mutation addUserFollower(inputUser: ${newfollower}) {
                    User
                }
            `
        }
    }).then((addedUser) => {
        res.status(200); 
        res.send(addedUser); 
    }).catch(err => {rejects(err); });
}

const addPost = function(req, res) {
    return 0;
}

const unfollowUser = function(req, res) {
    return 0;
}

const unfollowPost = function(req, res) {
    return 0;
}



module.exports = {getAllPosts, getAllfollowers, addFollower, addPost, unfollowPost, unfollowUser};
