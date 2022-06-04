
const { rejects } = require("assert");
const axios = require("axios");
const session = require("../server");
const bcrypt = require('bcrypt');





let hashPassword = (password, callback) => {
    bcrypt.genSalt(10, function(err, salt) {
        if (err != null) return callback(err);
    });

    bcrypt.hash(password, salt, function(err, hash) {
        return callback(err, hash);
    });
}

let checkPasswords = (storedPassword, typedPassword, callback) => {
    bcrypt.compare(storedPassword, typedPassword, function(err, matches) {
        if (!err) {
            return callback(null, matches);
        }
        return callback(err);
    });
}

let login = (req, res) => {
    let givenPassword;
    axios({
        method: 'get',
        url: '', 
        data: {
            query: `
                query SelectUser {
                    user(username: $res.body.username) {
                        password
                    }
                }
            ` 
        }
    }).then((result) => {
        givenPassword = result.data
        hashPassword(givenPassword);
    }).catch(err => {
        rejects(err);
    });

    if (!checkPasswords(givenPassword, res.body.password)) {
        
    }
    else {
        session = req.session;
        session.user = req.body.username;
        res.send(req.body.username + "Successfully logged in!");
    }
}


modules.export = login;