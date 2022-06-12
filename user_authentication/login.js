
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
    var givenPassword;
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
        hashPassword(givenPassword, function(error, hash=null) {
            if (error) {
                return rejects(error);
            }
            return hash
        });
    }).catch(err => {
        rejects(err);
    });

    var errMatches = checkPasswords(givenPassword, res.body.password, function(error, matched=false) {
        if (error) {
            return rejects(error);
        }

        return matched;
    });
    if (errMatches) {
        session = req.session;
        session.user = req.body.username;
        res.send(req.body.username + "Successfully logged in!");
        res.redirect('/templates/homepage');
    }
}


modules.export = login;