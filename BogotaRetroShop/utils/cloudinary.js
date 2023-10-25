const cloudinary = require("cloudinary");
/*Configuracion de cloudinary (donde se almacenaran las imagenes)*/
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET_KEY,
});
/*Carga de imagenes a cloudinary*/
const cloudinaryUploadImg = async(fileToUploads)=>{
    return new Promise((resolve)=>{
        cloudinary.uploader.upload(fileToUploads, (result)=>{
            resolve({
                url:result.secure_url,
            },{
                resource_type: "auto",
            }
            )
        });
    });
};
module.exports={cloudinaryUploadImg}