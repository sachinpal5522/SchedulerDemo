import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schedules: [],
};

const appointmentSlice = createSlice({
  name: "appointments",
  initialState: initialState,
});

export default appointmentSlice.reducer;
