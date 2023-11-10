import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const userDefaultState={
    _id:null,
    fistname:null,
    lastname:null,
    email: null,
    mobile: null,
    token:null,
}

const initialState = {
    user: userDefaultState,
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(buider)=>{

    }
})