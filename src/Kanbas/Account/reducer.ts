import { createSlice } from "@reduxjs/toolkit";
//import {enrollments} from "../Database/enrollments.json"

const initialState = {
  currentUser: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    enroll: (state, { payload: courseId }) => {
      console.log(`I wanted to enroll in course #${courseId}`)
    }
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;