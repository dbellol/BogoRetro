const Enquiry = require('../models/enqModel');
const asyncHandler=require('express-async-handler');
const validateMongoId = require("../utils/validateMongodbId");
const User = require('../models/userModel');
/*Crear Enquiry*/
const createEnquiry=asyncHandler(async(req,res)=>{
    try{
        const newEnquiry=await Enquiry.create(req.body);
        res.json(newEnquiry);
    }catch(error){
        throw new Error(error);
    }
});
/*Modificar Enquiry*/
const updateEnquiry=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoId(id);
    try{
        const updateEnquiry=await Enquiry.findByIdAndUpdate(id, req.body,{
            new:true,
        });
        res.json(updateEnquiry);
    }catch(error){
        throw new Error(error);
    }
});
/*Borrar Enquiry*/
const deleteEnquiry=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoId(id);
    try{
        const deleteEnquiry=await Enquiry.findByIdAndDelete(id);
        res.json(deleteEnquiry);
    }catch(error){
        throw new Error(error);
    }
});
/*Tener un Enquiry por id*/
const getEnquiry=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoId(id);
    try{
        const getEnquiry=await Enquiry.findById(id);
        res.json(getEnquiry);
    }catch(error){
        throw new Error(error);
    }
});
/*Tener todos los Enquiry*/
const getallEnquiry=asyncHandler(async(req,res)=>{
    try{
        const getAllEnquiry=await Enquiry.find();
        res.json(getAllEnquiry);
    }catch(error){
        throw new Error(error);
    }
});

module.exports={createEnquiry,updateEnquiry, deleteEnquiry, getEnquiry,getallEnquiry};