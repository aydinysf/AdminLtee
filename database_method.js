var mysql = require('mysql');
var http=require('http');
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"biyomednew"
});
exports.devicelist1=function(){
  console.log('sonuca girdi1!');
    con.connect(function(err) {
      console.log('sonuca girdi2!');
        if (err) throw err;
        con.query("SELECT deviceName FROM tblDevices WHERE deviceId =1", function (err, result) {
          if (err) throw err;
          else{
              
              console.log(result);
          return result;}

        });
      });
}
