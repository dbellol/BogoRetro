const express = require('express');
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeTheBlog, dislikeTheBlog, uploadImages } = require('../controller/blogCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { blogImgResize, uploadPhoto } = require('../middlewares/uploadImage');
const router = express.Router();

router.post('/',authMiddleware, isAdmin, createBlog);
router.put('/upload/:id', authMiddleware,isAdmin,uploadPhoto.array("images",2), blogImgResize,uploadImages);
router.put("/likes", authMiddleware, likeTheBlog);
router.put("/dislikes", authMiddleware, dislikeTheBlog);
router.put('/:id',authMiddleware, isAdmin, updateBlog);
router.get('/:id', getBlog);
router.get('/', getAllBlogs);
router.delete('/:id', authMiddleware, isAdmin, deleteBlog);
module.exports=router;