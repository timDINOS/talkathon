const bcrypt = require('bcrypt');
const axios = require('axios');
const { rejects } = require('assert');
const { runHttpQuery } = require('apollo-server-core');

const encrpytPassword = function(password, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        if (err != null) return callback(err);
    });

    bcrypt.hash(password, salt, function(err, hash) {
        return callback(err, hash);
    });
}

const isValidName = function (input) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (/\d/.test(input) || specialChars.test(input) || (input.match(/ /g) || []).length > 2) {
        return false;
    }
    return true;
}

const isValidUser = function(input) {
    if ((input.match(/ /g) || []).length > 0 || /\d/.test(input)) {
        return false;
    }
    axios({
        method: 'get',
        url: '',
        data: {
            query: `
                query{
                    fetchUser(uname: ${input}) {
                        username
                    }
                }
            `
        }
    }).then(results => {
        if (results.length != 0) {
            return false;
        }
    });
    return true;
}

const isValidEmail = function(input) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (input.search('@') == -1 || specialChars.test(input)) {
        return false;
    }
    return true;
}

const isValidPassword = function(password) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if ((password.match(/\d/g) || []).length == 0 || (password.match(specialChars) || []).length == 0 || (password.match(/[a-zA-Z]/g) || []).length == 0) {
        return false;
    }
    return true;
}


let addToDB = function(newUser) {
    axios({
        method: 'post',
        url: '',
        data: {
            query: `
                mutation{
                    CreateUser(inputUser: ${newUser}) {
                        inputUser
                    }
                }
            `
        }
    }).then((result) => {}).catch((err) => {rejects(err)});
}


let register = function(req, res) {
    if (req.body.name.length == 0 || req.body.email.length == 0 || req.body.username.length== 0 || req.body.password.length == 0 || req.body.password2.length == 0 || req.body.age == 0) {
        rejects();
    }
    if ((req.body.name.length < 7 && req.body.name.length > 20) || isValidName(req.body.name)) {
        rejects();
    }
    if (!isValidEmail(req.body.email)) {
        rejects();
    }
    if (!isValidPassword(req.body.password)) {
        rejects();
    }
    if (!isValidUser(req.body.username)) {
        rejects();
    }

    var encrpytedPassword = encrpytPassword(req.body.password, function(err=null, hash) {
        if (err) {
            return rejects(err);
        }
        return hash;
    });

    let nameSplit = req.body.name.split(" ");
    let newUser = {
        first_name: nameSplit[0],
        last_name: nameSplit[1],
        email: req.body.email,
        username: req.body.username,
        password: encrpytedPassword,
        age: req.body.age
    }

    addToDB(newUser);
    res.send(`${newUser.first_name} + 's account successfully created!`);
    res.redirect("/users/login/");
}



modules.export = register;