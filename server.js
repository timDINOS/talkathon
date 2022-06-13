const express = require('express');
const app = express();
const cookies = require('cookie-parser');
const bodyParser = require('body-parser');
const sessions = require('express-session');
const login_router = require('./routes/auth_router');
const profile_router = require('./routes/profile_router');
//router for 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json());

var session;

app.use(cookies());

app.use(sessions({
    secret: 'mySecretKey',
    saveUninitialized: true,
    resave: false,
    cookie: {secure: true}
}));

app.get('/', (req, res) => {
    res.sendFile("homepage.html");
});

app.use('/auth_router', login_router);

app.use('/profile', profile_router);


modules.export = session;



