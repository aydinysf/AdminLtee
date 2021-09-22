const express = require('express');

const {indexView,cihazlarView_post, kurumlarView_post, kitlerView_post, programlarView_post, analitlerView_post, userView_post,programlarView,analitlerView,deviceView,kurumlarView,cihazlarView,kitlerView, userView} = require('../controllers/homeController');
const router = express.Router();


router.get('/', indexView);
router.get('/devices',deviceView)
router.get('/kurumlar',kurumlarView);
router.get('/cihazlar',cihazlarView);
router.get('/kitler',kitlerView);
router.get('/programlar',programlarView);
router.get('/analitler',analitlerView);
router.get("/users",userView);
router.post('/cihazlar',cihazlarView_post);
router.post('/kurumlar',kurumlarView_post);
router.post('/kitler',kitlerView_post);
router.post('/programlar',programlarView_post);
router.post('/analitler',analitlerView_post);
router.post('/users',userView_post);

module.exports = {
    routes: router
}