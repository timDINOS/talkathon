
const { rejects } = require("assert");
const axios = require("axios");
const session = require("../server");

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

    }).catch(err => {
        reject(err);
    });

    if (givenPassword != req.body.password) {
        
    }
    else {
        session = req.session;
        session.user = req.body.username;
        res.send(req.body.username + "Successfully logged in!");
    }
}


modules.export = login;