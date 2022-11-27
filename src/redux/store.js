import { configureStore } from "@reduxjs/toolkit"
import shopSlice from "./reduxSlice"


const store = configureStore({
    reducer:
    {
        allshops: shopSlice,
       
    }
})
export default store
