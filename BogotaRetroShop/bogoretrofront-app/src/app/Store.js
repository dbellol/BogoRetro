import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import productReducer from '../features/products/productSlice'
import blogReducer from '../features/blogs/blogSlice'
export const store = configureStore({
    reducer:{
        user:userReducer,
        product: productReducer,
        blog: blogReducer,
    },
})