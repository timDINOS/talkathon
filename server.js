const express = require('express')
const app = express();
const login_router = require('./routes/auth_router');
//router for 

app.get('/', (req, res) => {
    res.sendFile("homepage.html");
});

app.use('/routes', login_router);






