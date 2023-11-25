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
const getCustomerfromLocalStorage = localStorage.getItem('customer')
    ? JSON.parse(localStorage.getItem('customer')):
    null;
const initialState={
    user:getCustomerfromLocalStorage,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{},
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
                toast.info("Usuario logueado exitosamente");
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
        });
    }

})

export default userSlice.reducer;