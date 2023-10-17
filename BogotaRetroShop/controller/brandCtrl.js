const Brand = require('../models/brandModel');
const asyncHandler=require('express-async-handler');
const validateMongoId = require("../utils/validateMongodbId");
const User = require('../models/userModel');
/*Crear brand*/
const createBrand=asyncHandler(async(req,res)=>{
    try{
        const newBrand=await Brand.create(req.body);
        res.json(newBrand);
    }catch(error){
        throw new Error(error);
    }
});
/*Modificar brand*/
const updateBrand=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoId(id);
    try{
        const updateBrand=await Brand.findByIdAndUpdate(id, req.body,{
            new:true,
        });
        res.json(updateBrand);
    }catch(error){
        throw new Error(error);
    }
});
/*Borrar brand*/
const deleteBrand=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoId(id);
    try{
        const deleteBrand=await Brand.findByIdAndDelete(id);
        res.json(deleteBrand);
    }catch(error){
        throw new Error(error);
    }
});
/*Tener un brand por id*/
const getBrand=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoId(id);
    try{
        const getBrand=await Brand.findById(id);
        res.json(getBrand);
    }catch(error){
        throw new Error(error);
    }
});
/*Tener todos los brand*/
const getallBrand=asyncHandler(async(req,res)=>{
    try{
        const getAllBrand=await Brand.find();
        res.json(getAllBrand);
    }catch(error){
        throw new Error(error);
    }
});

module.exports={createBrand,updateBrand, deleteBrand, getBrand,getallBrand};