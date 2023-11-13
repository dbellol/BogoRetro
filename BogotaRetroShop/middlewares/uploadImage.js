const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

/*Donde guardar las imagenes*/
const storage=multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, path.join(__dirname,"../public/images"));
    },
    filename: function (req, file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*1e9);
        cb(null, file.fieldname+"-"+uniqueSuffix+".jpeg");
    },
});
/*Filtro que solo acepta las imagenes en JPEG*/
const multerFilter = (req, file, cb)=>{
    if(file.mimetype.startsWith("image")){
        cb(null, true);
    }else{
        cb({
            message:"Este rormato de archivo no es soportado",
        }, false);
    };
};
/*Cargar foto*/
const uploadPhoto = multer({
    storage: storage,
    fileFilter: multerFilter,
    limits: {
        fileSize: 2000000
    },
});

/*Recalcular el tamaño de la imagen del producto*/
const productImgResize = async (req, res, next) => {
    console.log(req.files)
    if (!req.files) return next();

    await Promise.all(
        req.files.map(async(file)=>{
            await sharp(file.path).resize(300,300).toFormat('jpeg').jpeg({quality:90}).toFile(`public/images/products/${file.filename}`);
            fs.unlinkSync(`public/images/products/${file.filename}`);
        })
        );
    console.log(req.files)
    next();
}

/*Recalcular el tamaño de la imagen del blog*/
const blogImgResize=async(req, res, next)=>{
    if(!req.files) return next();
    await Promise.all(
        req.files.map(async(file)=>{
            await sharp(file.path).resize(300,300).toFormat('jpeg').jpeg({quality:90}).toFile(`public/images/blogs/${file.filename}`);
        })
    );
    next();
}
module.exports={uploadPhoto, productImgResize, blogImgResize};