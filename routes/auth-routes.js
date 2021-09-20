const express = require('express');
const router = express.Router();
const {loginView,handleLogin,logOut}  = require('../controllers/authController');


router.get("/login",loginView);
router.post('/postlogin', handleLogin);
router.post('/logout', logOut);




module.exports = {
    routes: router
}