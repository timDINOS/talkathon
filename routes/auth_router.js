const router  = require('express').Router()
const login = 0
const register = 0
const changedPass = 0
const logout = 0

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