import { enrollments } from "../Database";
import { createSlice } from "@reduxjs/toolkit";
import { Enrollment } from "../Types";

//state.enrollments is a list of Enrollment objects
const initialState = {
    enrollments: enrollments.map((enroll) => {
        return { user_id: enroll.user, course_id: enroll.course } as Enrollment;
    })
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            console.log("ENROLLMENTS REDUCER - setting assignments")
            state.enrollments = action.payload;
        },
        addEnrollment: (state, { payload: enrollment }) => {
            const newEnrollment = enrollment as Enrollment;
            state.enrollments = [...state.enrollments, newEnrollment];
        },
        removeEnrollment: (state, { payload: enrollment }) => {
            const deleteEnrollment = enrollment as Enrollment;
            //console.log(`TRYING TO DELETE: ${JSON.stringify(deleteEnrollment, null, 2)}`);

            //compare every enrollment to the one we want to delete
            state.enrollments = state.enrollments.filter((enroll) => {
                const same_user = enroll.user_id === deleteEnrollment.user_id;
                const same_course = enroll.course_id === deleteEnrollment.course_id

                if (same_user && !same_course) {
                    return true;
                } else {
                    return false;
                }
            });
        },
    }
});

export default enrollmentsSlice.reducer;
export const { setEnrollments, addEnrollment, removeEnrollment } = enrollmentsSlice.actions;