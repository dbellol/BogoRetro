const express = require('express');
const { createCategory, updateCategory, deleteCategory, getCategory, getallCategory, addToWishList } = require('../controller/productCategoryCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createCategory);
router.put('/:id', authMiddleware, isAdmin, updateCategory);
router.put('/wishlist',authMiddleware,addToWishList)
router.delete('/:id', authMiddleware, isAdmin, deleteCategory);
router.get('/:id',getCategory);
router.get('/',getallCategory);
module.exports=router;
