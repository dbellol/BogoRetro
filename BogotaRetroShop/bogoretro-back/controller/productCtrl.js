const Product = require("../models/productModel");
const asyncHandler=require('express-async-handler');
const slugify=require('slugify');
const User = require("../models/userModel");
const validateMongoId = require("../utils/validateMongodbId");
/*Crear producto*/
const createProduct=asyncHandler(async(req,res)=>{
    try{
        if(req.body.title){
            req.body.slug=slugify(req.body.title);
        };
        const newProduct=await Product.create(req.body);
        res.json(newProduct);
    }catch(error){
        throw new Error(error);
    }
});
/*Modificar producto*/
const updateProduct=asyncHandler(async(req,res)=>{
    const{id} = req.params;
    try{
        if(req.body.title){
            req.body.slug=slugify(req.body.title);
        };
        const updateProduct=await Product.findOneAndUpdate({_id:id},req.body,{
            new:true,
        });
        res.json(updateProduct);
    }catch(error){
        throw new Error(error);
    }
});
/*Borrar producto*/
const deleteProduct=asyncHandler(async(req,res)=>{
    const{id} = req.params;
    try{
        const deleteProduct=await Product.findOneAndDelete(id);
        res.json(deleteProduct);
    }catch(error){
        throw new Error(error);
    }
});
/*Tener todos los productos por ID*/
const getProduct = asyncHandler(async(req,res)=>{
    const{id}=req.params;
    try{
        const findProduct=await Product.findById(id).populate('color');
        res.json(findProduct);
    }catch(error){
        throw new Error(error);
    }
});
/*Tener todos los productos sin ID*/
const getAllProduct = asyncHandler(async(req, res)=>{
    try{
        //Filtrando
        const queryObj = {...req.query};
        const excludeFields=["page","sort","limit","fields"];
        excludeFields.forEach((el)=>delete queryObj[el]);
        console.log(queryObj);
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match)=> `$${match}`);

        let query = Product.find(JSON.parse(queryStr));

        //Sorting
        if(req.query.sort){
            const sortBy=req.query.sort.split(',').join(" ");
            query=query.sort(sortBy);
        }else{
            query=query.sort("-createdAt");

        }
        //limiting the fields
        if(req.query.fields){
            const fields=req.query.fields.split(',').join(" ");
            query=query.select(fields);
        }else{
            query=query.select("-__v");

        }
        //Pagination
        const page=req.query.page;
        const limit=req.query.limit;
        const skip = (page -1)*limit;
        query = query.skip(skip).limit(limit);
        if(req.query.page){
            const productCount=await Product.countDocuments();
            if(skip>=productCount) throw new Error("Esta pagina no existe");
        }
        console.log(page,limit,skip);
        const product = await query;
        res.json(product);
    }catch(error){
        throw new Error(error);
    }
});
/*Añadir a lista de deseos*/
const addToWishList = asyncHandler(async(req,res)=>{
    const {_id} = req.user;
    const {prodId} = req.body;
    try{
        const user = await User.findById(_id);
        const alreadyAdded= user.wishlist.find((id)=>id.toString()===prodId);
        if(alreadyAdded){
            let user = await User.findByIdAndUpdate(_id, {
                $pull:{wishlist: prodId},
            },{
                new:true,
            });
            res.json(user);
        }else{
            let user = await User.findByIdAndUpdate(_id, {
                $push:{wishlist: prodId},
            },{
                new:true,
            });
            res.json(user);

        }
    }catch(error){
        throw new Error(error);
    }
});
/*Calificar*/
const rating = asyncHandler(async(req,res)=>{
    const{_id} = req.user;
    const{star, prodId, comment}=req.body;
    try{
        /*Producto con comentarios*/
        const product = await Product.findById(prodId);
        let alreadyRated = product.ratings.find((userId)=>userId.postedby.toString()===_id.toString());
        if(alreadyRated){
            const updateRating  = await Product.updateOne({
                ratings:{
                    $elemMatch: alreadyRated
                }},{
                    $set:{
                        "ratings.$.star":star, "ratings.$.comment":comment
                    },
                },{
                    new:true,
                }
            );
        }else{
            /*Producto con puntuaciones*/
            const rateProduct = await Product.findByIdAndUpdate(prodId,{
                $push:{
                    ratings:{
                        star:star,
                        comment:comment,
                        postedby: _id,
                    },
                },
            },{
                new:true,
            }
            );
        }
        /*Tener todas las puntuaciones del producto*/
        const getAllRatings = await Product.findById(prodId);
        let totalRating = getAllRatings.ratings.length;
        let ratingSum = getAllRatings.ratings.map((item)=>item.star).reduce((prev,curr)=>prev+curr,0);
        let actualRaiting = Math.round(ratingSum/totalRating);
        let finalProduct = await Product.findByIdAndUpdate(prodId,{
            totalrating: actualRaiting,
        }, 
        {new:true,}
        );
        res.json(finalProduct);
    }catch (error){
        throw new Error(error);
    }
});
/*Cargar imagen del producto*/

module.exports={createProduct, getProduct, getAllProduct, updateProduct, deleteProduct, addToWishList, rating};