const bcrypt = require('bcrypt');
const axios = require('axios');
const { rejects } = require('assert');

const encrpytPassword = function(password, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        if (err != null) return callback(err);
    });

    bcrypt.hash(password, salt, function(err, hash) {
        return callback(err, hash);
    });
}


var passwordValid = function(password) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return req.body.password.length > 0 && (password.match(/\d/g) || []).length > 0 || (password.match(specialChars) || []).length > 0 || (password.match(/[a-zA-Z]/g) || []).length > 0;
}

var changedPass = function(req, res) {
    if (!passwordValid(req.body.password)) {
        return rejects();
    }

    var encryptedPassword = encrpytPassword(req.body.password, function(err, hash=null) {
        if (err) rejects();
        return hash;
    });

    var givenId;

    axios({
        url: '',
        method: 'get',
        data: {
            query: `
                query {
                    fetchUser(uname: ${req.body.username}) {
                        id
                    }
                }
            `
        }
    }).then(result => {givenId = result.data.id}).catch(err => {rejects(err)});
    

    axios({
        url: '',
        method: 'put',
        data: {
            query: `
                mutation {
                    updateUser(givenId: ${givenId}, newInfo: ${newInfo}) {
                        newInfo
                    }
                }
            `
        }
    }).then().catch(err => {rejects(err)});

    res.send("Password changed successfully!");
    res.redirect('/profile');
}

modules.export = changedPass;