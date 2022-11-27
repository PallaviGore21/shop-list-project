import { createSlice } from "@reduxjs/toolkit";
import addShopsAction, { GetShopsAction } from "./reduxAction";


const shopSlice = createSlice({
    name: "shops",
    initialState: { shops: [] },
    reducer: {},
    extraReducers(builder) {
        builder

            .addCase(addShopsAction.pending, (state, { payload }) => {
                state.loading = false
            })
            .addCase(addShopsAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.shopAdded = true
            })
            .addCase(addShopsAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(GetShopsAction.pending, (state, { payload }) => {
                state.loading = false
            })
            .addCase(GetShopsAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.shops = payload
            })
            .addCase(GetShopsAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

    }

})

export default shopSlice.reducer
