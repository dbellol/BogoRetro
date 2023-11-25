const Blog = require('../models/blogModel');
const User = require('../models/userModel');
const asyncHandler=require('express-async-handler');
const validateMongoId = require("../utils/validateMongodbId");
const {cloudinaryUploadImg} = require('../utils/cloudinary');
const fs = require('fs');

/*Crear blog*/
const createBlog = asyncHandler(async(req,res)=>{
    try{
        const newBlog = await Blog.create(req.body);
        res.json(newBlog);
    }catch(error){
        throw new Error(error);
    }
});
/*Modificar blog*/
const updateBlog = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id);
    try{
        const updateBlog = await Blog.findByIdAndUpdate(id,req.body, {
            new:true,
        });
        res.json(updateBlog);
    }catch(error){
        throw new Error(error);
    }
});
/*Tener un blog por id*/
const getBlog = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id);
    try{
        const getBlog=await Blog.findById(id).populate("likes").populate("disLikes");
        const updateViews=await Blog.findByIdAndUpdate(id,{
            $inc:{numViews:1},
        },{
            new:true
        }
    );
    res.json({ original: getBlog, updated: updateViews });
    }catch(error){
        throw new Error(error);
    }
});
/*Tener todos los blogs*/
const getAllBlogs = asyncHandler(async(req,res)=>{
    try{
        const getAllBlogsBlog = await Blog.find();
        res.json(getAllBlogsBlog);
    }catch(error){
        throw new Error(error);
    }
})
/*Borrar un blog*/
const deleteBlog = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id);
    try{
        const deleteBlog = await Blog.findByIdAndDelete(id);
        res.json(deleteBlog);
    }catch(error){
        throw new Error(error);
    }
});
/*Likear un blog*/
const likeTheBlog = asyncHandler(async (req, res) => {
 const {blogId} =req.body;
 validateMongoId(blogId);
 const blog = await Blog.findById(blogId);
 const loginUserId = req?.user?._id;
 const isLiked = blog?.isLiked;
 const alreadyDisliked = blog?.disLikes?.find((userId)=>userId?.toString()===loginUserId?.toString());
  if(alreadyDisliked){
    const blog = await Blog.findByIdAndUpdate(
      blogId,{
        $pull:{disLikes:loginUserId},
        isDisLiked:false
      },
      {new:true}
    );
    res.json(blog);
  }
  if(isLiked){
    const blog = await Blog.findByIdAndUpdate(
      blogId,{
        $pull:{likes:loginUserId},
        isLiked:false
      },
      {new:true}
    );
    res.json(blog);
  }else{
    const blog = await Blog.findByIdAndUpdate (blogId,{
      $push:{likes:loginUserId},
      isLiked:true
    },{ new:true}
    );
    res.json(blog);
  }
});
/*Dislikear un blog*/
const dislikeTheBlog = asyncHandler(async (req, res) => {
  const {blogId} =req.body;
  validateMongoId(blogId);
  const blog = await Blog.findById(blogId);
  const loginUserId = req?.user?._id;
  const isDisLiked = blog?.isDisLiked;
  const alreadyLiked = blog?.likes?.find((userId)=>userId?.toString()===loginUserId?.toString());
   if(alreadyLiked){
     const blog = await Blog.findByIdAndUpdate(
       blogId,{
         $pull:{likes:loginUserId},
         isLiked:false
       },
       {new:true}
     );
     res.json(blog);
   }
   if(isDisLiked){
     const blog = await Blog.findByIdAndUpdate(
       blogId,{
         $pull:{disLikes:loginUserId},
         isDisLiked:false
       },
       {new:true}
     );
     res.json(blog);
   }else{
     const blog = await Blog.findByIdAndUpdate (blogId,{
       $push:{disLikes:loginUserId},
       isDisLiked:true
     },{ new:true}
     );
     res.json(blog);
   }
 });
 /*Cargar imagenes*/
 const uploadImages=asyncHandler(async(req,res)=>{
  const{id}=req.params;
  validateMongoId(id);
  try{
      const uploader=(path)=>cloudinaryUploadImg(path,"images");
      const urls=[];
      for(const file of files){
          const{path}=file;
          const newpath = await uploader(path);
          console.log(newpath);
          urls.push(newpath);
          fs.unlinkSync(path);
      }
      const findBlog = await Blog.findByIdAndUpdate(id,{
          image:urls.map((file)=>{
              return file;
          }),
      },{
          new:true
      });
      res.json(findBlog);
  }catch(error){
      throw new Error(error);
  }
});
module.exports={createBlog,updateBlog,getBlog,getAllBlogs,deleteBlog,likeTheBlog,dislikeTheBlog, uploadImages};