import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    matriculateSchool : "",
    matriculateMarks: "",
    matriculatePassingYear: "",
    intermediateSchool: "",
    intermediateMarks: "",
    intermediatePassingYear: "",
    graduationInstitute: "",
    graduationCgpa: "",
    graduationPassingYear: "",
    completed: false
}

export const educationDetailSlice = createSlice({
    name: "education-detail",
    initialState,
    reducers: {
        updateEducationDetail: (state, action) => {
            return {...state, ...action.payload}
        },
        clearEducationDetails: () => initialState,
    }
})

export const {updateEducationDetail, clearEducationDetails} = educationDetailSlice.actions;
export default educationDetailSlice.reducer;