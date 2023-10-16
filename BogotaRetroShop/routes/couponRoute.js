const express = require('express');
const { createCoupon, getAllCoupon, updateAllCoupon, deleteCoupon,  } = require('../controller/couponCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createCoupon);
router.get('/', authMiddleware, isAdmin,getAllCoupon);
router.put('/:id', authMiddleware, isAdmin,updateAllCoupon);
router.delete('/:id', authMiddleware, isAdmin,deleteCoupon);


module.exports=router;