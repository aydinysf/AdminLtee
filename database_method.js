var mysql = require('mysql');
var http=require('http');
const { response } = require('express');
var con=mysql.createConnection({
  host:"localhost",
  user:"roaroa",
  password:"roaroa",
  database:"biyomedıtage"
});
con.connect();

exports.con=con;
