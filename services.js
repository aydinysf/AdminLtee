const db = require('./database_method');
const hotscripts = require('./utils/hotScripts');
const bodyParser = require('body-parser');
const crypto = require("crypto");
const cons = require('consolidate');

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
exports.setDevice = (req, res, next) => {
    db.con.connect((err) => {
        const devicecode = crypto.randomBytes(16).toString("hex");
        var sql = "INSERT INTO tbldevices(devicecode,devicename) VALUES('" + devicecode + "','" + req.body.devicename + "')";

        var postedFields = [devicecode, req.body.devicename];
        db.con.query(sql, (err, dbrows, fields) => {
            if (err) {
                console.log(err.toString());

                console.log("Device Code : " + devicecode + " - device name :" + req.body.devicename)
                //res.render('./error.html',{result:'',partials:partials});
            }
            else {
                // res.render('./devices.html', { result: dbrows, partials: partials })

            }
        });
    });
    db.con.end;
}
exports.deleteDevice = (req, res, next) => {
    db.con.connect((err) => {

        var idDevice = [];
        idDevice.push(String(req.params.codedevice));
        var sql = "Delete from tbldevices where devicecode=?";

        db.con.query(sql, idDevice, (err, dbrows, fields) => {
            if (err) {
                console.log('Hata:' + err.toString());

                //res.render('./error.html',{result:'',partials:partials});
            }
            else {
                //res.render('./devices.html', { result: dbrows, partials: partials })
            }
        });
    });
    db.con.end;
}
exports.getdeviceModel = (req, res, next) => {

    var idDevice = [];
    db.con.connect((err) => {

        idDevice.push(String(req.params.devicecode));
        console.log(String(req.params.devicecode));
        var sql = "SELECT dvc.devicename,mdl.modelname,mdl.devicecode,mdl.devicemodelcode FROM biyomedıtage.tbldevicemodels mdl left join tbldevices dvc on mdl.devicecode=dvc.devicecode where dvc.devicecode=?";

        db.con.query(sql, idDevice, (err, dbrows, fields) => {
            if (err) {
                console.log('Hata:' + err.toString());

                //res.render('./error.html',{result:'',partials:partials});
            }
            else {
                idDevice = dbrows;
                console.log(dbrows+" render edildi");
                res.render('./partials/model-modal.html', { deviceModelList: dbrows })
            }
        });
    });
    db.con.end;
    return idDevice;
}
exports.setDeviceModel = (req, res, next) => {

    console.log("Kaydet metoduna girdi");
    const modelcode = crypto.randomBytes(16).toString("hex");
    db.con.connect((err) => {
        var sql = "INSERT INTO tbldevicemodels(devicemodelcode,modelname,devicecode) VALUES('" + modelcode + "','" + req.body.modelname + "','" + req.body.devicecode + "')";
        // var postedFields=[modelcode,req.body.modelname,req.body.devicecode];
        console.log(req.body);
        console.log(sql);
        // db.con.query(sql,postedFields,(err,dbrows,fields)=>{
        db.con.query(sql, (err, dbrows, fields) => {

            if (err) {
                console.log("Kaydet Servisi Hata :" + err.toString());

                //res.render('./error.html',{result:'',partials:partials});
            }
            else {
                console.log("Kaydet Servisi Yapıldı");
                // res.render('./devices.html', { result: dbrows, partials: partials })

            }
        });
    });
    db.con.end;
}
exports.deleteModel = (req, res, next) => {
    db.con.connect((err) => {

        var idDevice = [];
        idDevice.push(String(req.params.modelid));
        var sql = "Delete from tbldevicemodels where devicemodelcode=?";

        db.con.query(sql, idDevice, (err, dbrows, fields) => {
            if (err) {
                console.log('Hata:' + err.toString());

                //res.render('./error.html',{result:'',partials:partials});
            }
            else {
                //res.render('./devices.html', { result: dbrows, partials: partials })
            }
        });
    });
    db.con.end;
}