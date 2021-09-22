var path=require('path');
const mysql= require("mysql");

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"biyomednew"
});


const indexView = (req, res, next) => {
    
    res.render('home');        

}

const deviceView=(req,res,next)=>{
    res.render("devices");
}


/////////////////////////////////////////////////////
const kurumlarView=(req,res,next)=>{
    res.render("kurumlar");
}

const kurumlarView_post=(req,res,next)=>{
    let akt=1;
    res.render("kurumlar");
    console.log("mysql connected!");
    if(req.body.aktif=='on'){
        akt=1;
    }
    else{
        akt=0;
    }
    var sql = "INSERT INTO tblCorporations (corpName,corpAddress,corpConsignmentAddress,corpIsActive) VALUES ?";
    var values=[[req.body.kurum, req.body.adres,req.body.sevk,akt]];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
}

////////////////////////////////

const cihazlarView=(req,res,next)=>{
    res.render("cihazlar");
}
const cihazlarView_post=(req,res,next)=>{
    res.render("cihazlar");
    console.log("mysql connected!");
    var sql = "INSERT INTO tblDevices (deviceName) VALUES ?";
    var values=[[req.body.cihaz]];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
}


/////////////////////

const kitlerView=(req,res,next)=>{
    res.render("kitler");
}


const kitlerView_post=(req,res,next)=>{
    res.render("kitler");
    console.log("mysql connected!");
    var sql = "INSERT INTO tblKits (kitName) VALUES ?";
    var values=[[req.body.kit]];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
}



///////////////////////////////////////////
const programlarView=(req,res,next)=>{
    res.render("programlar");
}


const programlarView_post=(req,res,next)=>{
    res.render("programlar");
    console.log("mysql connected!");
    var sql = "INSERT INTO tblPrograms (programName,programCode) VALUES ?";
    var values=[[req.body.program,req.body.kod]];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
}

const analitlerView=(req,res,next)=>{
    res.render("analitler");
}

/////////////////////////////////////////////////

const analitlerView_post=(req,res,next)=>{
    res.render("analitler");
    console.log("mysql connected!");
    var sql = "INSERT INTO tblAnalyte (analyteName) VALUES ?";
    var values=[[req.body.analit]];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
}


////////////////////////////////////////////////

const userView=(req,res,next)=>{
    res.render("users");
}
const userView_post=(req,res,next)=>{
    let akt;
    res.render("users");
    console.log("mysql connected!");
    if(req.body.aktif=='on'){
        akt=1;
    }
    else{
        akt=0;
    }
    var sql = "INSERT INTO tblUsers (userCode,userEmail,userPassword,typeCode,userActive,castLogin,registerDate) VALUES ?";
    var values=[[,req.body.eposta, req.body.parola,req.body.kullanıcı,akt,,,]];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
}




module.exports = {
    indexView,
    deviceView,
    kurumlarView,
    cihazlarView,
    kitlerView,
    programlarView,
    analitlerView,
    userView,
    cihazlarView_post,
    userView_post,
    programlarView_post,
    kitlerView_post,
    analitlerView_post,
    kurumlarView_post







}