import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import couponService from "./couponService";

export const getAllCoupons= createAsyncThunk('coupon/get-coupons', async(thunkAPI)=>{
    try{
        return await couponService.getAllCoupon();

    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const createCoupon= createAsyncThunk('coupon/create-coupons', async(couponData, thunkAPI)=>{
    try{
        return await couponService.createCoupons(couponData);

    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
const initialState={
    coupons:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}
export const couponSlice = createSlice({
    name: "coupons",
    initialState,
    reducers: { resetCouponState: () => initialState,},
    extraReducers:(builder)=>{
        builder.addCase(getAllCoupons.pending, (state)=>{
            state.isLoading=true;
        }).addCase(getAllCoupons.fulfilled,(state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.coupons=action.payload;
        }).addCase(getAllCoupons.rejected,(state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(createCoupon.pending, (state)=>{
            state.isLoading=true;
        }).addCase(createCoupon.fulfilled,(state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdCoupon=action.payload;
        }).addCase(createCoupon.rejected,(state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        });;
    },
});
export const { resetCouponState } = couponSlice.actions;
export default couponSlice.reducer;