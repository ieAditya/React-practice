import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    experienceYear: "",
    experienceMonth: "",
    skills: [],
    previousOrganization: "",
    completed: false
}

export const workExperienceDetailSlice = createSlice({
    name: "work-experience",
    initialState,
    reducers: {
        updateWorkExperience: (state, action) => {
            return {...state, ...action.payload}
        },
        clearWorkExperience: () => initialState
    }
})