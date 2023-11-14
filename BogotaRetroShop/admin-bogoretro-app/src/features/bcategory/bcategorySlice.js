import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bCategoryService from "./bcategoryService";
export const getCategories= createAsyncThunk('blogCategory/get-categories', async(thunkAPI)=>{
    try{
        return await bCategoryService.getBlogCategories();

    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const getABlogCategory= createAsyncThunk('blogCategory/get-product-category', async(id, thunkAPI)=>{
    try{
        return await bCategoryService.getBlogCategory(id);

    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const createBlogCategory= createAsyncThunk('blogCategory/create-category', async(bcatData, thunkAPI)=>{
    try{
        return await bCategoryService.createBlogCategory(bcatData);

    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const updateABlogCategory= createAsyncThunk('productCategory/update-category', async(blogcategoryData, thunkAPI)=>{
    try{
        return await bCategoryService.updateBlogCategory(blogcategoryData);

    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const deleteABlogCategory= createAsyncThunk('productCategory/delete-category', async(id, thunkAPI)=>{
    try{
        return await bCategoryService.deleteBlogCategory(id);

    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
const initialState={
    bCategories:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}
export const bCategorySlice = createSlice({
    name: "bCategories",
    initialState,
    reducers: {resetBCategoryState: () => initialState},
    extraReducers:(builder)=>{
        builder.addCase(getCategories.pending, (state)=>{
            state.isLoading=true;
        }).addCase(getCategories.fulfilled,(state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.bCategories=action.payload;
        }).addCase(getCategories.rejected,(state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(createBlogCategory.pending, (state)=>{
            state.isLoading=true;
        }).addCase(createBlogCategory.fulfilled,(state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdBlogCategory=action.payload;
        }).addCase(createBlogCategory.rejected,(state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(getABlogCategory.pending, (state)=>{
            state.isLoading=true;
        }).addCase(getABlogCategory.fulfilled,(state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.bcategoryName=action.payload;
        }).addCase(getABlogCategory.rejected,(state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(updateABlogCategory.pending, (state)=>{
            state.isLoading=true;
        }).addCase(updateABlogCategory.fulfilled,(state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.updatedBlogCategory=action.payload;
        }).addCase(updateABlogCategory.rejected,(state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(deleteABlogCategory.pending, (state)=>{
            state.isLoading=true;
        }).addCase(deleteABlogCategory.fulfilled,(state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.deletedBlogCategory=action.payload;
        }).addCase(deleteABlogCategory.rejected,(state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        });
    },
});
export const { resetBCategoryState } = bCategorySlice.actions;
export default bCategorySlice.reducer;