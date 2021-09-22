const express = require('express');

const {indexView,birimtanimlamaView,cihazModelleriGrubuView,numunelerView,kitmetodlariView,kullaniciTipiView,cihazlarView_post, kurumlarView_post, kitlerView_post, programlarView_post, analitlerView_post, userView_post,programlarView,analitlerView,deviceView,kurumlarView,cihazlarView,kitlerView, userView} = require('../controllers/homeController');
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
router.get('/kullaniciTipi',kullaniciTipiView);
router.get("/kitmetodlari",kitmetodlariView);
router.get("/numuneler",numunelerView);
router.get("/cihazmodellerigrubu",cihazModelleriGrubuView);
router.get("/birimtanimlama",birimtanimlamaView);

module.exports = {
    routes: router
}