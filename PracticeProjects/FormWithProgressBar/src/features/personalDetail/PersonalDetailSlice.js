import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    mobile: "",
    email: "",
    dob: "",
    completed: false
}

const personalDetailSlice = createSlice({
    name: "personal-detail",
    initialState,
    reducers: {
        updatePersonalDetail: (state, action) => {
            Object.assign(state, action.payload)
        },
        clearPersonalDetail: () => initialState,
    }
})

export const {updatePersonalDetail, clearPersonalDetail} = personalDetailSlice.actions;
export default personalDetailSlice.reducer;