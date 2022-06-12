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




module.exports = {getAllPosts, getAllfollowers};
