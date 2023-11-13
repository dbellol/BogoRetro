import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bCategoryService from "./bcategoryService";
export const getCategories= createAsyncThunk('blogCategory/get-categories', async(thunkAPI)=>{
    try{
        return await bCategoryService.getBlogCategories();

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
        });;
    },
});
export const { resetBCategoryState } = bCategorySlice.actions;
export default bCategorySlice.reducer;