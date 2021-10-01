const db = require('./database_method');
const crypto = require("crypto");
const bodyParser = require('body-parser');

    var partials = {
        sidebar: './partials/sidebar',
        navbar: './partials/navbar',
        footer: './partials/footer',
        head: './partials/head'
    };

exports.getDevice = (req, res, next) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    db.con.connect((err) => {
        var sql = "Select * from tbldevices";
        db.con.query(sql, (err, dbrows, fields) => {
            if (err) {
                res.render('./error.html', { result: '', partials: partials });
            }
            else {
                res.render('./devices.html', { result: dbrows, partials: partials })
            }

        });
        db.con.end;
    });
}
exports.setDevice =(req,res,next) =>{
    db.con.connect((err)=>{
        const devicecode = crypto.randomBytes(16).toString("hex")
        var sql="INSERT INTO tbldevices(devicecode,devicename) VALUES('"+devicecode+"','"+req.body.devicename+"')";
        
        var postedFields=[devicecode,req.body.devicename];
        db.con.query(sql,(err,dbrows,fields)=>{
            if(err){
                console.log(err.toString());
                
                console.log("Device Code : "+devicecode+" - device name :"+req.body.devicename)
                //res.render('./error.html',{result:'',partials:partials});
            }
            else{
                res.render('./devices.html', { result: dbrows, partials: partials })

            }
        });
    });
    db.con.end;
}
exports.deleteDevice = (req,res,next)=>{
    db.con.connect((err)=>{

        var idDevice = [];
        idDevice.push(String(req.params.codedevice));
        var sql="Delete from tbldevices where devicecode=?";

        db.con.query(sql,idDevice,(err,dbrows,fields)=>{
            if(err){
                console.log(err.toString());
                
                //res.render('./error.html',{result:'',partials:partials});
            }
            else{
                //res.render('./devices.html', { result: dbrows, partials: partials })
               
            }
        });
    });
    db.con.end;
}