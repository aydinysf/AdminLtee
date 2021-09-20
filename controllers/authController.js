
const express = require("express");
const bodyParser = require("body-parser");


const app = express();


const loginView = async (req, res, next) => {
    try {
        res.render('login', {layout: 'loginlayout'});
    } catch (error) {
        console.log(error);
    }
}

/*
const loginView = async (req, res, next) => {
    try {
        res.render('login');
    } catch (error) {
        console.log(error);
    }
}


const handleLogin = (req, res, next) => {
    
    res.redirect('/');
}

const logOut = (req, res, next) => {
    
    res.redirect('/');
}
*/

module.exports = {
    loginView,

}