const express = require('express');

const {indexView,programlarView,analitlerView,deviceView,kurumlarView,cihazlarView,kitlerView} = require('../controllers/homeController');
const router = express.Router();


router.get('/', indexView);
router.get('/devices',deviceView)
router.get('/kurumlar',kurumlarView);
router.get('/cihazlar',cihazlarView);
router.get('/kitler',kitlerView);
router.get('/programlar',programlarView);
router.get('/analitler',analitlerView);

module.exports = {
    routes: router
}