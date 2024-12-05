import { createSlice } from "@reduxjs/toolkit";


const imagesSlice =createSlice({
    name:'images',
    initialState:{images:{}},
    reducers:{
        setImages:(state,action)=>{
            state.images=action.payload;
        }
    }
})

export const imageActions= imagesSlice.actions;
export default imagesSlice.reducer;