const express = require('express');
const app = express();
const cookies = require('cookie-parser');
const sessions = require('express-session');
const login_router = require('./routes/auth_router');
//router for 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

var session;

app.use(cookies());

app.use(sessions());

app.get('/', (req, res) => {
    res.sendFile("homepage.html");
});

app.use('/routes', login_router);



modules.export = session;



