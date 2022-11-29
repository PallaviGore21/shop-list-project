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

export const DeleteshopAction = createAsyncThunk("shop/Delete", async ShopId => {
    try {
        const { data } = await axios.delete(`http://localhost:5000/shop/${ShopId}`)
        return data
    } catch (error) {
        return error.message
    }
})

export const UpdateshopAction = createAsyncThunk("shop/update", async allData => {
    try {
        const { data } = await axios.put(`http://localhost:5000/shop/${allData.id}`, allData)
        return data
    } catch (error) {
        return error.message
    }
})



export default addShopsAction