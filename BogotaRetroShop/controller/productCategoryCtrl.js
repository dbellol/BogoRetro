const Category = require('../models/productCategoryModel');
const asyncHandler=require('express-async-handler');
const validateMongoId = require("../utils/validateMongodbId");
/*Crear categoria de productos*/
const createCategory=asyncHandler(async(req,res)=>{
    try{
        const newCategory=await Category.create(req.body);
        res.json(newCategory);
    }catch(error){
        throw new Error(error);
    }
});
/*Modificar categoria de productos*/
const updateCategory=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoId(id);
    try{
        const updateCategory=await Category.findByIdAndUpdate(id, req.body,{
            new:true,
        });
        res.json(updateCategory);
    }catch(error){
        throw new Error(error);
    }
});
/*Borrar categoria de productos*/
const deleteCategory=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoId(id);
    try{
        const deleteCategory=await Category.findByIdAndDelete(id);
        res.json(deleteCategory);
    }catch(error){
        throw new Error(error);
    }
});
/*Ver categoria de productos por id*/
const getCategory=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoId(id);
    try{
        const getCategory=await Category.findById(id);
        res.json(getCategory);
    }catch(error){
        throw new Error(error);
    }
});
/*Ver categorias de productos sin id*/
const getallCategory=asyncHandler(async(req,res)=>{
    try{
        const getAllCategory=await Category.find();
        res.json(getAllCategory);
    }catch(error){
        throw new Error(error);
    }
});


module.exports={createCategory,updateCategory, deleteCategory, getCategory,getallCategory};