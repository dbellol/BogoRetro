const express = require('express');
const { createProduct, getProduct, getAllProduct, updateProduct, deleteProduct, addToWishList, rating, uploadImages, deleteImg } = require('../controller/productCtrl');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const { uploadPhoto, productImgResize } = require('../middlewares/uploadImage');
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createProduct);
router.put('/upload/:id', authMiddleware,isAdmin,uploadPhoto.array("images",10), productImgResize,uploadImages),
router.get('/:id', getProduct);
router.put('/wishlist', authMiddleware, addToWishList);
router.put('/rating', authMiddleware, rating);

router.put('/:id', authMiddleware, isAdmin, updateProduct);
router.delete('/:id', authMiddleware, isAdmin, deleteProduct);
router.delete('/delete-img/:id', authMiddleware, isAdmin, deleteImg);

router.get('/', getAllProduct);
module.exports=router;

