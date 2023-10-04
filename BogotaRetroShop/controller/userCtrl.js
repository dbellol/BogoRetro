const User=require('../models/userModel');
const {generateToken}=require('../config/jwtToken');
const asyncHandler=require("express-async-handler");
const { validateMongoId } = require('../utils/validateMongodbId');
const {generateRefreshToken}=require('../config/refreshtoken');
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
    res.json({user});
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

//Borrar todos los usuarios
/*const deleteaUser = asyncHandler(async(req,res)=>{
    try{
        const getUsers = await User.delete();
        res.json(deleteaUser);
    }catch (error){
        throw new Error(error);
    }
});*/
module.exports={createUser, 
    loginUserCtrl, 
    getaUser, 
    getsUser, 
    deletesUser, 
    updatedaUser,
    blockUser,
    unblockUser,
    handleRefreshToken
};