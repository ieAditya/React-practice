import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    addressLine1: "",
    addressLine2: "",
    country: "",
    state: "",
    city: "",
    pin: "",
    completed: false
}

export const addressDetailSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        updateAddress: (state, action) => {
            return {...state, ...action.payload}
        },
        clearAddress: () => initialState
    }
})