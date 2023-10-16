const User=require('../models/userModel');
const {generateToken}=require('../config/jwtToken');
const asyncHandler=require("express-async-handler");
const { validateMongoId } = require('../utils/validateMongodbId');
const {generateRefreshToken}=require('../config/refreshtoken');
const jwt=require('jsonwebtoken'); 
const { sendEmail } = require('./emailCtrol');
const crypto=require('crypto');
//Crear usuario
const createUser=asyncHandler(async(req,res)=>{
    const email=req.body.email;
    const findUser=await User.findOne({email:email});
    if(!findUser){
        //Crear un nuevo usuario
        const newUser= await User.create(req.body);
        res.json(newUser);
    }else{
       throw new Error('El usuario que desea crear ya existe');
    }
    
}
);

//Login a User
const loginUserCtrl=asyncHandler(async(req,res)=>{
    const {email, password} = req.body;
    //Verificar si un usuario existe o no
    const findUser=await User.findOne({email});
    if(findUser && (await findUser.isPasswordMatched(password))){
        const refreshToken=await generateRefreshToken(findUser?._id);
        const updateuser=await User.findByIdAndUpdate(findUser.id,{
            refreshToken: refreshToken,
            },{
                new:true
            }
        );
        res.cookie('refreshToken',refreshToken,{
            httpOnly:true,
            maxAge:72*60*60*1000,
        });
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        });
    }else{
        throw new Error("Contraseña o usuario invalido");
    }
});
//Handle refresh token 
const handleRefreshToken = asyncHandler(async(req,res)=>{
    const cookie = req.cookies;
    if(!cookie?.refreshToken) throw new Error ("No se recargó el token en las cookies");
    const refreshToken = cookie.refreshToken;
    console.log(refreshToken);
    const user = await User.findOne({refreshToken});
    if(!user) throw new Error("No se recargó el token presente en la base de datos o no hizo match");
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err,decoded)=>{
        if(err||user.id !== decoded.id){
            throw new Error("Hay algo mal con el token refresh");
        }
        const  accessToken = generateToken(user?._id)
        res.json({accessToken});
    });
});
//Logout function
const logout =asyncHandler(async(req, res)=>{
    const cookie = req.cookies;
    if(!cookie?.refreshToken) throw new Error ("No se recargó el token en las cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({refreshToken});
    if(!user){
        res.clearCookie('refreshToken', {
            httpOnly:true, 
            secure:true,
        });
        return res.sendStatus(204); //forbidden
    }
    await User.findOneAndUpdate(refreshToken,{
        refreshToken: "",
    });
    res.clearCookie("refreshToken", {
        httpOnly:true, 
        secure:true,
    });
    res.sendStatus(204); //forbidden
});
//Ver todos los usuarios
const getaUser = asyncHandler(async(req,res)=>{
    try{
        const getUsers = await User.find();
        res.json(getUsers);
    }catch (error){
        throw new Error(error);
    }
});

//Ver un solo  usuario
const getsUser = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id);
    try{
        const getsUser = await User.findById(id);
        res.json({
            getsUser,
        })
    }catch (error){
        throw new Error(error);
    }
});

//Borrar un usuario
const deletesUser = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id);

    try{
        const deletesUser = await User.findByIdAndDelete(id);
        res.json({
            deletesUser,
        })
    }catch (error){
        throw new Error(error);
    }
});
//Actualizar un usuario
const updatedaUser = asyncHandler(async(req, res)=>{
    const {id} = req.user;
    validateMongoId(id);
    try{
        const updatedaUser = await User.findByIdAndUpdate(id, {
            firstname:req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
        }, {
            new: true,
        }
        );
        res.json(updatedaUser);
    }catch(error){
        throw new Error(error);
    }
});
//Bloquear usuario
const blockUser=asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id);
    try{
        const block= await User.findByIdAndUpdate(id,{
            isBlocked:true,
        },{
            new:true,
        }
        );
        res.json(block);
    }catch(error){
        throw new Error(error);
    }
});
//Desbloquear usuario
const unblockUser=asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id);

    try{
        const unblock=await User.findByIdAndUpdate(id,{
            isBlocked:false,
        },{
            new:true,
        }
        );
        res.json({
            message: "Usuario desbloqueado",
        });
    }catch(error){
        throw new Error(error);
    }
});
const updatePassword = asyncHandler(async(req, res)=>{
    const {_id} = req.user;
    const {password} = req.body;
    validateMongoId(_id);
    const user = await User.findById(_id);
    if(password){
        user.password = password;
        const updatedPassword = await user.save();
        res.json(updatedPassword);
    }else{
        res.json(user);
    }
});
//Borrar todos los usuarios
/*const deleteaUser = asyncHandler(async(req,res)=>{
    try{
        const getUsers = await User.delete();
        res.json(deleteaUser);
    }catch (error){
        throw new Error(error);
    }
});*/
const forgotPasswordToken = asyncHandler(async(req,res)=>{
    const {email} =req.body;
    const user = await User.findOne({email});
    if(!user) throw new Error ("Usuario con este email no encontrado");
    try{
        const token = await user.createPasswordResetToken();
        await user.save();
        const resetURL = `Hola, sigue este link para reiniciar tu contraseña. Este link expirará en 10 minutos, contando desde ahora. <a href='http://localhost:5000/api/user/reset-password/${token}'>Click aqui</>`;
        const data = {
            to: email,
            subject: "Olvidaste tu constraseña link",
            text: "Hola usuario",
            html: resetURL,
        };
        sendEmail(data);
        res.json(token);
    }catch (error){ 
        throw new Error(error);
    }
});
const resetPassword = asyncHandler(async(req,res)=>{
    const {password}= req.body;
    const {token}=req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires:{$gt:Date.now()},
    });
    if(!user) throw new Error("El token expiro. Por favor intenta de nuevo más tarde");
    user.password=password;
    user.passwordResetToken=undefined;
    user.passwordResetExpires=undefined;
    await user.save();
    res.json(user);
})
module.exports={createUser, 
    loginUserCtrl, 
    getaUser, 
    getsUser, 
    deletesUser, 
    updatedaUser,
    blockUser,
    unblockUser,
    handleRefreshToken, 
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword
};