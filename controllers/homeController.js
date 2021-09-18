

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



module.exports = {
    indexView,
    deviceView,
    kurumlarView,
    cihazlarView,
    kitlerView


}