const router  = require('express').Router()
const login = 0
const register = 0
const changedPass = 0
const logout = 0

router.post('/register', register);

router.post('/login', login);

router.post('/changePassword', changedPass);

router.delete('/login', logout);

module.exports = router