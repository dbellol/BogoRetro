import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uploadService from "./uploadService";

export const uploadImg= createAsyncThunk('upload/images', async(data, thunkAPI)=>{
    try{
        const formData =new FormData();
        for(let i=0; i<data.length;i++){
            formData.append("image",data[i]);
        }
        return await uploadService.uploadImg(formData);

    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const delImg= createAsyncThunk('delete/images', async(id, thunkAPI)=>{
    try{
        
        return await uploadService.deleteImg(id);

    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
const initialState={
    image:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}
export const uploadSlice = createSlice({
    name: "images",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(uploadImg.pending, (state)=>{
            state.isLoading=true;
        }).addCase(uploadImg.fulfilled,(state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.image=action.payload;
        }).addCase(uploadImg.rejected,(state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(delImg.pending, (state)=>{
            state.isLoading=true;
        }).addCase(delImg.fulfilled,(state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.image=[];
        }).addCase(delImg.rejected,(state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
    },
});
export default uploadSlice.reducer;