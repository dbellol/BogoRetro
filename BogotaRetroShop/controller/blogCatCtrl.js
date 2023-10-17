const Category = require('../models/blogCarModel');
const asyncHandler=require('express-async-handler');
const validateMongoId = require("../utils/validateMongodbId");
/*Crear categoria de blog*/
const createCategory=asyncHandler(async(req,res)=>{
    try{
        const newCategory=await Category.create(req.body);
        res.json(newCategory);
    }catch(error){
        throw new Error(error);
    }
});
/*Modificar categoria de blog*/
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
/*Borrar categoria de blog*/
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
/*Tener una categoria de blog*/
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
/*Tener todas las categorias de blog*/
const getallCategory=asyncHandler(async(req,res)=>{
    try{
        const getAllCategory=await Category.find();
        res.json(getAllCategory);
    }catch(error){
        throw new Error(error);
    }
});
module.exports={createCategory,updateCategory, deleteCategory, getCategory,getallCategory};