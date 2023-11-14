const Coupon = require('../models/couponModel');
const validateMongoId = require("../utils/validateMongodbId");
const asyncHandler = require('express-async-handler');
/*Crear cupón*/
const createCoupon = asyncHandler(async(req,res)=>{
    try{
        const newCoupon = await Coupon.create(req.body);
        res.json(newCoupon);

    }catch(error){
        throw new Error(error);
    }
});
/*Tener todos los cupones*/
const getAllCoupon = asyncHandler(async(req,res)=>{
    try{
        const getAllCoupon = await Coupon.find();
        res.json(getAllCoupon);

    }catch(error){
        throw new Error(error);
    }
});
/*Modificar los cupones por id*/
const updateAllCoupon = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id);
    try{
        const updateAllCoupon = await Coupon.findByIdAndUpdate(id,req.body,{
            new:true
        });
        res.json(updateAllCoupon);

    }catch(error){
        throw new Error(error);
    }
});
/*Borrar los cupones por id*/
const deleteCoupon = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id);
    try{
        const deleteAllCoupon = await Coupon.findByIdAndDelete(id);
        res.json(deleteAllCoupon);

    }catch(error){
        throw new Error(error);
    }
});
const getACoupon = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id);
    try{
        const getACoupons = await Coupon.findById(id);
        res.json(getAllCoupons);

    }catch(error){
        throw new Error(error);
    }
});
module.exports={ createCoupon, getAllCoupon, updateAllCoupon, deleteCoupon, getACoupon,

}