const router  = require('express').Router()
const login = require('../user_authentication/login');
const register = require('../user_authentication/register');
const changedPass = require('../user_authentication/changedPassword');
const logout = require('../user_authentication/logout');

router.post('/register', register);

router.get('/register', (req, res) => {
    res.redirect("/register");
});

router.post('/login', login);

router.get('/login', (req, res) => {
    res.redirect("/login");
});

router.post('/changePassword', changedPass);

router.get('/changePassword', (req, res) => {
    res.redirect("/changePassword");
});

router.delete('/login', logout);

router.get('/profile', (req, res) => {
    res.redirect("/profile");
});

module.exports = router