import { createSlice } from "@reduxjs/toolkit";


const bagSlice=createSlice({
    name:'category',
    initialState:{bags:[]},
    reducers:{
        addBags:(state,action)=>{
            state.bags=action.payload
        }
    }
})

export const bagActions =bagSlice.actions;
export default bagSlice.reducer