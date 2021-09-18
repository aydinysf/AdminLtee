const express = require('express');

const {indexView,deviceView,kurumlarView,cihazlarView,kitlerView} = require('../controllers/homeController');
const router = express.Router();


router.get('/', indexView);
router.get('/devices',deviceView)
router.get('/kurumlar',kurumlarView);
router.get('/cihazlar',cihazlarView);
router.get('/kitler',kitlerView);
module.exports = {
    routes: router
}