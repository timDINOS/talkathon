
const { rejects } = require("assert");
const axios = require("axios");


let login = (username, password) => {
    axios({
        method: 'get',
        url: '', 
        data: {
            query: `
                query SelectUser {
                    user(username: $username) {
                        password
                    }
                }
            ` 
        }
    }).then((result) => {
        if (result == null) {
            Promise.reject(new Error('Error. Username is invalid')).then(resolved, rejected)
        }
        
    });
}


modules.export = login;