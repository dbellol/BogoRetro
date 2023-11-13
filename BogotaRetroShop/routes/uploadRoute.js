const express = require('express');
const { uploadImage, deleteImages } = require('../controller/uploadCtrl');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const { uploadPhoto, productImgResize } = require('../middlewares/uploadImage');
const router = express.Router();

router.post('/', authMiddleware, isAdmin, uploadPhoto.array("image",10), productImgResize,uploadImage),
router.delete('/delete-img/:id', authMiddleware, isAdmin, deleteImages);
module.exports=router;
