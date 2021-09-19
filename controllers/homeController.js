

const indexView = (req, res, next) => {
    
    res.render('home');        

}

const deviceView=(req,res,next)=>{
    res.render("devices");
}
const kurumlarView=(req,res,next)=>{
    res.render("kurumlar");
}
const cihazlarView=(req,res,next)=>{
    res.render("cihazlar");
}
const kitlerView=(req,res,next)=>{
    res.render("kitler");
}
const programlarView=(req,res,next)=>{
    res.render("programlar");
}

const analitlerView=(req,res,next)=>{
    res.render("analitler");
}



module.exports = {
    indexView,
    deviceView,
    kurumlarView,
    cihazlarView,
    kitlerView,
    programlarView,
    analitlerView,



}