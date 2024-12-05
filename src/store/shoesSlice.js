import { createSlice } from "@reduxjs/toolkit";


const shoesSlice=createSlice({
    name:'shoes',
    initialState:{shoes:[]},
    reducers:{
        addShoes:(state,action)=>{
            state.shoes=action.payload
        }
    }
})

export const shoesAction = shoesSlice.actions;
export default shoesSlice.reducer