import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { userService } from './userService';
import {toast} from 'react-toastify';

export const registerUser = createAsyncThunk('auth/register', async(userData, thunkAPI)=>{
    try{
        return await userService.register(userData);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const loginUser = createAsyncThunk('auth/login', async(userData, thunkAPI) => {
    try {
        return await userService.login(userData);
    } catch (error) {
        const errorInfo = {
            message: error.message,
            // Incluye cualquier otra propiedad del error que necesites
        };
        return thunkAPI.rejectWithValue(errorInfo);
    }
});
export const getUserProductWishlist = createAsyncThunk('user/wishlist', async( thunkAPI)=>{
    try{
        return await userService.getUserWishlist();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const addProdToCart = createAsyncThunk('user/car/add', async( carData, thunkAPI)=>{
    try{
        return await userService.addToCar(carData);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const getUserCart = createAsyncThunk('user/car/get', async( carData, thunkAPI)=>{
    try{
        return await userService.getCar();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const deleteCartProduct = createAsyncThunk('user/car/product/delete', async(cartItemId, thunkAPI) => {
    try {
        return await userService.removeProductFromCart(cartItemId);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
const getCustomerfromLocalStorage = localStorage.getItem('customer')
    ? JSON.parse(localStorage.getItem('customer')):
    null;
const initialState={
    user:getCustomerfromLocalStorage,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
    productUpdateStatus: 'idle',
}

export const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        clearCartState: (state) => {
        state.cartUpdateStatus = 'idle';
    },},
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending,(state)=>{
            state.isLoading=true;
        }).addCase(registerUser.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdUser=action.payload;
            if(state.isSuccess===true){
                toast.info("Usuario creado exitosamente");
            }
        }).addCase(registerUser.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.error);
            }
        }).addCase(loginUser.pending,(state)=>{
            state.isLoading=true;
        }).addCase(loginUser.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.user=action.payload;
            if(state.isSuccess===true){
                localStorage.setItem('token', action.payload.token);
            }
        }).addCase(loginUser.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.error);
            }
        }).addCase(getUserProductWishlist.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getUserProductWishlist.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.wishlist=action.payload;
        }).addCase(getUserProductWishlist.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(addProdToCart.pending,(state)=>{
            state.isLoading=true;
        }).addCase(addProdToCart.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.cartProduct=action.payload;
            state.cartUpdateStatus = 'success';
            if(state.isSuccess){
                toast.success('Producto añadido al carrito')
            }
        }).addCase(addProdToCart.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.cartUpdateStatus = 'failed';
            state.message=action.error;
        }).addCase(getUserCart.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getUserCart.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.cartProducts=action.payload;
        }).addCase(getUserCart.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(deleteCartProduct.pending,(state)=>{
            state.isLoading=true;
        }).addCase(deleteCartProduct.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.deletedCartProduct=action.payload;
            if(state.isSuccess){
                toast.success('Producto eliminado del carrito de forma exitosa')
            }
        }).addCase(deleteCartProduct.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isSuccess==false){
                toast.error('Algo salió mal y el producto no fue eliminado del carrito de forma exitosa')
            }
        });
    }

})

export default userSlice.reducer;