import { createSlice } from "@reduxjs/toolkit";
import { Enrollment } from "../Types";

//state.enrollments is a list of Enrollment objects
const initialState: { enrollments: Enrollment[] } = {
    enrollments: []
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            console.log("ENROLLMENTS REDUCER - setting assignments");
            console.log(`${JSON.stringify(action.payload)}`);
            state.enrollments = action.payload;
        },
        addEnrollment: (state, { payload: enrollment }) => {
            const newEnrollment = enrollment as Enrollment;
            state.enrollments = [...state.enrollments, newEnrollment];
            console.log("ENROLLMENTS REDUCER - added an enrollment")
        },
        removeEnrollment: (state, { payload: enrollment }) => {
            const deleteEnrollment = enrollment as Enrollment;

            const removalIndex = state.enrollments.findIndex((e) => e.user_id === deleteEnrollment.user_id && e.course_id === deleteEnrollment.course_id);

            if (removalIndex !== -1) {
                state.enrollments.splice(removalIndex, 1);
                console.log("ENROLLMENTS REDUCER - removed an enrollment")
            }
        },
    }
});

export default enrollmentsSlice.reducer;
export const { setEnrollments, addEnrollment, removeEnrollment } = enrollmentsSlice.actions;