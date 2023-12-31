const User = require('../models/userModel')
const jwt = require('jsonwebtoken');
const asyncHandler = require("express-async-handler");
/*Validar el usuario en la BD*/
const authMiddleware=asyncHandler(async(req,res,next) =>{
    let token;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token=req.headers.authorization.split(" ")[1];
        try{
            if(token){
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const user = await User.findById(decoded?.id);
                req.user = user;
                next();
            }

        }catch (error){
            res.status(401).json({ message: 'El token ha expirado, por favor entre de nuevo' });
        }
    }else{
        res.status(401).json({ message: "No hay un token" });    
    }
})
/*Validar el rol del usuario*/
const isAdmin = asyncHandler(async(req, res, next)=>{
    const{email} = req.user;
    const adminUser = await User.findOne({email});
    if(adminUser.role !=="admin"){
        throw new Error("No eres admin");
    }else{
        next();
    }
});
module.exports={authMiddleware, isAdmin};