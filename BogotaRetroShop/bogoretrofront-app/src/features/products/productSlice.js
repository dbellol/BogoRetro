import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {productService} from './productService'
export const getAllProducts = createAsyncThunk('product/get', async(thunkAPI)=>{
    try{
        return await productService.getProducts();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const getAProduct = createAsyncThunk('product/getAProduct', async(id, thunkAPI)=>{
    try{
        return await productService.getSingleProduct(id);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const addToWishlist = createAsyncThunk('product/wishlist', async(prodID, thunkAPI)=>{
    try{
        return await productService.addToWishList(prodID);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
const productState={
    product:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
    wishlistUpdateStatus: 'idle',
}

export const productSlice=createSlice({
    name:'product',
    initialState:productState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getAllProducts.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.product=action.payload;
        }).addCase(getAllProducts.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(addToWishlist.pending,(state)=>{
            state.isLoading=true;
        }).addCase(addToWishlist.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.addToWishlist=action.payload;
            state.wishlistUpdateStatus = 'success';
            state.message='Producto añadido a la wishlist'
        }).addCase(addToWishlist.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(getAProduct.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getAProduct.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.singleproduct = action.payload;
            state.message='Producto traido satisfactoriamente'
        }).addCase(getAProduct.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        });
    }

})

export default productSlice.reducer;