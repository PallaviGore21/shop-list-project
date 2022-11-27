import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from 'axios'

const addShopsAction = createAsyncThunk("shop/add", async shopData => {
    try {
        const { data } = await axios.post(" http://localhost:5000/shop", shopData)
        return data
    } catch (error) {
        return error.message
    }
})

export const GetShopsAction = createAsyncThunk("shop/get", async shopData => {
    try {
        const { data } = await axios.get(" http://localhost:5000/shop", shopData)
        return data
    } catch (error) {
        return error.message
    }
})



export default addShopsAction