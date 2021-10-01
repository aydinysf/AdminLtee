const db=require('../../database_method');

exports.getDevice =(req,res,next)=>{
    db.con.connect((err)=>{
        var sql="Select * from tbldevices";
        db.con.query(sql,(err,result,fields)=>{
            console.log(result);
            res.render('./cihazlar',{result});
        });
        db.con.end;
    })
}

exports.postDevice = (req,res,next)=>{
    const device=new Device(req.body.)
}