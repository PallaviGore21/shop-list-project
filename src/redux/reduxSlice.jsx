import { createSlice } from "@reduxjs/toolkit";
import addShopsAction, { DeleteshopAction, GetShopsAction, UpdateshopAction } from "./reduxAction";


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

            .addCase(DeleteshopAction.pending, (state, { payload }) => {
                state.loading = false
            })
            .addCase(DeleteshopAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.deleted= payload

            })
            .addCase(DeleteshopAction.rejected, (state, { payload }) => {
                state.loading = false
                state.deletrError = payload
            })

            .addCase(UpdateshopAction.pending, (state, { payload }) => {
                state.loading = false
            })
            .addCase(UpdateshopAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.updated= payload

            })
            .addCase(UpdateshopAction.rejected, (state, { payload }) => {
                state.loading = false
                state.deletrError = payload
            })

    }

})

export default shopSlice.reducer
