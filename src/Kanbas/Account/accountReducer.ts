import { createSlice } from "@reduxjs/toolkit";
import {enrollments} from "../Database";
const initialState = {
  currentUser: null,
  userEnrollments: [""]
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      const ourEnrollments = enrollments.filter(
        (entry) => {
          console.log(`\t${entry}`)
          return entry.user === action.payload._id;
        }
      );
      state.userEnrollments = ourEnrollments.map((e) => {return e.course;});
    },
    enroll: (state, { payload: courseId }) => {
      console.log(`ENROLL #${courseId} --------`);
      state.userEnrollments = [...state.userEnrollments, courseId];
    },
    unenroll: (state, {payload: courseId}) => {
      console.log(`UN-ENROLL #${courseId} --------`);
      state.userEnrollments = state.userEnrollments.filter((e) => {return e !== courseId;})
      console.log(state.userEnrollments);
    }
  },
});
export const { setCurrentUser, enroll, unenroll } = accountSlice.actions;
export default accountSlice.reducer;