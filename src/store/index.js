
import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./imagesSlice";
import bagSlice from "./bagSlice";
import shoesSlice from './shoesSlice';



const store= configureStore({
    reducer:{images:imagesSlice,
        bags:bagSlice,
        shoes:shoesSlice
    }
})

export default store;