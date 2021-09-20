const express = require('express');
const router = express.Router();
const {loginView}  = require('../controllers/authController');


router.get("/login",loginView);



module.exports = {
    routes: router
}