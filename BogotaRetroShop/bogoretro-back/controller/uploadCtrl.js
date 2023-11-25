const asyncHandler=require('express-async-handler');
const {cloudinaryUploadImg, cloudinaryDeleteImg} = require('../utils/cloudinary');
const fs = require('fs');
const uploadImage = asyncHandler(async (req,res)=>{
    try{
        const uploader=(path)=>cloudinaryUploadImg(path,"images");
        const urls=[];
        const files = req.files;
        console.log(req.files);
        for(const file of files){
            const{path}=file;
            const newpath = await uploader(path);
            console.log(newpath);
            urls.push(newpath);
            fs.unlinkSync(path);
        }
        const image =urls.map((file)=>{
            return file;
        })
        res.json(image);
    }catch(error){
        throw new Error(error);
    }
});

/*Borrar imagen*/
const deleteImages=asyncHandler(async(req,res)=>{
    const{id}= req.params;
    try{
        const deleted=cloudinaryDeleteImg(id,"images");
        res.json({message:"Borrado"});
    }catch(error){
        throw new Error(error);
    }
});

module.exports={
    uploadImage, deleteImages
}