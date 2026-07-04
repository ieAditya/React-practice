import {configureStore} from "@reduxjs/toolkit"
import PersonalDetailReducer from "../../features/personalDetail/PersonalDetailSlice";
import EducationDetailReducer from "../../features/EducationDetail/EducationDetailSlice";

export const store = configureStore({
    reducer: {
        PersonalDetail: PersonalDetailReducer,
        EducationDetail: EducationDetailReducer,
    }
})